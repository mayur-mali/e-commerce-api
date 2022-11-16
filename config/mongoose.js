const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ecommerce", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to mongodb");
  }
});
