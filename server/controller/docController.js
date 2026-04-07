import ProjDoc from "../models/ProjDoc.js";

export const getDocument = async (req, res) => {
  try {
    const document = await ProjDoc.find().populate("productName");
    if (!document) {
      res.json({ success: false, message: "No Document found" });
    }

    res.json({ success: true, document });
  } catch (error) {
    console.log(error.message);
  }
};

export const createDocument = async (req, res) => {
  try {
    const data = req.body;

    const newDocument = new ProjDoc(data);
    const savedDocument = await newDocument.save();

    res.status(201).json({
      success: true,
      message: "Document created successfully",
      data: savedDocument,
    });
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      success: false,
      message: "Failed to create document",
      error: error.message,
    });
  }
};

export const getDocumentById = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await ProjDoc.findById(id).populate("productName");
    if (!document) {
      res.json({ success: false, message: "No Document found" });
    }

    res.json({ success: true, document });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedDocument = await ProjDoc.findByIdAndUpdate(id, data, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Record Updated Succeddfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteDocument = async (req, res) => {
  try {
    const { id } = req.params;
    await ProjDoc.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Record Deleted Succeddfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};
