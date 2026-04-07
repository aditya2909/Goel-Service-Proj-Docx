import mongoose from "mongoose";
import "dotenv/config";

const uri = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(uri);
    console.log(`MongoDB Connection successfully`);
  } catch (error) {
    console.error("MongoDB connection interupted");
    process.exit(1);
  }
};

export default connectDb;
