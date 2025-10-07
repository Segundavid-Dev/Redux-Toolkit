import express from "express";
import dotenv from "dotenv";

// configure env for express app
dotenv.config();
// load port from env
const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`server started at port ${PORT} `);
});
