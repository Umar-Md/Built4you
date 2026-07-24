import express from "express";
import {
  handleContact,
  verifyMailTransporter,
} from "../controllers/contactController.js";

const router = express.Router();

// Verify the SMTP transporter once when this route module is loaded.
// This catches bad Gmail credentials, app password issues, or Render outbound
// connectivity problems early during startup instead of only after a request.
(async () => {
  try {
    await verifyMailTransporter();
    console.log("✅ Gmail SMTP transporter verified successfully");
  } catch (error) {
    console.error(
      "✉️ Mail transporter verification failed:",
      error?.code || error?.message || error,
    );
    console.error(
      "Ensure EMAIL_USER, EMAIL_PASS, and Render outbound SMTP access are correct.",
    );
  }
})();

// POST /api/contact
router.post("/", handleContact);

export default router;
