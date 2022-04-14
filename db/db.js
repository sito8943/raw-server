const firebase = require("firebase");
const { firebaseConfig } = require("../config");

const db = firebase.initializeApp(firebaseConfig);

module.exports = db;
