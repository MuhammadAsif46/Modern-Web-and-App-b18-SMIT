
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtyYX7DKWnUM3OyeCXiwsTY3dLeJEgzho",
  authDomain: "smit-b18-class.firebaseapp.com",
  databaseURL: "https://smit-b18-class-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smit-b18-class",
  storageBucket: "smit-b18-class.firebasestorage.app",
  messagingSenderId: "322917110595",
  appId: "1:322917110595:web:5d50e03396ec0d35fe15f6",
  measurementId: "G-WR83BLHLPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    auth,
    createUserWithEmailAndPassword
}


