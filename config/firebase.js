// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc-U1ckn0P5B9_D4UTeToTtAxLoy4mn1o",
  authDomain: "next-auth-emi.firebaseapp.com",
  projectId: "next-auth-emi",
  storageBucket: "next-auth-emi.appspot.com",
  messagingSenderId: "995635328563",
  appId: "1:995635328563:web:66802bc70d42a56a4e1546"
};

// Initialize Firebase
export const auth = initializeApp(firebaseConfig);
