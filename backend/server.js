const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api1/sample", (req, res) => {
  res.json({ message: "Hello from API1!" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
