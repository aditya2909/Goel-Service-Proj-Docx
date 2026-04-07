import mongoose from "mongoose";

const prodSchema = new mongoose.Schema({
  prodName: { type: String, required: true },
});

const Product = mongoose.model("Product", prodSchema);

export default Product;
