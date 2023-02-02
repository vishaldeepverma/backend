const { Todo } = require("../models");
const { todoService } = require("../services");

// add todo controller
async function addTodoController(req, res, next) {
  try {
    const newTodo = await todoService.addTodoService(req.body);
    return res.status(201).send(newTodo);
  } catch (error) {
    next(error);
  }
}
// async function getAllTodoController(req, res, next) {
//   try {
//     const newTodo = await todoService.addTodoService(req.body);
//     return res.status(201).send(newTodo);
//   } catch (error) {
//     next(error);
//   }
// }
// async function deleteTodoController(req, res, next) {
//   try {
//     const newTodo = await todoService.addTodoService(req.body);
//     return res.status(201).send(newTodo);
//   } catch (error) {
//     next(error);
//   }
// }

// async function updateTodoController(req, res, next) {
//   try {
//     const newTodo = await todoService.addTodoService(req.body);
//     return res.status(201).send(newTodo);
//   } catch (error) {
//     next(error);
//   }
// }

const todoController = {
  addTodoController,
};

module.exports = todoController;
