// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0628x0_8z9hNjnR6IFlxhtUEcj1cb_Fo",
  authDomain: "ezyswap-7034e.firebaseapp.com",
  projectId: "ezyswap-7034e",
  storageBucket: "ezyswap-7034e.appspot.com",
  messagingSenderId: "519302556338",
  appId: "1:519302556338:web:a424d7af592bc559c1f7ab",
  measurementId: "G-F0JZYNJZYX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
