const express = require("express");
const { todoController } = require("../controllers");

const router = express.Router();

// add todo
router.post("/", todoController.addTodoController);

// // get all todos
// router.get("/", todoController.getAllTodoController);

// // delete todo
// router.delete("/:id", todoController.deleteTodoController);

// // update todo
// router.put("/:id", todoController.updateTodoController);

module.exports = router;
