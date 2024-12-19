// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "userauthenticationprojec-2b93c.firebaseapp.com",
  projectId: "userauthenticationprojec-2b93c",
  storageBucket: "userauthenticationprojec-2b93c.firebasestorage.app",
  messagingSenderId: "162078012587",
  appId: "1:162078012587:web:21a15d89c29ef9713673ee"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);