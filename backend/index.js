import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const LINK = process.env.LINK;

app.use(express.json());
app.use(cors());

async function dbConnect() {
  await mongoose
    .connect(LINK)
    .catch((err) => console.log(err))
    .then(console.log("Connected to database"));
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("auth/register", (req, res) => {});

app.listen(PORT, (err) => {
  if (err) {
    console.log("Server can't start", err);
  }
  console.log("Server started..."),
    console.log("Server run on port :", PORT),
    dbConnect();
});

// mongodb+srv://yevheniidev2:test123@fullstack-test.aghfrkd.mongodb.net/
