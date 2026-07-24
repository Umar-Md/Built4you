import nodemailer from "nodemailer";

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_TO = process.env.EMAIL_TO || process.env.EMAIL_USER;

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

const buildLeadEmailHtml = ({ name, email, phone, message }) => `
  <h2 style="margin:0 0 16px;color:#2B2B2D;">New Lead from ${escapeHtml(name)}</h2>
  <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;">
    <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
    <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
    <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
    <tr><td><strong>Message</strong></td><td>${escapeHtml(message)}</td></tr>
  </table>
`;

export const handleContact = async (req, res) => {
  const name = String(req.body?.name || "").trim();
  const email = String(req.body?.email || "").trim();
  const phone = String(req.body?.phone || "").trim();
  const message = String(req.body?.message || "").trim();

  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      error: "All form fields are required.",
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      error: "Please enter a valid email address.",
    });
  }

  if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
    console.error("Contact email service is missing EMAIL_USER, EMAIL_PASS, or EMAIL_TO.");

    return res.status(503).json({
      success: false,
      error: "Contact service unavailable. Email delivery is not configured.",
    });
  }

  try {
    await transporter.sendMail({
      from: `"Built4You Contact" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      replyTo: email,
      subject: `New Lead from ${name}`,
      html: buildLeadEmailHtml({ name, email, phone, message }),
    });

    return res.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Unable to send contact email with Gmail SMTP:", {
      message: error?.message,
      code: error?.code,
      response: error?.response,
      responseCode: error?.responseCode,
      stack: error?.stack,
    });

    return res.status(500).json({
      success: false,
      error: "Unable to send message. Please try again later.",
    });
  }
};
