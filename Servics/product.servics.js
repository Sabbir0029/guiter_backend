const Product = require("../models/Product");

exports.getProductServics = async () => {
  const result = Product.find({});
  return result;
};

exports.postProductServics = async (data) => {
  const product = new Product(data);
  const result = product.save();
  return result;
};
exports.updataProductservice = async (productId, data) => {
  const result = await Product.updateOne(
    { _id: productId },
    { $set: data },
    { runValidators: true }
  );
  return result;
};
exports.deleteProductservice = async (productId) => {
  const result = await Product.deleteOne({ _id: productId });
  return result;
};
