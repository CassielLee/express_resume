const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ name: "cassiellee", website: "https://tuture.co" });
});

router.post("/new", (req, res) => {
  res.status(201).json({ msg: "新的篇章，即将开始" });
});

export default router;
