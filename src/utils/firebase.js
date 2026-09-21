// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy-34x0n5tw2d4Vb6mh-fg1ruNPPVik0Y",
  authDomain: "netflixgpt-1c4c8.firebaseapp.com",
  projectId: "netflixgpt-1c4c8",
  storageBucket: "netflixgpt-1c4c8.firebasestorage.app",
  messagingSenderId: "1055326819111",
  appId: "1:1055326819111:web:be046fcb3843490d298f02",
  measurementId: "G-6B0JK1FWWX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()