import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCGnybYE04wUEO2mzTwiEQEZX4jAeYaXnY",
  authDomain: "crwn-db-9f912.firebaseapp.com",
  projectId: "crwn-db-9f912",
  storageBucket: "crwn-db-9f912.appspot.com",
  messagingSenderId: "916825895851",
  appId: "1:916825895851:web:a1b7a755e7d8341e4198ee",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
