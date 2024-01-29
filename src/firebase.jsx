import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6QKr56B4qaXTdWSeNiwdhhsKeOqWulVA",
  authDomain: "blog-app-5ce4c.firebaseapp.com",
  projectId: "blog-app-5ce4c",
  storageBucket: "blog-app-5ce4c.appspot.com",
  messagingSenderId: "768923432955",
  appId: "1:768923432955:web:e049020bd85f0fe120bd5e",
  measurementId: "G-0SJDS2V3WT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
