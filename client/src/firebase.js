// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-b2e70.firebaseapp.com",
  projectId: "mern-estate-b2e70",
  storageBucket: "mern-estate-b2e70.appspot.com",
  messagingSenderId: "219660768910",
  appId: "1:219660768910:web:b47b13744b7926184a1bdf"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);