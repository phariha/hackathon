import React from 'react';
import ReactDOM from 'react-dom/client';

import { initializeApp } from "firebase/app";

import { BrowserRouter } from 'react-router-dom';

// import CSS
import "bootstrap/dist/css/bootstrap.min.css";
import '../src/index.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

import App from './components/App';
import SAMPLE_PLANTS from './data/plants.json';

const firebaseConfig = {
  apiKey: "AIzaSyBrQXocgeG7E9hYfZwmSqDvzdCHpnLgAcI",
  authDomain: "hackathon-79784.firebaseapp.com",
  projectId: "hackathon-79784",
  storageBucket: "hackathon-79784.appspot.com",
  messagingSenderId: "58113007538",
  appId: "1:58113007538:web:9be556b3f696dc4385ceab",
  measurementId: "G-54D6FS9CL0"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App plants={SAMPLE_PLANTS}/>
    </BrowserRouter>
);
