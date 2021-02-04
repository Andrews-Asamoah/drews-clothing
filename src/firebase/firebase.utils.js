import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBytbhGloxSREjaadfzM9bue8hoxH5VYqY",
  authDomain: "drews-clothing-db.firebaseapp.com",
  projectId: "drews-clothing-db",
  storageBucket: "drews-clothing-db.appspot.com",
  messagingSenderId: "641456051193",
  appId: "1:641456051193:web:53bde9bdb28dc66eac6328",
  measurementId: "G-R6JFGS39P3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
