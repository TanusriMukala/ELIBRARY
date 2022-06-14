import firebase from "firebase";
require("@firebase/firestore");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMuI9_4i36atyt7NHu2d6fGfJDpMXxT8E",
  authDomain: "elibrary-57be5.firebaseapp.com",
  projectId: "elibrary-57be5",
  storageBucket: "elibrary-57be5.appspot.com",
  messagingSenderId: "450958808100",
  appId: "1:450958808100:web:974878a2abc0bbcfeeb4b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.firestore();