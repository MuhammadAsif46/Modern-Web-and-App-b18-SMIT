// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import {
    getFirestore, collection, addDoc, setDoc, doc, getDocs, updateDoc,
    serverTimestamp, increment, getDoc, deleteDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

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

// const getAllUsers = async () => {
//     const querySnapshot = await getDocs(collection(db, "users"));
//     querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//     });
// }

// getAllUsers()


// let submitBtn = document.getElementById("update-btn")

// submitBtn.addEventListener("click", async () => {
//     let name = document.getElementById("name")
//     let phone = document.getElementById("phone")
//     const id = auth.currentUser.uid

//     const washingtonRef = doc(db, "users", id);
//     try {
//         await updateDoc(washingtonRef, {
//             name: name.value,
//             phone: phone.value,
//             school: "saylani",
//             createdAt: serverTimestamp(),
//             orderNo: increment(1)
//         });
//         console.log("updated");
//     } catch (err) {
//         console.log(err);

//     }
// })


setTimeout(() => {
    const getSingleUser = async () => {
        // console.log(auth.currentUser);

        const id = auth.currentUser.uid
        try {

            const docRef = doc(db, "users", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }
        } catch (err) {
            console.log(err);

        }
    }

    getSingleUser()
}, 4000)


let del = document.getElementById("delete-btn")
del.addEventListener("click", async () => {
    const id = auth.currentUser.uid
    await deleteDoc(doc(db, "users", id));
})
