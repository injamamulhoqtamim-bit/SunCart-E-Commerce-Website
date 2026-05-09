import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

//  config 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDszKx7meAMZJjGUS1ysazbKMVanMO_plA",
  authDomain: "suncart-new.firebaseapp.com",
  projectId: "suncart-new",
  storageBucket: "suncart-new.firebasestorage.app",
  messagingSenderId: "1032315924453",
  appId: "1:1032315924453:web:a3d35d03f25d8d162d090c",
  measurementId: "G-R8ZVFDHR8H"
};

// initialize
const app = initializeApp(firebaseConfig);

//  export (VERY IMPORTANT)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

