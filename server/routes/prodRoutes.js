import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProductById,
  updateProduct,
} from "../controller/prodController.js";

const prodRouter = express.Router();

prodRouter.get("/", getProduct);
prodRouter.post("/create", createProduct);
prodRouter.get("/:id", getProductById);
prodRouter.put("/:id", updateProduct);
prodRouter.delete("/:id", deleteProduct);

export default prodRouter;
