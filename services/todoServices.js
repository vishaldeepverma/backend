const { Todo } = require("../models");

// add todo service
function addTodoService(todo) {
  const newTodo = new Todo(todo);
  return newTodo.save();
}

// get all todo service
function getAllTodoService() {
  return Todo.find();
}

// delete todo service
function deleteTodoService(_id) {
  return Todo.deleteOne({ _id });
}

// update todo service
function updateTodoService(_id, updatedTodo) {
  return Todo.updateOne({ _id }, updatedTodo);
}

const todoService = {
  addTodoService,
  getAllTodoService,
  deleteTodoService,
  updateTodoService,
};

// export todo service
module.exports = todoService;
