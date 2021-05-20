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

const interceptor1 = (req, res, next) => {
  if (req.query.token && req.query.token == "1234") {
    next();
  } else {
    res.status(400).end("Invalid Token");
  }
};

// http://localhost:8081/api/v2/test_sq?username=admin&password=1234
router.get("/test_sq", interceptor1, (req, res) => {
  res.json({ resutl: req.query });
});

// http://localhost:8081/api/v2/test_params/bangkok/japan
router.get("/test_params/:from/:to", interceptor1, (req, res) => {
  res.json({ resutl: req.params });
});

// http://localhost:8081/api/v2/test_interceptor
router.get("/test_interceptor", interceptor1, (req, res) => {
  res.json([1, 2, 3]);
});

module.exports = router;
