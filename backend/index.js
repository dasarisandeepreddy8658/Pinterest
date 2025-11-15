import express from "express";
import dotenv from "dotenv";
//import authRoutes from "./routes/auth.js";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import cloudinary from 'cloudinary';

//importing routes
import userRoutes from "./routes/userRoutes.js";
import pinRouters from "./routes/pinRoutes.js";

import path from 'path';

dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.Cloud_Name,
  api_key: process.env.Cloud_API,
  api_secret: process.env.Cloud_Secret_API,
});

const PORT = process.env.PORT || 5000;

const app = express();

//using middlewares
app.use(express.json());
app.use(cookieParser());



//using routes
app.use("/api/user", userRoutes);
app.use("/api/pin", pinRouters);


app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
  connectDB();
});