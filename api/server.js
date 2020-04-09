const express = require("express");
const helmet = require("helmet");

const apiRouter = require("./api-router.js");

const server = express();

server.use(helmet());

router.get("/", (req, res) => {
  res.status(200).json({ api: "HELLO" });
});

server.use("/api", apiRouter);

module.exports = server;
