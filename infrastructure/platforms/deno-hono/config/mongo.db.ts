import { MONGO_URI } from "@/constants/env.ts";
import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};
export default connectToMongoDB;
