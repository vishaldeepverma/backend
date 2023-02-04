const { Todo } = require("../models");

// add todo service
function addTodoService(todo) {
  const newTodo = new Todo(todo);
  return newTodo.save();
}

function getAllTodoService() {
  return Todo.find();
}

function deleteTodoService(_id) {
  return Todo.deleteOne({ _id });
}

async function updateTodoService(_id, updatedTodo) {
  return Todo.updateOne({ _id }, updatedTodo);
}

const todoService = {
  addTodoService,
  getAllTodoService,
  deleteTodoService,
  updateTodoService,
};

module.exports = todoService;
