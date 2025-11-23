// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI9moXWXOECM5nPztdZA_kL2zhU3EJaPY",
  authDomain: "food-share-auth.firebaseapp.com",
  projectId: "food-share-auth",
  storageBucket: "food-share-auth.firebasestorage.app",
  messagingSenderId: "231787414766",
  appId: "1:231787414766:web:4084297cb5e9f49402dfff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
