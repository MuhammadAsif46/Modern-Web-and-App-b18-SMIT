
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

 const firebaseConfig = {
    apiKey: "<Enter your>",
    authDomain: "<Enter your>",
    projectId: "<Enter your>",
    storageBucket: "<Enter your>",
    messagingSenderId: "322917110595",
    appId: "<Enter your>",
    measurementId: "<Enter your>"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
