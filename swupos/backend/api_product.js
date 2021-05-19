const express = require("express");
const router = express.Router();
const Products = require("./models/product_schema");
const formidable = require("formidable");
const fs = require("fs-extra");

router.get("/product", async (req, res) => {
  const doc = await Products.find({});
  res.json(doc);
});

router.post("/product", (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async (error, fields, files) => {
    const doc = await Products.create(fields);
    await uploadImage(files, doc);
    res.json({ result: "ok", doc });
  });
});

router.put("/product", async (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    console.log(JSON.stringify({ err, fields, files }));
    await Products.findOneAndUpdate({ product_id: fields.product_id }, fields);
    await uploadImage(files, fields);
    res.json({ result: "ok", message: fields });
  });
});


router.delete("/product/id/:id", async (req, res) => {
  let doc = await Products.findOneAndDelete({ product_id: req.params.id });
  res.json({ result: "ok", message: doc });
});

router.get("/product/id/:id", async (req, res) => {
  let doc = await Products.findOne({ product_id: req.params.id });
  res.json(doc);
});

const uploadImage = async (files, doc) => {
  if (files.image != null) {
    var fileExtention = files.image.name.split(".")[1];
    doc.image = `${doc.product_id}.${fileExtention}`;
    var oldpath = files.image.path;
    var newpath = __dirname + "/uploaded/images/" + doc.image;
    if (fs.exists(newpath)) {
      await fs.remove(newpath);
    }
    await fs.move(oldpath, newpath);
    await Products.findOneAndUpdate({ product_id: doc.product_id }, doc);
  }
};
module.exports = router;
