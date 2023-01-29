require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
// middleswares
app.use(express.json());

// data
const todos = [];

// save/add todo
app.post("/api/todos", (req, res, next) => {
  req.body.id = todos.length + 1;
  todos.push(req.body);
  return res.status(201).send(req.body);
});

// update/edit todo
app.put("/api/todos/:id", (req, res, next) => {
  return res.send("hello put");
});

// delete todo
app.delete("/api/todos/:id", (req, res, next) => {
  return res.send("hello delete");
});

// get all todos
app.get("/api/todos/", (req, res, next) => {
  return res.send(todos);
});

// get todo by id
app.get("/api/todos/:id", (req, res, next) => {
  const todo = todos.find((todo) => todo.id === +req.params.id);
  if (todo) {
    return res.send(todo);
  }
  return res.status(404).send();
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
