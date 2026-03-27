// Client -> API -> Server -> Database
// Asynchronous vs Synchronous:
// Callback function:
// Promise:
// Api integration:
// fetch:

// var obj;

// setTimeout(function () {
//     // console.log("world");
//     obj = {
//         name: "faraz",
//         email: "faraz@gmail.com"
//     }
//     // abc(obj)
// }, 2000)

// // console.log("hello");

// setTimeout(function(){
//     console.log(obj);
// }, 3000)

// function abc(data){
//     console.log(data)
// }


// function foo(callback) {
//     setTimeout(function () {
//         obj = {
//             name: "faraz",
//             email: "faraz@gmail.com"
//         }
//         callback(obj)
//     }, 2000)
// }

// function abc(data){
//     console.log(data);
// }

// foo(abc)


// function abc() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             obj = {
//                 name: "faraz",
//                 email: "faraz@gmail.com"
//             }
//             reject("Something went wrong!")
//         }, 2000)
//     })
// }


// abc()
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })


fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (data) {
        return data.json()
    })
    .then(function (data) {
        // console.log(data);
        for(var i = 0; i < data.length; i++){
            console.log(data[i]);
        }
    })
    .catch(function (err) {
        console.log(err);
    })


// var arr = [
//     {name: "hello"},
//     {name: "hello1"},
//     {name: "hello2"},
// ]