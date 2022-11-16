// importing express
const express = require("express");
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;
const cors = require("cors");
dotenv.config();
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

app.use(cors({ origin: "*" }));
// server
app.listen(port, function (err) {
  if (err) {
    console.log("somthing wrong with server");
  }
  console.log(`server is running on ${port}`);
});
