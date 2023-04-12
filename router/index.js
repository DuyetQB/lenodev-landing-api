const { getAllProduct , createProduct , updateProduct ,
     deleteProductById , getProductById ,deleteProductAll ,
      findProductByName, updateViewProduct } = require("../controller/index");

const { Login, Signup , Profile , userRefreshToken }= require("../controller/user");
const { Middleware } = require("../middleware/index");
const express = require("express");
const router = express.Router();

router.get("/api/productAll/", getAllProduct)
router.get("/api/product/:slug", getProductById)
router.post("/api/login", Login)
router.post("/api/signup", Signup)
router.get("/api/profile", Profile)
router.post("/api/refresh-token", userRefreshToken)


module.exports = router;