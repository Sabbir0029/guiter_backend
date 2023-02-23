const express = require("express");
const productControllers = require("../controllers/product.controllers");
const router = express.Router();
const uploader = require("../middleware/uploader");

router
  .route("/")
  .get(productControllers.getProduct)
  .post(uploader.single("image"), productControllers.postProduct);

router
  .route("/:id")
  .patch(productControllers.updataProductController)
  .delete(productControllers.deleteProductController);

  
module.exports = router;
