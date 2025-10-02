// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY-kcJGs8p-TBJLZs2llvAYa4dJBWHzTs",
  authDomain: "fir-practice-9-30.firebaseapp.com",
  projectId: "fir-practice-9-30",
  storageBucket: "fir-practice-9-30.firebasestorage.app",
  messagingSenderId: "518120459975",
  appId: "1:518120459975:web:8c62f4e263e5dc7176f8e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();