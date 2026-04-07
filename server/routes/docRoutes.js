import express from "express";
import {
  getDocument,
  createDocument,
  getDocumentById,
  deleteDocument,
  updateDocument,
} from "../controller/docController.js";

const docRouter = express.Router();

docRouter.get("/", getDocument);
docRouter.post("/create", createDocument);
docRouter.get("/:id", getDocumentById);
docRouter.put("/:id", updateDocument);
docRouter.delete("/:id", deleteDocument);

export default docRouter;
