const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;
const users = [];

app.use(express.json());

app.get("/", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((resp) => {
      res.send(resp.data);
    })
    .catch((err) => res.send(err.message));
});

app.post("/", (req, res) => {
  console.log(req.body);
  axios
    .post("https://jsonplaceholder.typicode.com/posts", req.body, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      console.log(response);
      res.json("response");
    })
    .catch((err) => res.json(err.message));
});

app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});
