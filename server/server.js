import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { configDotenv } from "dotenv";
import connectDB from "./configs/db.js";
import connectCloudinary from "./configs/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import sellerRouter from "./routes/sellerRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import addressRouter from "./routes/addressRoute.js";
import orderRouter from "./routes/orderRoute.js";
import { stripeWebhooks } from "./controllers/orderController.js";

configDotenv();
const app = express();
const PORT = process.env.PORT || 4000;

await connectDB();
await connectCloudinary();

// Allow multiple origins
const allowedOrigins = [
  "https://green-cart-azure.vercel.app",
  "http://localhost:4400",
  "http://127.0.0.1:4400",
];

app.post("/stripe", express.raw({ type: "application/json" }), stripeWebhooks);

// Middleware Configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.get("/", (req, res) => {
  res.send("API is working!");
});

app.use("/api/user", userRouter);
app.use("/api/seller", sellerRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/address", addressRouter);
app.use("/api/order", orderRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
