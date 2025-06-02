const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

// Serve static files from frontend folder
app.use(express.static(path.join(__dirname, "frontend")));

// API routes
app.get("/api1/sample", (req, res) => {
  res.json({ message: "Hello from API1!" });
});

// All other routes serve the frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});