import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js"
import { getFirestore,doc, setDoc } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

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
const auth = getAuth(app)
const db = getFirestore(app);

// // Signup form

// let userName = document.querySelector('#UserName');
// let email = document.querySelector('#email');
// let password = document.querySelector('#password');
// let phone = document.querySelector('#phone');
// let btn = document.querySelector('button')

// // let loginBtn = document.getElementById("loginBtn")

// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     // console.log(userName.value,password.value,email.value,phone.value);
//  createUserWithEmailAndPassword(auth, email.value, password.value)
//   .then(async(userCredential) => {
//     // Signed up 
//     const user =   userCredential.user;
//     let userId = user.uid;

//     console.log("signup");

// await setDoc(doc(db, "students", userId), {
//  email: email.value,
//  password:password.value,
//  userName:userName.value,
//  phone:phone.value
// });

// console.log("data add sucessfully")
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
    
//     // ..
//   });



    

// Login Form

// let userName = document.querySelector ('#UserName');
// let password = document.querySelector ('#password');
// let button = document.querySelector('#loginBtn')

// button.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log(userName,password);
    
// })
// // const email=document.getElementById("email").value;
// const password=document.getElementById("password').value;

const loginEmail = document.getElementById("loginEmail")
const loginPassword = document.getElementById("loginPassword")
const loginBtn = document.getElementById("loginBtn")


loginBtn.addEventListener("click" , async () => 
{

    try {
    

        const userCredential = await signInWithEmailAndPassword(auth , loginEmail.value ,loginPassword.value)
        
        console.log("login success")

    } catch (error) {
        console.log(error.message)
    }
})






