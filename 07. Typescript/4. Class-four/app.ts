// 1. union and intersection
// 2. type of guard


// ===== union and intersection ===== //

// 1. What is union types in TypeScript?
// 2. use union type with variable data types
// 3. use union type with function parameters
// 4. use union type with function return types
// 5. type check with union types


// let stdId: number | string = 54321
// stdId = "std-54321"

// function getStudentId(value: number | string) {
//     return value
// }

// getStudentId(123);
// getStudentId("123");

// function getCity(): string | string[] {
//     var val = 1
//     if (val > 1) {
//         return ["Karachi", "Lahore"]
//     } else {
//         return "Karachi"
//     }
// }

// console.log(getCity());


// function checkType (value: number | string | boolean){
//     if(typeof value === "string"){
//         console.log("Value is string ->", value);
//     } else if(typeof value === "number") {
//         console.log("Value is number ->", value);
//     } else {
//         console.log("This type is not avaliable ->", value);
//     } 
// }

// checkType(987)
// checkType("hello")
// checkType(true)




// 1. what is Intersection Types?
// 2. How to use it with type ?
// 3. how to use it with interface?

interface UserInfo {
    name: string,
    age: number
}

interface UserCrediential {
    email: string,
    password: number
}

type UserCompleteInfo = UserInfo & UserCrediential


let userInformation: UserCompleteInfo = {
    name: "Jhon",
    age: 52,
    email: "jhon@gmail.com",
    password: 123456
}


// 1. difference between type and interface in TypeScript?
// Type and Interface are both used to define the shape of an object in TypeScript, but they have some differences:
// 1. Declaration: Type is declared using the 'type' keyword, while Interface is declared using the 'interface' keyword.
// 2. Extensibility: Interfaces can be extended using the 'extends' keyword, allowing you to create new interfaces based on existing ones. Types cannot be extended in the same way, but they can be combined using intersection types.
// 3. Merging: Interfaces can be merged, meaning you can declare the same interface multiple times and TypeScript will combine them. Types cannot be merged in this way.
// 4. Use Cases: Interfaces are generally preferred for defining the shape of objects and classes, while Types are often used for more complex type definitions, such as union types, intersection types, and mapped types.
