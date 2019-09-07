import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyAc1F3Z2_X5rNMnhUyHjTgyCy9GG9wNN2M",
  authDomain: "evernote-clone-96b5d.firebaseapp.com",
  databaseURL: "https://evernote-clone-96b5d.firebaseio.com",
  projectId: "evernote-clone-96b5d",
  storageBucket: "evernote-clone-96b5d.appspot.com",
  messagingSenderId: "132911980795",
  appId: "1:132911980795:web:afaca8f2127d202a3bd05e"
});

ReactDOM.render(<App />, document.getElementById("evernote-container"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
