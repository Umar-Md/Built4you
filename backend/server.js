import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.set("trust proxy", 1);
app.use(helmet());

const allowedOrigins = (
  process.env.FRONTEND_URL ||
  "http://localhost:3000,https://built4you.in,https://www.built4you.in"
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      const error = new Error("Origin not allowed by CORS");
      error.status = 403;
      return callback(error);
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: false,
  }),
);

app.use(express.json({ limit: "20kb" }));

app.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    status: "ok",
  });
});

app.use(
  "/api/contact",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: "draft-7",
    legacyHeaders: false,
    message: {
      success: false,
      error: "Too many requests. Please try again later.",
    },
  }),
  contactRoutes,
);

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found",
  });
});

app.use((err, _req, res, _next) => {
  console.error(err);

  const status = err.status || 500;

  res.status(status).json({
    success: false,
    error: status === 403 ? err.message : "Internal Server Error",
  });
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
