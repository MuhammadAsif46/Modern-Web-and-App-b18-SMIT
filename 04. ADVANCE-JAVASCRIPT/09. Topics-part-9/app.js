// Async/await
// call, Apply, bind

// let greet = function (city, country ) {
//     console.log(this.name + " From " + city + " " + country);
// }

// let person1 = {
//     name: "sarfaraz",
//     age: 33,
// }

// console.log(person);

// let person2 = {
//     name: "Javed",
//     age: 54,
// }

// person1.greet.call(person2)
// greet.call(person1, "Karachi", "Pakistan")
// greet.call(person2, "Karachi", "Pakistan")
// greet.apply(person2, ["Karachi", "Pakistan"])

// let newFunc = greet.bind(person1, "Karachi", "Pakistan")
// newFunc();


// async function getProducts(){
//   try {
//     const res = await fetch("https://dummyjson.com/products");
//     const data = await res.json();
//     console.log("products data-->",data.products);
//   } catch(error){
//     console.log("Error aya:", error);
//   }
// }

// getProducts()


