// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiDNm-S9zxozKDZmDkoGwxhQ1VIPmBC7c",
  authDomain: "inventory-management-716ab.firebaseapp.com",
  projectId: "inventory-management-716ab",
  storageBucket: "inventory-management-716ab.appspot.com",
  messagingSenderId: "788044421828",
  appId: "1:788044421828:web:b03bea4f8ace693cf28791",
  measurementId: "G-XZS66TB023"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export { firestore }