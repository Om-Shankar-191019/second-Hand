import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "HI" });
});

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    app.listen(port, () => console.log(`server is running on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
