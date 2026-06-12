
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtyYX7DKWnUM3OyeCXiwsTY3dLeJEgzho",
    authDomain: "smit-b18-class.firebaseapp.com",
    projectId: "smit-b18-class",
    storageBucket: "smit-b18-class.firebasestorage.app",
    messagingSenderId: "322917110595",
    appId: "1:322917110595:web:5d50e03396ec0d35fe15f6",
    measurementId: "G-WR83BLHLPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);