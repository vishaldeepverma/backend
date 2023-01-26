require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/", (req, res, next) => {
  return res.send("hello world");
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
