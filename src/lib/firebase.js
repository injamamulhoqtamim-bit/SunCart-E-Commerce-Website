import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// 🔥 তোমার config (already correct)
const firebaseConfig = {
  apiKey: "AIzaSyAp6RHPYt0W-lB1nliaMMiitFD14i54Kok",
  authDomain: "suncart-1be25.firebaseapp.com",
  projectId: "suncart-1be25",
  storageBucket: "suncart-1be25.firebasestorage.app",
  messagingSenderId: "580355995075",
  appId: "1:580355995075:web:9e34085f730536746fb976",
  measurementId: "G-SQN22DQ9JG",
};

// ✅ initialize
const app = initializeApp(firebaseConfig);

// ✅ export (VERY IMPORTANT)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();