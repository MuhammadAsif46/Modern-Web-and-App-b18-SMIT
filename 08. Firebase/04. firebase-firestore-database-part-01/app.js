// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getFirestore, collection, addDoc, setDoc, doc, getDocs } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);


let submitBtn = document.getElementById("register-btn")

submitBtn.addEventListener("click", () => {
    let name = document.getElementById("name")
    let phone = document.getElementById("phone")
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    let userData = {
        name: name.value,
        phone: phone.value,
        email: email.value,
        password: password.value,
    }

    createUserWithEmailAndPassword(auth, userData.email, userData.password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            const userId = user.uid

            // method 01
            // // Add a new document with a generated id.
            // const docRef = await addDoc(collection(db, "users"), {
            //     ...userData, userId
            // });
            // console.log("Document written with ID: ", docRef.id);

            // method: 02
            // Add a new document in collection "cities"
            const newUser = await setDoc(doc(db, "users", userId), {
                ...userData, userId
            });

            console.log("new user-->", newUser);



        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

})

const getAllUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
}

getAllUsers()