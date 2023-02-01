require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { Todo } = require("./models/todo");
const PORT = process.env.PORT || 3000;
const app = express();
// middleswares
app.use(express.json());

// connect to mongodb
mongoose
  .connect("mongodb://127.0.0.1:27017/todo")
  .then(() => console.log(">>>>> connected to db successfully"));

// add todo
app.post("/api/todos", async (req, res, next) => {
  const newTodo = new Todo(req.body);
  const dbResponse = await newTodo.save();
  return res.send(dbResponse);
});

// get all todos
app.get("/api/todos", async (req, res, next) => {
  const dbResponse = await Todo.find();
  return res.send(dbResponse);
});

// delete todo
app.delete("/api/todos/:id", async (req, res, next) => {
  const dbResponse = await Todo.deleteOne({ _id: req.params.id });
  return res.send(dbResponse);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
