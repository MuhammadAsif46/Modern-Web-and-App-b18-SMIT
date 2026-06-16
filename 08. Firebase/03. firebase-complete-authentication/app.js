
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateEmail,
    sendEmailVerification
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";




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


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


// createUserWithEmailAndPassword(auth, "asifahmed32c@gmail.com", 123456)
//   .then((data) => {
//     const user = data.user;
//     console.log(user);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(error);
//   });


// signInWithEmailAndPassword(auth, "asifahmed32c@gmail.com", 123456)
//     .then((userCredential) => {
//         const user = userCredential.user;
//         console.log("login user-->", user);

//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(error);

//     });

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         const uid = user.uid;
//         console.log("user is login");
//     } else {
//         console.log("user is not login");
//     }
// });

// // let button = document.getElementById("btn")

// function userUpdateEmail() {
//     setTimeout(() => {

//         updateEmail(auth.currentUser, "asifahmed32c@gmail.com").then(() => {
//             console.log("Email is updated");

//         }).catch((error) => {
//             console.log("Email is not updated");
//         });
//     }, 3000)
// }

// window.userUpdateEmail = userUpdateEmail

// setTimeout(() => {
//     sendEmailVerification(auth.currentUser)
//         .then(() => {
//             console.log("Email verification successfully");
//         });
// }, 4000)