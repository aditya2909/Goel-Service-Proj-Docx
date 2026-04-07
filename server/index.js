import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import docRouter from "./routes/docRoutes.js";
import prodRouter from "./routes/prodRoutes.js";

dotenv.config();
const app = express();
await connectDb();
app.use(express.json());

const PORT = process.env.PORT || "5000";

app.use(cors());
app.use("/api/document", docRouter);
app.use("/api/product", prodRouter);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
