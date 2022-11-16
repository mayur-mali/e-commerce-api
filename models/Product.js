const mongoose = require("mongoose");

// create schema for product
const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Product", productSchema);
