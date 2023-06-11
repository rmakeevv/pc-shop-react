const express = require("express");
const {getCategory} = require("../controllers/categoryController");
const categoryRouter = express.Router()

categoryRouter.get('/:order', getCategory)

module.exports = categoryRouter