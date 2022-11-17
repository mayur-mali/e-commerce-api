const Product = require("../models/Product");

// getAll Products
module.exports.getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length == 0) {
      res.status(204).json({ message: "No Product" });
    }
    return res.status(200).json({ data: products, message: "success" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// createProduct

module.exports.create = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(200).json({ data: product, message: "product added" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// deleteProduct

module.exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "product deleted" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// updateProductQuantity

module.exports.updateProductQuantity = async (req, res) => {
  try {
    const quantity = req.query.number;
    await Product.findByIdAndUpdate(req.params.id, {
      ...req.body,
      quantity,
    });
    return res.status(200).json({ message: "updated successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
