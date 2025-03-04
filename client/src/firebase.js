// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //fairbaseapp is our app mern-blog
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = { //fairebase configration it return our credential info when we make Firebase Authentication like signInWithPopup()
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-69a76.firebaseapp.com",
  projectId: "mern-blog-69a76",
  storageBucket: "mern-blog-69a76.firebasestorage.app",
  messagingSenderId: "353044138387",
  appId: "1:353044138387:web:7c100ef1113ab8309d4066"
};


export const app = initializeApp(firebaseConfig); //coonect fairbaseapp with fairebaseconfig give all info to intiat firebase
//app contain initaize faie base that give faire base service like  Authentication, Firestore, Storage