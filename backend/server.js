import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();

// Trust Render's proxy
app.set("trust proxy", 1);

// Security headers
app.use(helmet());

const port = process.env.PORT || 5000;

// Allowed frontend origins
const allowedOrigins = (process.env.FRONTEND_URL || "http://localhost:3000")
  .split(",")
  .map((origin) => origin.trim());

app.use(
  cors({
    origin(origin, callback) {
      // Allow requests with no origin (Postman, curl, health checks)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origin not allowed by CORS"));
    },
    methods: ["GET", "POST"],
    credentials: false,
  })
);

// Parse JSON body
app.use(express.json({ limit: "20kb" }));

// Health check endpoint
app.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    status: "ok",
  });
});

// Contact API with rate limiting
app.use(
  "/api/contact",
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 5,
    standardHeaders: "draft-7",
    legacyHeaders: false,
    message: {
      success: false,
      error: "Too many requests. Please try again later.",
    },
  }),
  contactRoutes
);

// 404 Handler
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found",
  });
});

// Global Error Handler
app.use((err, _req, res, _next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    error: "Internal Server Error",
  });
});

// Start server
app.listen(port, () => {
  console.log(`✅ Backend running on port ${port}`);
});