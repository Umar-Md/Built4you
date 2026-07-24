import Resend from "@resend/client";

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM = process.env.RESEND_FROM;
const RESEND_TO = process.env.RESEND_TO;

const resend = new Resend(RESEND_API_KEY);

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value));

const buildLeadEmailHtml = ({ name, email, phone, message }) => `
  <h2 style="margin:0 0 16px;color:#2B2B2D;">New Lead from ${escapeHtml(name)}</h2>
  <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;">
    <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
    <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
    <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
    <tr><td><strong>Message</strong></td><td>${escapeHtml(message)}</td></tr>
  </table>
`;

const emailConfigError = () => {
  const missing = [
    !RESEND_API_KEY && "RESEND_API_KEY",
    !RESEND_FROM && "RESEND_FROM",
    !RESEND_TO && "RESEND_TO",
  ].filter(Boolean);

  if (missing.length === 0) {
    return null;
  }

  return new Error(`Missing required email environment variables: ${missing.join(", ")}`);
};

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

  const configError = emailConfigError();
  if (configError) {
    console.error(configError.message);
    return res.status(503).json({
      success: false,
      error: "Contact service unavailable. Email delivery is not configured.",
    });
  }

  try {
    await resend.emails.send({
      from: RESEND_FROM,
      to: RESEND_TO,
      subject: `New Lead from ${name}`,
      html: buildLeadEmailHtml({ name, email, phone, message }),
      replyTo: email,
    });

    return res.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Unable to send contact email with Resend:", {
      message: error?.message,
      code: error?.code,
      status: error?.status,
      response: error?.response,
      stack: error?.stack,
    });

    return res.status(500).json({
      success: false,
      error: "Unable to send message. Please try again later.",
    });
  }
};
