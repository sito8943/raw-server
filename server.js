const express = require("express");
const path = require("path");
const cors = require("cors");
const basicAuth = require("express-basic-auth");

// routes
const userRoute = require("./routes/user");

const app = express();
const port = process.env.PORT || 3000;

app.set("etag", "strong"); //browser caching of static assets should work properly
app.use(cors());
app.use(express.json({ limit: 1048576 }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/user", user);

app.listen(port, () => {
  console.log(`Sito docs server running ${port}`);
});
