// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZv76EjTC5BX_xBothQdeh7f6c0HFVb98",
  authDomain: "nn-portfolio-e1531.firebaseapp.com",
  projectId: "nn-portfolio-e1531",
  storageBucket: "nn-portfolio-e1531.appspot.com",
  messagingSenderId: "125130756899",
  appId: "1:125130756899:web:e6620e0bbdf0f8060e7296"
};

// Initialize Firebase
const mfirebase = initializeApp(firebaseConfig);
export const db = getFirestore(mfirebase)

