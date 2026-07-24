const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_FROM = process.env.CONTACT_FROM;
const CONTACT_TO = (process.env.CONTACT_TO || process.env.EMAIL_TO || "")
  .split(",")
  .map((email) => email.trim())
  .filter(Boolean);

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

const sendLeadEmail = async ({ name, email, phone, message }) => {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      reply_to: email,
      subject: `New Lead from ${name}`,
      html: buildLeadEmailHtml({ name, email, phone, message }),
    }),
  });

  if (!response.ok) {
    let details = null;

    try {
      details = await response.json();
    } catch {
      details = await response.text();
    }

    const error = new Error("Resend email delivery failed");
    error.status = response.status;
    error.details = details;
    throw error;
  }

  return response.json();
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

  if (!RESEND_API_KEY || !CONTACT_FROM || CONTACT_TO.length === 0) {
    console.error(
      "Contact email service is missing RESEND_API_KEY, CONTACT_FROM, or CONTACT_TO.",
    );

    return res.status(503).json({
      success: false,
      error: "Contact service unavailable. Email delivery is not configured.",
    });
  }

  try {
    await sendLeadEmail({ name, email, phone, message });

    return res.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Unable to send contact email with Resend:", {
      message: error?.message,
      status: error?.status,
      details: error?.details,
      stack: error?.stack,
    });

    return res.status(500).json({
      success: false,
      error: "Unable to send message. Please try again later.",
    });
  }
};
