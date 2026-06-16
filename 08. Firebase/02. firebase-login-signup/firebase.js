
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "<Enter your>",
    authDomain: "<Enter your>",
    projectId: "<Enter your>",
    storageBucket: "<Enter your>",
    messagingSenderId: "322917110595",
    appId: "<Enter your>",
    measurementId: "<Enter your>"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword , signInWithEmailAndPassword}