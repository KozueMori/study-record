import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'

// ====== ▼  ▼  ▼ firebase ▼  ▼  ▼  ======
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9U-l1Zn7k5TYaRSCqYRG3FaeTMGP9Iwo",
  authDomain: "study-record-699fe.firebaseapp.com",
  projectId: "study-record-699fe",
  storageBucket: "study-record-699fe.appspot.com",
  messagingSenderId: "201712282032",
  appId: "1:201712282032:web:1288f680b2f3dd1a488e75",
  measurementId: "G-7ZX5KCK9V5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ====== ▲  ▲  ▲ firebase ▲  ▲  ▲  ======

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
