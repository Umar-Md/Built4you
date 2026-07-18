import nodemailer from "nodemailer";

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export const handleContact = async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ success: false, error: "All fields required" });
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("Email credentials are not configured");
    return res.status(503).json({ success: false, error: "Contact service unavailable" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `New Lead from ${name}`,
      html: `
        <h2 style="margin:0;color:#2B2B2D;">
  New Lead from ${name}
</h2>
        <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
          <tr><td><strong>Message</strong></td><td>${escapeHtml(message)}</td></tr>
        </table>
      `,
    });

    return res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Unable to send contact email:", error);
    return res.status(500).json({ success: false, error: "Unable to send message" });
  }
};
