const {
  getProductServics,
  postProductServics,
  updataProductservice,
  deleteProductservice,
} = require("../Servics/product.servics");

exports.getProduct = async (req, res) => {
  try {
    const result = await getProductServics();
    res.status(200).json({
      status: "success",
      message: "data get successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data not get",
      error: error.message,
    });
  }
};

exports.postProduct = async (req, res) => {
  try {
    const info = {
      name: req.body.name,
      image: req.file.path,
      description: req.body.description,
      price: req.body.price,
    };
    const result = await postProductServics(info);
    res.status(200).json({
      status: "success",
      message: "data Post successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data not post",
      error: error.message,
    });
  }
};
exports.updataProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await updataProductservice(id, req.body);
    res.status(200).json({
      status: "success",
      message: "data update sucessfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data not updata",
      error: error.message,
    });
  }
};

exports.deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteProductservice(id);
    res.status(200).json({
      status: "success",
      message: "data delete sucessfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data not delete",
      error: error.message,
    });
  }
};
