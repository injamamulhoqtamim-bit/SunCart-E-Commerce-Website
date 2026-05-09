import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR3EFkTQ_y-ScxfTbLg_kRO8Rlx6xKFL8",
  authDomain: "suncart-new.firebaseapp.com",
  projectId: "suncart-new",
  storageBucket: "suncart-new.firebasestorage.app",
  messagingSenderId: "1032315924453",
  appId: "1:1032315924453:web:3aa85b236d249b6f2d090c",
  measurementId: "G-7KL41GPGY6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();