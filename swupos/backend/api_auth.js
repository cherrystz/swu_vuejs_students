const express = require('express');
const router = express.Router();
const Users = require("./models/user_schema");
const bcrypt = require('bcryptjs');
const e = require('express');

router.post("/login", async (req, res) => {

    // destructuring || unpack
    const { username, password } =  req.body;
    const doc = await Users.findOne({ username });

    if (doc) {
        const isPasswordValid = await bcrypt.compare(password, doc.password);
        if  (isPasswordValid) {
            res.json({ result: "ok", message: "success" })
        }
        else {
            res.json({ result: "nok", message: "invalid password" })
        }
    }
    else {
        res.json({ result: "nok", message: "invalid username" })
    }
    
});

router.post("/register", async (req, res) => {

    try {
        req.body.password = await bcrypt.hash(req.body.password, 8);
        const doc = await Users.create(req.body);
        res.json({ result: "register ok", detail: doc });
    }
    catch (err) {
        res.json({ result: "register nok", detail: err });
    }
    
});

module.exports = router;