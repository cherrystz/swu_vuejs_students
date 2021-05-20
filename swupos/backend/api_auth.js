const express = require("express");
const router = express.Router();
const Users = require("./models/user_schema");
const bcrypt = require("bcryptjs");
const jwt = require("./jwt");

router.post("/login", async (req, res) => {
  // destructuring || unpack
  const { username, password } = req.body;
  const doc = await Users.findOne({ username });

  if (doc) {
    const isPasswordValid = await bcrypt.compare(password, doc.password);
    if (isPasswordValid) {
      const payload = {
        id: doc._id,
        level: doc.level,
        username: doc.username,
      };
      const token = jwt.sign(payload, "100h");

      res.json({ result: "ok", token, message: "success" });
    } else {
      res.json({ result: "nok", message: "invalid password" });
    }
  } else {
    res.json({ result: "nok", message: "invalid username" });
  }
});

router.post("/register", async (req, res) => {
  try {
    console.log(JSON.stringify(req.body));
    req.body.password = await bcrypt.hash(req.body.password, 8);
    const doc = await Users.create(req.body);
    res.json({ result: "ok", detail: doc });
  } catch (e) {
    res.json({ result: "nok", detail: e });
  }
});

module.exports = router;
