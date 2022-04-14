/* eslint-disable import/newline-after-import */
/* eslint-disable prefer-arrow-callback */
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/file", (req, res) => {
  const { lang, file } = req.body.markdown.split(":");
  const markdown = fs.readFileSync(`./files/${lang}/${file}`);
  res.send(markdown);
});

app.listen(9000);
