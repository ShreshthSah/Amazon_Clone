// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAmKXPvG2s_4D_xYhoDI3Ug2yGTNBYqEKg",
  authDomain: "clone-38b48.firebaseapp.com",
  projectId: "clone-38b48",
  storageBucket: "clone-38b48.appspot.com",
  messagingSenderId: "555716556656",
  appId: "1:555716556656:web:874a75a9f4f08bbb53c1b5",
  measurementId: "G-C72L6CYYST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()
export {app,auth}
