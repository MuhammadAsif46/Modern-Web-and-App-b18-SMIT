// Generators Function:
// Classes:
// Array methods:

// function* numbers() {
//   yield 10;
//   yield 20;
//   yield 30;
// }

// const gen = numbers();

// console.log(gen.next()); // {value:10, done:false}
// console.log(gen.next()); // {value:20, done:false}
// console.log(gen.next()); // {value:30, done:false}
// console.log(gen.next()); // {value:undefined, done:true}


// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hello " + this.name);
//   }
// }

// const p1 = new Person("Asif", 22);
// p1.greet(); // Hello Asif


// function numbers() {
//   return 10;
//   return 20;
// }

// let res = numbers()
// console.log(res);

// function* numbers(){
//   yield 10;
//   yield 20;
//   yield 30;
// }

// let res = numbers()
// console.log(res.next()); // 10
// var num = 123
// console.log(num);  

// console.log(res.next()); // 20
// console.log(res.next()); // 30

// Classes:

// class Person {
//   constructor(username, age){
//     this.name = username
//     this.age = age
//   }

//   greet(){
//     console.log("Hello " + this.name);
//   }
// }

// let std = new Person("Hamza", 23)
// std.greet()
// // console.log(std.name);
// let std1 = new Person("Ali", 16)
// // console.log(std1);
// std1.greet()
// console.log(std1);


// Array method:
// map()      == > return new array 
// forEach()  == > does not return new array
// concat()   == > return new array and merge two or more arrays 
// filter()   == > return new array and filter the elements based on condition
// find()     == > return first element that satisfies the condition 
// reduce()   == > return single value by applying a function on each element of the array  
// some()       == > return true if at least one element satisfies the condition
// every()      == > return true if all elements satisfy the condition
// includes()   == > return true if the element is found in the array


// let arr = ["hello", 123, "smit", false]

// let res = arr.map((val, idx)=>{
//   // console.log(val, idx);
//   return val
// })

// console.log(res);


// arr.forEach((val, idx)=>{
//   console.log(val, idx);
//   // return val
// })

// let arr = ["hello", 123, "smit", false, "hello"]
// let arr = ["hello", "smit", "world"]

// let res = arr.filter((val, idx)=>{
//   // console.log(val, idx);
//   return typeof val == "string"
// })

// console.log(res);

// let res = arr.find((val, idx)=>{
//   // console.log(val, idx);
//   return typeof val == "string"
// })

// console.log(res);

// let res = arr.some((val, idx)=>{
//   return val == "world"
// })

// console.log(res);
// let res = arr.every((val, idx)=>{
//   return typeof val == "string"
// })

// console.log(res);

// let arr = ["hello", 123, "smit", false, "hello"]

// let res = arr.includes("world")
// console.log(res);


// var num = [1, 2, 4, 6, 8, 9]

// let data = num.reduce((a , b) => {
//   // console.log(i);
//   return a + b
// })

// console.log(data);

// 1. 1 + 2 = 3
// 2. 3 + 4 = 7
// 3. 7 + 6 = 13
// 4. 13 + 8 = 21
// 5. 21 + 9 = 30

