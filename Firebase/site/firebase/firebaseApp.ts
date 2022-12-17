// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIs5D2yW_hWl8Y1XAinF8DUQkcuEFeFzw",
  authDomain: "appointments-8786b.firebaseapp.com",
  projectId: "appointments-8786b",
  storageBucket: "appointments-8786b.appspot.com",
  messagingSenderId: "81022070459",
  appId: "1:81022070459:web:1fe67e95f2cf046eb3c39e",
  measurementId: "G-28RQ9TP5NG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Export function to initialize firebase.
export const initFirebase = () => {
  return app;
};
export const auth = getAuth();
