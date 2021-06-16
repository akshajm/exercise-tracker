const express = require("express");
const axios = require("axios");

const router = express.Router();

router.route("/").get((req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((resp) => {
      res.send(resp.data);
    })
    .catch((err) => res.send(err.message));
});

router.route("/").post((req, res) => {
  console.log(req);
  axios
    .post("https://jsonplaceholder.typicode.com/posts", req.body, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => res.json(err.message));
});

module.exports = router;
