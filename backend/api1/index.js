const express = require("express");
const router = express.Router();

router.get("/sample", (req, res) => {
  res.json({ message: "Hello from API1!" });
});

module.exports = router;
