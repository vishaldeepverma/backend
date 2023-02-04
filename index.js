require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { todoRoutes } = require("./routes");

const PORT = process.env.PORT || 3000;
const app = express();

// middleswares
app.use(express.json());

// connect to mongodb
mongoose
  .connect(
    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.0ewjugo.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log(">>>>> connected to db successfully"));

// check health
app.get("/health", (req, res, next) => {
  res.send("I am healthy!!");
});

// use todo routes
app.use("/api/todos", todoRoutes);

// custom error handler
app.use((error, req, res, next) => {
  if (process.env.NODE_ENV === "dev") {
    return res.status(500).send({
      message: error.message
    });
  }
  return res.status(500).send({
    message: "Internal server error",
  });
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
