// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/database";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1a8zC-1FwdpMKEA5mJmC8LCsKumoS9s8",
  authDomain: "dhairya-anchal.firebaseapp.com",
  projectId: "dhairya-anchal",
  storageBucket: "dhairya-anchal.firebasestorage.app",
  messagingSenderId: "695207209290",
  appId: "1:695207209290:web:a27f4a98862f08e04af9b3",
  measurementId: "G-P5PWFMK1VH",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
// console.log(firebase.auth())
export { db, storage, auth };
// export const auth = firebase.auth();
