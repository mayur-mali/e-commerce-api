const express = require("express");
// importing controllers
const {
  getAllProduct,
  create,
  deleteProduct,
  updateProductQuantity,
} = require("../controllers/productController");

const router = express.Router();
// getting all products url
router.get("/", getAllProduct);

// create product url
router.post("/create", create);
// delete product url
router.delete("/:id", deleteProduct);
// update product
router.put("/:id/update_quantity", updateProductQuantity);

module.exports = router;
