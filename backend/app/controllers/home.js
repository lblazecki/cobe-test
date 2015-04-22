"use strict";
var express = require("express"),
  router = express.Router();

module.exports = function (app) {
  app.use("/", router);
};

router.get("/", function (req, res) {
  res.render("index", {
    title: "Cobe backend javascript test",
  });
});
