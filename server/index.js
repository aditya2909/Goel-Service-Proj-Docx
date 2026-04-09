import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import docRouter from "./routes/docRoutes.js";
import prodRouter from "./routes/prodRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "https://goel-service-proj-docx-tvij-client.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.options("*", cors());

// connect DB BEFORE routes execute
app.use(async (req, res, next) => {
  await connectDb();
  next();
});

app.use("/api/document", docRouter);
app.use("/api/product", prodRouter);

app.get("/", (req, res) => {
  res.send("Backend working!");
});

export default app;
