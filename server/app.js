const express = require("express");
const connectDB = require("./db");
const app = express();

connectDB();

app.use(express.json());

app.listen(8001, () => {
  console.log("listening on the port number 8001");
});
