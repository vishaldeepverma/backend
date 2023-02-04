require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { Todo } = require("./models/todo");
const { todoRoutes } = require("./routes");

const PORT = process.env.PORT || 3000;
const app = express();
// middleswares
app.use(express.json());

console.log(process.env.DBUSER);
console.log(process.env.DBPASSWORD);

// connect to mongodb
mongoose
  .connect(
    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.0ewjugo.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log(">>>>> connected to db successfully"));

// use todo routes
app.use("/api/todos", todoRoutes);

// error handler
app.use((error, req, res, next) => {
  res.status(500).send({
    message: "Internal server error",
  });
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
