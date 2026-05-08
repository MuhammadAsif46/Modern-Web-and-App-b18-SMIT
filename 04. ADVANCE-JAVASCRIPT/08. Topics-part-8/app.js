// Jacascript Behind the scene: - done
// OOP - getter/setter: - done
// Truthiness Checker (truthy / falsy):
// Nullish Coalescing Operator (??):

// var a = 10  
// function abc(){}

// console.log("First");

// setTimeout(() => {
//     console.log("Timer is running...");
// }, 4000);

// console.log("Second");


// class User {
//   constructor(name){
//     this.name = name;
//   }
// }

// const u = new User("Ali");
// u.name = "123@@@!!!";   // koi bhi value dal di 😬
// console.log(u.name)

// class User {
//   constructor(name){
//     this._name = name;
//   }

//   set name(value){
//     if(value.length < 3){
//       console.log("Name too short ❌");
//       return;
//     }
//     this._name = value;
//   }

//   get name(){
//     return this._name.toUpperCase();
//   }
// }

// const u = new User("Ali");

// // u.name = "Al";      // reject 
// u.name = "Asif";    // accept 

// console.log(u.name); // ASIF



// falsy

// false
// 0
// undefined 
// null 
// ""
// NaN

// if(!true){
//     console.log("Running...");
// }

// console.log(!0); // true
// console.log(!""); // true
// console.log(!!"hello"); // true


// const username = "";

// if(!!username){
//   console.log("User logged in");
// } else {
//   console.log("User not logged in");
// }


// Nullish Operator ??:

// undefined - false
// null - false

// let hello = undefined

// const userName = "" || "Guest";
// console.log(userName); // Guest

// const userName1 = "" ?? "Guest";
// console.log(userName1);  // ""

// const userName2 = null;
// console.log(userName2);  // "Guest"



// let arr = [undefined, undefined]

// arr.forEach((a, i) => console.log(a, i));
