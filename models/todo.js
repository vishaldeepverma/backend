const mongoose = require("mongoose");

// create schema
const todoSchema = mongoose.Schema({
  message: String,
});

// create model
const todoModel = mongoose.model("Todo", todoSchema);

// export todo model
module.exports = {
  Todo: todoModel,
};
