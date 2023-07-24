import express from "express";
import cors from "cors";

import connectDB from "./database/db.js";
import userRoute from "./routes/userRoute.js";
import productsRoute from "./routes/productsRoute.js";

const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.use("/users", userRoute);
    app.use("/products", productsRoute);
    app.get("/", (req, res) => {
      res.send("");
    });
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

startServer();
