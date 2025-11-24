import dotenv from "dotenv";
import { app } from "./src/app.js";
import { connectDB } from "./src/config/database.js";

dotenv.config({ path: "./.env" });

const startServer = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
};
startServer();
