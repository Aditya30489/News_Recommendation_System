// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyCiBYpwQyFXS5rQ-GcTLfUgMvv44GMyglY",
  authDomain: "project-578af.firebaseapp.com",
  projectId: "project-578af",
  storageBucket: "project-578af.appspot.com",
  messagingSenderId: "487079057997",
  appId: "1:487079057997:web:37e6ec05ac186ac4abda04",
  measurementId: "G-WPYHT49BFC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;