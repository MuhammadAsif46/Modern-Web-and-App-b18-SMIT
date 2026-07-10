// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { GoogleAuthProvider, getAuth, signInWithPopup, GithubAuthProvider } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "<enter-your>",
    authDomain: "<enter-your>",
    databaseURL: "<enter-your>",
    projectId: "<enter-your>",
    storageBucket: "<enter-your>",
    messagingSenderId: "<enter-your>",
    appId: "<enter-your>",
    measurementId: "<enter-your>"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// google auth provider
const googleProvider = new GoogleAuthProvider();

// github auth provider
const githubProvider = new GithubAuthProvider();


let googleLogin = document.getElementById("loginWithGoogle")

let githubLogin = document.getElementById("loginWithGithub")

// google login function:

// googleLogin.addEventListener("click", () => {
//     console.log("click google");

//     signInWithPopup(auth, googleProvider)
//         .then((result) => {
//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             const token = credential.accessToken;
//             const user = result.user;
//             console.log("user-->", user);

//         }).catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             const email = error.customData.email;
//             const credential = GoogleAuthProvider.credentialFromError(error);
//             console.log("error", error);

//         });
// })


// github login function:
githubLogin.addEventListener("click", () => {
    console.log("click github");
    signInWithPopup(auth, githubProvider)
        .then((result) => {
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log("user-->", user);


            
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GithubAuthProvider.credentialFromError(error);
            console.log("error->", error);
            
        });
})