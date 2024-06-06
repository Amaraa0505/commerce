import express, { Application, Request, Response } from "express";
import cors from "cors";
import productRoute from "./router/productRoute";
import incomeRoute from "./router/incomeRoute";
import { connectDB } from "./config/db";
import orderRoute from "./router/orderRoute";
import authRoute from "./router/authRoute";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI as string;

const app: Application = express();

connectDB(MONGO_URI);

app.use(cors());
app.use(express.json());
app.use("/order", orderRoute);
app.use("/product", productRoute);
app.use("/income", incomeRoute);
app.use("/user", authRoute),
  app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
