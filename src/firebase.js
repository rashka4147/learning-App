// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVt3nVERe3_uYg5gSjGOgFHvM2sHSIcN4",
  authDomain: "learning-language-app-56a27.firebaseapp.com",
  projectId: "learning-language-app-56a27",
  storageBucket: "learning-language-app-56a27.appspot.com",
  messagingSenderId: "306095373851",
  appId: "1:306095373851:web:633997ad8ae4b8d0eb02be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth , db}

export default app