import express from "express";
import dotenv from "dotenv";
import { StatusCodes } from "http-status-codes"; //???
import morgan from "morgan";
import cors from "cors";
import globalRoutes from "./routes";

dotenv.config();

// init app
const PORT = 4100;
const app = express();

//init middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api", globalRoutes);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
