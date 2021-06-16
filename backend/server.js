const express = require("express");
const cors = require("cors");
const homepage = require("./api/homepage.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/", homepage);
app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});
