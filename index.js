require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { Todo } = require("./models/todo");
const { todoRoutes } = require("./routes");

const PORT = process.env.PORT || 3000;
const app = express();
// middleswares
app.use(express.json());

// use todo routes
app.use("/api/todos", todoRoutes);

// connect to mongodb
mongoose
  .connect("mongodb://127.0.0.1:27017/todo")
  .then(() => console.log(">>>>> connected to db successfully"));

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
