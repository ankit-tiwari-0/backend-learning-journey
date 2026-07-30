import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()                                              
const app = express();


app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err.message);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});