// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU1tGRKf26pttqgl4fQmwb2dlgzZTfh5E",
  authDomain: "lab1-dobrov.firebaseapp.com",
  projectId: "lab1-dobrov",
  storageBucket: "lab1-dobrov.firebasestorage.app",
  messagingSenderId: "725159038391",
  appId: "1:725159038391:web:b7ec5b7ddfaf70a8f76c32",
  measurementId: "G-1ZQ3J0G7QW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);