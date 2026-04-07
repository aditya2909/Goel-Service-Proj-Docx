import Product from "../models/Product.js";

export const getProduct = async (req, res) => {
  try {
    const product = await Product.find();
    if (!product) {
      res.json({ success: false, message: "No Product found" });
    }

    res.json({ success: true, product });
  } catch (error) {
    console.log(error.message);
  }
};

export const createProduct = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const newProduct = new Product(data);
    const savedProduct = await newProduct.save();

    res.status(201).json({
      success: true,
      message: "product created successfully",
      data: savedProduct,
    });
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      success: false,
      message: "Failed to create product",
      error: error.message,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      res.json({ success: false, message: "No product found" });
    }

    res.json({ success: true, product });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, data, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Record Updated Succeddfully",
      data: updatedProduct,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    await Product.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Record Deleted Succeddfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};
