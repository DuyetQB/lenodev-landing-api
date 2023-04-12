
 const axios = require("axios");

const getAllProduct = async (req, res) => {
  try {
    const url = `https://lenodevapiadmin.onrender.com/api/productAll`
    const datasResponse = await axios.get(url);
  return res.status(200).json({ data: datasResponse?.data, statusMessage: "ok" });
  } catch (error) {
    console.log("err:", error);
  }
};

const getProductById = async (req, res) => {
  try {
    const url = `https://lenodevapiadmin.onrender.com/api/product/${req.params.slug}`;
    const datasResponse = await axios.get(url)

  return res.status(200).json({ data: datasResponse?.data.data, statusMessage: "ok" });

  } catch (error) {
    console.log("err:", error);
  }
};

module.exports = {
  getAllProduct,
  getProductById
};
