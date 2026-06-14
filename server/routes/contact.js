import express from "express";
import { Resend } from "resend";

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

router.post("/", async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message)
      return res.status(400).json({ error: "All fields are required." });
    if (!isValidEmail(email))
      return res.status(400).json({ error: "Please provide a valid email." });
    if (name.length > 100 || message.length > 2000)
      return res.status(400).json({ error: "Input too long." });

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.CONTACT_RECEIVER,
      reply_to: email,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    res.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    next(err);
  }
});

export default router;