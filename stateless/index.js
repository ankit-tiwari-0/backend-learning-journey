import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

 
import router from "./routes/user.router.js";

dotenv.config()                                              
const app = express();


app.use(express.json());

app.use("/api/auth", router)

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