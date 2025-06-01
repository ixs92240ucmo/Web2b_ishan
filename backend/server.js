const express = require("express");
const cors = require("cors"); 
const app = express();

app.use(cors());

const api1 = require("./api1/index");

app.use("/api1", api1);

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
