import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAWVb3yZPY9zu6SwdVR0pdhv6OUdLVk7XI",
  authDomain: "e-commerce-f9e9d.firebaseapp.com",
  databaseURL: "https://e-commerce-f9e9d.firebaseio.com",
  projectId: "e-commerce-f9e9d",
  storageBucket: "e-commerce-f9e9d.appspot.com",
  messagingSenderId: "656647166212",
  appId: "1:656647166212:web:4163d3e20723b15cdd1851",
  measurementId: "G-YTSCKGP9E3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
