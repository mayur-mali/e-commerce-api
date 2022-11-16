// importing express
const express = require("express");
// creating app
const app = express();
// db access
const db = require("./config/mongoose");
// product routes
const productRouter = require("./routes/ProductRoutes");
// middleware
app.use(express.json());

// routes middleware
app.use("/products", productRouter);

// server
app.listen(8080, function (err) {
  if (err) {
    console.log("somthing wrong with server");
  }
  console.log("server is running on 8080");
});
