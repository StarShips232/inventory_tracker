// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuEsOJUeRUuJmnsydCUcc1mZLVOFydUnI",
  authDomain: "inventory-managment-5fd49.firebaseapp.com",
  projectId: "inventory-managment-5fd49",
  storageBucket: "inventory-managment-5fd49.appspot.com",
  messagingSenderId: "947486114226",
  appId: "1:947486114226:web:f7ea5e4e0fcf32d6f0e4ab",
  measurementId: "G-JPDBBTXT32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };

