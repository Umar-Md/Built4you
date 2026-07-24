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
const EMAIL_HOST = process.env.EMAIL_HOST || "smtp.gmail.com";
const EMAIL_PORT = Number(process.env.EMAIL_PORT || 587);
const EMAIL_SECURE = process.env.EMAIL_SECURE === "true";
const EMAIL_DEBUG = process.env.EMAIL_DEBUG === "true";

const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: EMAIL_SECURE,
  requireTLS: EMAIL_PORT === 587 && !EMAIL_SECURE,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
  family: 4, // Force IPv4 because Render's IPv6 egress is not working for Gmail SMTP.
  connectionTimeout: 20000, // 20 seconds to establish the TCP connection.
  greetingTimeout: 20000, // 20 seconds waiting for greeting after connect.
  socketTimeout: 20000, // 20 seconds of inactivity on the SMTP socket.
  logger: EMAIL_DEBUG,
  debug: EMAIL_DEBUG,
  tls: {
    rejectUnauthorized: true, // Validate Gmail's certificate in production.
  },
});

if (EMAIL_DEBUG) {
  console.log("📧 Nodemailer debug enabled:", {
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    secure: EMAIL_SECURE,
    requireTLS: EMAIL_PORT === 587 && !EMAIL_SECURE,
  });
}

export const verifyMailTransporter = async () => {
  if (!EMAIL_USER || !EMAIL_PASS) {
    throw new Error(
      "Missing EMAIL_USER or EMAIL_PASS environment variables for Gmail SMTP",
    );
  }

  // Verify the SMTP transport configuration. This is a lightweight authentication check.
  return transporter.verify();
};

export const handleContact = async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      error: "All form fields are required.",
    });
  }

  if (!EMAIL_USER || !EMAIL_PASS) {
    console.error("Email credentials are not configured for Gmail SMTP.");
    return res.status(503).json({
      success: false,
      error: "Contact service unavailable. Email credentials are not set.",
    });
  }

  try {
    await verifyMailTransporter();

    await transporter.sendMail({
      from: EMAIL_USER,
      replyTo: email,
      to: EMAIL_TO,
      subject: `New Lead from ${name}`,
      html: `
        <h2 style="margin:0;color:#2B2B2D;">New Lead from ${escapeHtml(name)}</h2>
        <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
          <tr><td><strong>Message</strong></td><td>${escapeHtml(message)}</td></tr>
        </table>
      `,
    });

    return res.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Unable to send contact email:", {
      message: error?.message,
      code: error?.code,
      response: error?.response,
      responseCode: error?.responseCode,
      stack: error?.stack,
    });

    const isNetworkError = ["ETIMEDOUT", "ECONNECTION", "ENETUNREACH", "EAI_AGAIN"].includes(
      error?.code,
    );

    return res.status(500).json({
      success: false,
      error: isNetworkError
        ? "Unable to send message due to email delivery timeout. Check SMTP connectivity and Render outbound rules."
        : "Unable to send message. Please try again later.",
    });
  }
};
