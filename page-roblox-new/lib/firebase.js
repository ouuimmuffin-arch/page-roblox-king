// lib/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzzVO0JkOmweOI7l3V8yFwofs6qutNdyU",
  authDomain: "page-roblox-6a1b6.firebaseapp.com",
  projectId: "page-roblox-6a1b6",
  storageBucket: "page-roblox-6a1b6.appspot.com", // fix this line
  messagingSenderId: "592906178408",
  appId: "1:592906178408:web:8789c900997bce234a90dd",
};

// Initialize Firebase app (only once)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Export Firestore instance
export const db = getFirestore(app);