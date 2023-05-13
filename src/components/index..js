import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrQXocgeG7E9hYfZwmSqDvzdCHpnLgAcI",
  authDomain: "hackathon-79784.firebaseapp.com",
  projectId: "hackathon-79784",
  storageBucket: "hackathon-79784.appspot.com",
  messagingSenderId: "58113007538",
  appId: "1:58113007538:web:9be556b3f696dc4385ceab",
  measurementId: "G-54D6FS9CL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);