// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJjFRx2KDtUOhXLydWgnlVaVpIKDJPl8Y",
  authDomain: "kishucounter.firebaseapp.com",
  projectId: "kishucounter",
  storageBucket: "kishucounter.appspot.com",
  messagingSenderId: "1073683186274",
  appId: "1:1073683186274:web:c31dd1e8a2c82d044b473b",
  measurementId: "G-0575Z4KGP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;