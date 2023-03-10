const express = require("express");
const routes = express.Router();
const productscontroller = require("../controllers/productsController");
const {upload } = require('../middlewares/upload');
const productsValidator = require("../validations/productValidator")


routes.get("/products",productscontroller.index);

routes.get("/productDetail/:id",productscontroller.detail);
routes.get("/productCart", productscontroller.cart);


routes.get("/create", productscontroller.create);
routes.post("/", upload.single('image'),productsValidator, productscontroller.store);  

routes.get("/edit/:id", productscontroller.edit);
routes.put("/edit/:id", upload.single('image'),productsValidator, productscontroller.update);
routes.delete("/delete/:id", productscontroller.delete);

module.exports = routes;