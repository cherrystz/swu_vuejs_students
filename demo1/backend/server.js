const express = require('express');
const app = express();
const Users = require("./models/user_schema");

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + "/uploaded"));
app.use("/api/v2", require("./api"));

app.listen(3000, () => {
    console.log("server is ready...");
});