import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

router.post("/", async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Please provide a valid email." });
    }
    if (name.length > 100 || message.length > 2000) {
      return res.status(400).json({ error: "Input too long." });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.resend.com",
      port: 465,
      secure: true,
      auth: {
        user: "resend",
        pass: process.env.RESEND_API_KEY,
      },
    });

    await transporter.sendMail({
      from: "onboarding@resend.dev", // ye change karo
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    res.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    next(err);
  }
});

export default router;
