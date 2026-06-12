import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebase.js"

const email = document.getElementById("email")
const password = document.getElementById("password")
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
console.log(email.value, password.value);

createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((res) => {
        const user = res.user;
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error -->", errorMessage);
        console.log("error code -->", errorCode);
    });
})

// function hello() {
//     console.log(email, password);
    
//     console.log("hello");
    
// }


// createUserWithEmailAndPassword(auth, "ahmed@gmail.com", 123456)
//     .then((res) => {
//         const user = res.user;
//         console.log(user);
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log("error -->", errorMessage);
//         console.log("error code -->", errorCode);

//         if(errorCode == "auth/weak-password"){
//             console.log("Password must be 6 characters reqiured");
//         }

//     });


// signInWithEmailAndPassword(auth,  "asif@gmail.com", 123456)
//     .then((userCredential) => {
//         const user = userCredential.user;
//        console.log(user);
       
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         if(errorCode == "auth/invalid-credential"){
//             console.log("Email and Password incorrect");
//         }
//         console.log(errorCode);
//         console.log(errorMessage);
        
//     });