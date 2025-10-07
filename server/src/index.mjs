import express from "express";
import dotenv from "dotenv";
import { readFileSync } from "node:fs";
import { writeFileSync } from "node:fs";

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

app.get("/api/todos/:id", (req, res) => {
  const { id } = req.params;

  // convert id from string to number
  const parseId = parseInt(id);

  // validate req params
  if (isNaN(id)) {
    res.status(404).json({ error: "Invalid id" });
  }

  if (parseId > todos.length)
    return res.status(404).json({ error: "No todo found with that Id" });

  const findTask = todos.find((todo) => todo.id === parseId);

  res.status(200).json(findTask);
});

// post request -> creating a new resource
app.post("/api/todos", (req, res) => {
  // read the request body as an object from the req object

  // creation of id is done by the database so i would mimic that operation here

  // increment id based on json object
  const id = todos.length + 1;

  const requestBody = req.body;
  const newTask = { id, ...requestBody };

  // write newTask into json file
  todos.push(newTask);

  // write update array back into todo json
  writeFileSync(
    "../server/data/todos.json",
    JSON.stringify(todos, null, 2),
    "utf-8"
  );

  // created new resource successfully
  res.status(201).json({
    message: "New resource created successfully",
    newTask,
  });
});

// run the server on specified port
app.listen(PORT, () => {
  console.log(`server started at port ${PORT} `);
});
