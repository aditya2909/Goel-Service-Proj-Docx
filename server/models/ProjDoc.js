import mongoose from "mongoose";

const docSchema = new mongoose.Schema(
  {
    projName: {
      type: String,
      required: [true, "Project name is required"],
      trim: true,
    },
    projLocation: {
      type: String,
      required: [true, "Project location is required"],
      trim: true,
    },
    clientName: {
      type: String,
      trim: true,
    },
    clientLocation: {
      type: String,
      trim: true,
    },
    productName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product", // ⚠️ match exact model name
      required: true,
    },
    orderDate: {
      type: Date,
    },
    engineNo: {
      type: String,
      trim: true,
    },
    alternatorNo: {
      type: String,
      trim: true,
    },
    orderNo: {
      type: String,
      trim: true,
    },
    dateOfSubstantial: {
      type: Date,
    },
    warrantyStartDate: {
      type: Date,
    },
    warrantyEndDate: {
      type: Date,
    },
    installationDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

const ProjDoc = mongoose.model("ProjDoc", docSchema);

export default ProjDoc;
