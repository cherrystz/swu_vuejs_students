const express = require("express");
const router = express.Router();
const Products = require("./models/product_schema");
const formidable = require('formidable');
const fs = require('fs-extra');

router.get("/product", async (req, res) => {
  const doc = await Products.find({});
  res.json(doc);
});

router.post("/product", async (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (error, fields, files) => {
    res.json({error, fields, files})
  });
});

module.exports = router;
