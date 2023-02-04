const { Todo } = require("../models");
const { todoService } = require("../services");

// add todo controller
async function addTodoController(req, res, next) {
  try {
    throw new Error("bad happend");
    const newTodo = await todoService.addTodoService(req.body);
    return res.status(201).send(newTodo);
  } catch (error) {
    next(error);
  }
}

// get all todo controller
async function getAllTodoController(req, res, next) {
  try {
    const newTodo = await todoService.getAllTodoService(req.body);
    return res.status(201).send(newTodo);
  } catch (error) {
    next(error);
  }
}

//delete todo controller
async function deleteTodoController(req, res, next) {
  try {
    const deletedTodo = await todoService.deleteTodoService(req.params.id);
    return res.send(deletedTodo);
  } catch (error) {
    next(error);
  }
}

// update todo controller
async function updateTodoController(req, res, next) {
  try {
    const updatedTodo = await todoService.updateTodoService(
      req.params.id,
      req.body
    );
    return res.send(updatedTodo);
  } catch (error) {
    next(error);
  }
}

const todoController = {
  addTodoController,
  getAllTodoController,
  deleteTodoController,
  updateTodoController,
};

// export todo controller
module.exports = todoController;
