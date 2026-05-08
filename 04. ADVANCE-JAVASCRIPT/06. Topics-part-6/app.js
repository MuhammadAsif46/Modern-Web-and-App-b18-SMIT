// Client -> API -> Server -> Database
// Asynchronous vs Synchronous:
// Callback function:
// Promise:
// Api integration:
// fetch:


// ======= Asynchronous vs Synchronous ======= //

// console.log("Hello");

// let obj;

// setTimeout(() => {
//     obj = {
//         name: "ali",
//         email: "ali@gmail.com"
//     }
// }, 2000)

// setTimeout(() => {
//     console.log(obj);
// }, 4000)

// console.log("world");



// ======= Callback ======= //

// const abc = (callback) => {
//     // console.log(callback);
//     setTimeout(() => {
//         obj = {
//             name: "ali",
//             email: "ali@gmail.com"
//         }
//         callback(obj)
//     }, 3000)
// }


// const foo = (data) => {
//     console.log(data);
// }

// abc(foo) // argument


// ======= Promise ======== //

// let obj;

// const foo = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             obj = {
//                 name: "ali",
//                 email: "ali@gmail.com"
//             }
//             reject("Error")
//         }, 3000)
//     })
// }

// foo()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err, "Error agaya....");
//     })

// let result = document.getElementById("users")


// ========== Fetch =============== //


// fetch("https://jsonplaceholder.typicode.com/todos")


// =========== Api integration ========== //

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => {
//     return data.json()
// })
// .then((data) => {
//     console.log(data);
//     data.forEach((val, index) => {
//         const avatarUrl = `https://i.pravatar.cc/150?img=${index + 1}`;
//         return result.innerHTML += `<div class="child">
//             <div>
//                 <img src=${avatarUrl} class="img"/>
//             </div>
//             <h1>${val.name}</h1>
//             <h4>${val.email}</h1>
//             <p>${val.phone}</p>
//         </div>`
//         })
//     })
//     .catch((err) => {
//         console.log(err);
//     })



document.querySelector("button").addEventListener("click", notifyMe);

function notifyMe() {
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
    const notification = new Notification("Hi there!");
    // …
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        const notification = new Notification("Hi there!");
        // …
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them anymore.
}