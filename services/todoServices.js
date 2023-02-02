const { Todo } = require("../models");

// add todo service
async function addTodoService(todo) {
  const newTodo = new Todo(todo);
  return await newTodo.save();
}

// function getAllTodoService() {
//   return Todo.find();
// }

// async function deleteTodoService(todo) {
//   const newTodo = new Todo(todo);
//   return await newTodo.save();
// }

// async function updateTodoService(todo) {
//   const newTodo = new Todo(todo);
//   return await newTodo.save();
// }

const todoService = {
  addTodoService,
};

module.exports = todoService;
