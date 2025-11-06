import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import feedbackRoutes from "./routes/feedbackRoutes.js";

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/feedback", feedbackRoutes);

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(" MongoDB Connected");
    app.listen(process.env.PORT, () =>
      console.log(` Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.log(" DB Error:", err));