import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.log("connected to database", connectInstance.connection.host);
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};
