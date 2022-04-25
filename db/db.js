const { firebaseConfig } = require("../config");

const { initializeApp } = require("firebase-admin/app");

const db = initializeApp(firebaseConfig, "server");

module.exports = db;
