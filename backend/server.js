import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 8000;
import productsRoutes from "../backend/routes/productRoutes.js";

connectDB(); //Connect to DB

const app = express();

app.get("/", (req, res) => {
  res.send("API is running ...");
});

app.use("/api/products", productsRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
