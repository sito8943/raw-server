// Import the functions you need from the SDKs you need
const XMLHttpRequest = require("xhr2");
var ab2str = require("arraybuffer-to-string");
const { initializeApp } = require("firebase/app");
const {
  getStorage,
  ref,
  getDownloadURL,
  getBytes,
} = require("firebase/storage");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXVpiYBgZ1CwvM_EnloyHerEM0bpZ8sLA",
  authDomain: "sito-server-docs.firebaseapp.com",
  projectId: "sito-server-docs",
  storageBucket: "sito-server-docs.appspot.com",
  messagingSenderId: "989322908483",
  appId: "1:989322908483:web:516a75ca838da4c44695f6",
  measurementId: "G-4N5QL8E97V",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

async function getFile(lang, file) {
  // Get a reference to the storage service, which is used to create references in your storage bucket
  const storage = getSt orage(firebaseApp);
  const result = ab2str(await getBytes(ref(storage, `/${lang}/${file}.md`)));
  return result;
}

module.exports = getFile;
  