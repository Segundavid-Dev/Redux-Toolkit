import express from "express";
import dotenv from "dotenv";
import { readFileSync } from "node:fs";

const app = express();

// middleware to be able to parse request body
app.use(express.json());

// configure env for express app
dotenv.config();
// load port from env
const PORT = process.env.PORT || 3000;

// reading files async is the more preferred way in express JS to keep the server responsive but i will be using the sync method so as to reuse the data across each request
const todos = JSON.parse(readFileSync("../server/data/todos.json", "utf-8"));
// convert into a json object

app.get("/", (req, res) => {
  res.send("CRUD OPERATIONS");
});

// perform CRUD OPERATIONS USING HTTP METHODS (create, read, update, delete)

// get all todos
app.get("/api/todos", (req, res) => {
  res.status(200).json(todos);
});

// run the server on specified port
app.listen(PORT, () => {
  console.log(`server started at port ${PORT} `);
});
