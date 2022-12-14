// importing express
const express = require("express");
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;
const cors = require("cors");
dotenv.config();
const path = require("path");
// creating app
const app = express();
// db access
const db = require("./config/mongoose");
// product routes
const productRouter = require("./routes/ProductRoutes");
// middleware
app.use(express.json());
app.use(express.static("public"));
// routes middleware
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.use("/products", productRouter);

app.use(cors({ origin: "*" }));
// server
app.listen(port, function (err) {
  if (err) {
    console.log("somthing wrong with server");
  }
  console.log(`server is running on ${port}`);
});
