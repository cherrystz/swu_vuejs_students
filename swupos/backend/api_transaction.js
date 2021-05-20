const express = require("express");
const router = express.Router();
const Trans = require("./models/trans_schema");

router.post("/transaction", async (req, res) => {
  req.body.staff_id = req.userId;
  const doc = await Trans.create(req.body);
  res.json(doc);
});

router.get("/transaction", async (req, res) => {
  const doc = await Trans.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "staff_id",
        foreignField: "_id",
        as: "staff",
      },
    },
    { $unwind: "$staff" },
    { $set: { staff_id: "$staff.username" } },
    { $project: { staff: 0 } },
  ]).sort({ timestamp: -1 });

  res.json(doc);
});

module.exports = router;
