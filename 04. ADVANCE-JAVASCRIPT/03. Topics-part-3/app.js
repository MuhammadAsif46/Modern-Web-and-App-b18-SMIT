// ------- Arrow Functions -------

// const abc = (a, b) => {
//   console.log(a + b);
// }

// const abc = (a, b) => console.log(a + b);

// const abc = (a, b) => a + b;
// const abc = a => a;


// let res = abc(1 , 3)
// console.log(res);
// abc(1, 4)

// let res = abc("welcome")
// console.log(res);

// ------- DEFAULT PARAMETERS & REST PARAMETERS -------

// const foo = (a = "new", ...val) => {
//     console.log(a , val);
// }

// foo("hello", 12, true, "welcome")


// ------- REST PARAMETERS -------

// function abc(...abc){
//     console.log(abc[0]);
// }
// abc("jhon@gmail.com","Elia",222, false)


// ------- SPREAD OPERATOR with (array) -------  

// let arr = [1, 2, 3]
// // let arr1 = [...arr ,4, 5, 6]
// let arr1 = [4, 5, 6]
// let merge = [...arr ,...arr1]
// console.log(merge);

// let arr2 = [arr, arr1]


// ------- SPREAD OPERATOR with (object) -------

// let obj  = {
//     firstName: "Ali",
//     lastName: "Raza"
// }
// console.log(obj);

// let obj1 = {
//     ...obj,
//     email: "aliraza@gmail.com"
// }

// console.log(obj1);


// ------- DESTRUCTURING with (object) ------- 

// let obj = {
//     firstName: "Ali",
//     lastName: "Raza",
//     email: "aliraza@gmail.com",
//     gender: 'male',
//     grade: 10,
// }

// let { firstName, email } = obj;

// console.log(obj.lastName);
// console.log(firstName);
// console.log(email);


// ------- DESTRUCTURING with (array) -------

// let arrVal = ["hello", 12, false, "welcome"]

// let [a, b, c, d] = arrVal
// // arrVal[4]
// console.log(a);


// Array Methods (forEach, map, concat):

// ------- Concat() -------

// let arr = [1, 2, 3]
// let arr1 = [4, 5, 6]
// let arr2 = [7, 8, 9]
// let merge = arr.concat(arr1, arr2)
// console.log(merge)

let arr = ["hello", 9876, "welcome", false]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// ------- Map() -------

// let arrData = arr.map(function(a){
//     // console.log(a);
//     return a
// })

// console.log(arrData);

// ------- ForEach() -------

// arr.forEach(function(b){
//     console.log(b);
// })

// console.log(arr1);