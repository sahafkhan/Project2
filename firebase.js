// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD5ijfhCu3QlDzsJCspP3rFmNORHfcJco",
  authDomain: "inventory-management-4b4ac.firebaseapp.com",
  projectId: "inventory-management-4b4ac",
  storageBucket: "inventory-management-4b4ac.appspot.com",
  messagingSenderId: "90275578119",
  appId: "1:90275578119:web:8df19fbc2daaa7c01b05a2",
  measurementId: "G-VKWLQD76PR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}