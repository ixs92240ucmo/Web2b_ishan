 const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Add this root route handler
app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});

app.get("/api1/sample", (req, res) => {
  res.json({ message: "Hello from API1!" });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});