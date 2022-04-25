/**
 * Module dependencies.
 */

var express = require("express");
var http = require("http");

const path = require("path");
const cors = require("cors");
const basicAuth = require("express-basic-auth");

var socket = require("./model/socket.js");

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 8000;

app.set("etag", "strong"); //browser caching of static assets should work properly
app.use(cors());
app.use(express.json({ limit: 1048576 }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

/* Configuration */
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));
app.set("port", port);

if (process.env.NODE_ENV === "development") {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

/* Socket.io Communication */
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
io.sockets.on("connection", socket);

/* Start server */
server.listen(app.get("port"), function () {
  console.log(
    "Express server listening on port %d in %s mode",
    app.get("port"),
    app.get("env")
  );
});

module.exports = app;
