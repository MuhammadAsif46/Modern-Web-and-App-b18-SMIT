// console.log("hello");

// function greet(){
//     console.log("welcome to our website!");
// }

// greet()
// greet()
// greet()
// greet()

// var userValue = prompt("Enter word")

// function palandromeWord(value){ // parameter
//     var res = value.split("").reverse().join("")
//     if(value == res){
//         console.log("it's a palindrome word");
//     } else {
//         console.log("it's not palindrome word");
//     }
// }

// palandromeWord(userValue) // argument

// var text = "hello"
// // var text = "Smith"

// function abc(){
//     // text = "SMIT"
//     var test = "saylani"
//     console.log(text); // SMIT
// }
// abc()
// console.log(test); // SMITH

// var day = "sat"

// if(day == "sun"){
//     console.log("Chutti ka din!");
// } else if (day == "mon"){
//     console.log("Kam ka din");
// } else if (day == "sat"){
//     console.log("ghoomny ka din");
// } else if(day == "fri"){
//     console.log("half day");
// } else {
//     console.log("bekaar day");
// }

var day = "fri"
// var month = "jan"

switch (day) {
    case "sun":
        console.log("Chutti ka din!");
        break;
    case "mon":
        console.log("Kam ka din");
        break;
    case "sat":
        console.log("ghomny ka din");
        break;
    case "fri":
        console.log("half day");
        break;
    default: {
        console.log("bekaar day");
    }
}



