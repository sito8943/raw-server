const express = require("express");
const basicAuth = require("express-basic-auth");

const { uPost } = require("../auth/users");
const getUnauthorizedResponse = require("../auth/unauthorizedResponse");

const load = require("../model/loading");

const router = express.Router();

const {
  login,
  loadUsers,
  loadUser,
  register,
} = require("../controllers/userController");

//auth system
router.use(
  basicAuth({
    users: uPost,
    unauthorizedResponse: getUnauthorizedResponse,
  })
);

//return all data
router.post("/login", async (req, res) => {
  try {
    load.start();
    const user = req.body;
    const result = await login(user);
    if (result.error == undefined) res.send(result);
    else res.send({ error: result.error });
    load.stop();
  } catch (error) {
    load.stop();
    console.log(error);
    res.sendStatus(500);
  }
});

router.get("/all", async (req, res) => {
  try {
    load.start();
    const count = req.query.count;
    const from = req.query.from;
    const to = req.query.to;
    const result = await loadUsers(count, from, to);
    if (result.error == undefined) res.json(result);
    else res.json(result.error);
    load.stop();
  } catch (error) {
    load.stop();
    console.log(error);
    res.sendStatus(500);
  }
});

router.get("/get", async (req, res) => {
  try {
    load.start();
    const option = req.query.id;
    const result = await loadUser(option);
    if (result.error == undefined) res.json(result);
    else res.json(result.error);
    load.stop();
  } catch (error) {
    load.stop();
    console.log(error);
    res.sendStatus(500);
  }
});

router.post("/save", async (req, res) => {
  try {
    load.start();
    const user = req.body.transpile;
    const isNew = req.body.isNew;
    const result = await register(user, isNew);
    if (result.error == undefined) res.send(result);
    else res.send(result.error);
    load.stop();
  } catch (error) {
    load.stop();
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
