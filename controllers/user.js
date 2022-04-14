const { base64encode } = require("nodejs-base64");
const firebase = require("../db/db");

const { IsUndefined } = require("../utils/functions");

const db = firebase.firestore();

/**
 * @param {string} option - The user's ID.
 * @returns The user object.
 */
const loadUser = async (option) => {
  let theUser = {};
  try {
    const data = db.collection("users").doc(option);
    const doc = await data.get();
    if (doc.data() !== undefined) {
      theUser["name"] = doc.data().id;
      theUser["role"] = doc.data().role;
      return theUser;
    }
    return "No existe el usuario";
  } catch (error) {
    return { error: String(error) };
  }
};

/**
 *
 * @param {number} count
 * @param {number} from
 * @param {number} to
 * @returns array of users, error if something went wrong
 */
const loadUsers = async (
  count = undefined,
  from = undefined,
  to = undefined
) => {
  try {
    let allUsers = [];
    //Users
    const places = db.collection("users");
    const data = await places.get();

    let j = from == undefined || from == "undefined" ? 0 : from;
    let final = count == "undefined" || count == undefined ? data.size : count;
    if (to != "undefined" && to != undefined && to < count) final = to;

    data.forEach((doc) => {
      if (j < final) {
        const newUser = {
          name: doc.data().id,
          role: !IsUndefined(doc.data().role) ? doc.data().role : "superdamin",
        };
        allUsers.push(newUser);
      }
      ++j;
    });
    return allUsers;
  } catch (error) {
    return { error: String(error) };
  }
};

/**
 *
 * @param {object} attributes
 * @param {number} isNew -> 0 => no; 1 => is new; 2 => was uploaded;
 * @returns "Done" if everything go fine, error otherwise
 */
const register = async (attributes, isNew = 0) => {
  const newUser = {};
  attributes.forEach((item) => {
    newUser[item.name] = item.value;
  });

  try {
    if (isNew === 0) {
      //Users
      const data = db.collection("users").doc(newUser.id);
      const doc = await data.get();
      if (doc.data() !== undefined) {
        const oldUser = doc.data();
        db.collection("users")
          .doc(newUser.id)
          .update({ ...oldUser, ...newUser });
      }
    } else {
      db.collection("users").doc(newUser.id).set(newUser);
    }
    return "good";
  } catch (error) {
    return { error: String(error) };
  }
};

/**
 *
 * @param {object} user
 * @returns user if is correct
 */
const login = async (user) => {
  let theUser = {};
  try {
    const data = db.collection("users").doc(user.n.toLowerCase());
    const doc = await data.get();
    if (doc.data() !== undefined) {
      theUser.password = doc.data().password;
      theUser.theme = doc.data().theme;
      theUser.role = !IsUndefined(doc.data().role)
        ? doc.data().role
        : "superadmin";
      console.log(theUser);
      if (theUser.password.toLowerCase() === user.p.toLowerCase())
        return { status: "good", role: theUser.role, theme: theUser.theme };
    }
    return "wrong";
  } catch (error) {
    return { error: String(error) };
  }
};

module.exports = {
  register,
  login,
  loadUser,
  loadUsers,
};
