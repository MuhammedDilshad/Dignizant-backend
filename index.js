import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import handleError from "http-errors";
import connectDB from "./config/config.js";
import cors from "cors";
import dotenv from "dotenv";
import UserRouter from "./routes/user.js";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
connectDB();
dotenv.config();

app.use(cors());

app.use("/", UserRouter);

app.use(function (req, res, next) {
  next(handleError(404));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
// googleForm
