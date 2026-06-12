"use strict";
// Classes:
// class User {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// const u = new User("Asif");
// Generics:
// function print(value: string) {
//   return value;
// }
// function print<T>(value: T): T {
//   return value;
// }
// print("Asif");
// print(123);
// print(true);
// T = Placeholder Type
// Enums:
// const role = "admin";
// const role = "admn";
// enum Role {
//   Admin,
//   User,
//   Manager
// }
// let role: Role = Role.Admin;
// Enum = predefined options
// enum Light {
//   Red,
//   Yellow,
//   Green
// }
// Union Types:
// let value: string | number;
// value = "Asif";
// value = 22;
// value = true
// Real Example
// User ID
// Intersection Types:
// interface Person {
//   name: string;
// }
// interface Employee {
//   salary: number;
// }
// type Staff = Person & Employee;
// {
//  name:"Asif",
//  salary:50000
// }
// Meaning:
// Type Guard = type identify karna.
// const abc = (value: string | number)=>{
//   if(typeof value === "string"){
//     console.log("checking type-->",value)
//   }else{
//     console.log("error-->", value)
//   }
// }
// abc(123)
// enums Roles {
//   admin = "admin"
//   user = "user"
//   guest = "guest"
// }
// const getRoles = (value)=> {
//   if(value === Roles.admin || value === uppeercase(Roles.admin)){
//     console.log("ye ek banda hai")
//   }else if(value === Roles.user){
//     console.log("ye ek banda hai")
//   }else{
//     console.log("ye koi or hai...") 
//   }
// }
// getRoles("Male")
// interface User {
//     name: string,
//     rollNo: number
// }
// let obj: User = {
//     name: "hello",
//     rollNo: 123
// }
// class Student {
//     name: string;
//     rollNo: number;
//     isEnrolled: boolean;
//     constructor(name: string, rollNo:number, isEnrolled:boolean){
//         this.name = name;
//         this.rollNo = rollNo;
//         this.isEnrolled = isEnrolled;
//     }
// }
// let std1 = new Student("jhon", 123, false)
// // let std2 = new Student()
// console.log(std1);
// // console.log(std2);
// function ageCalculate (num1: number):number {
//     return num1   
// }
// function greet (value: string):string {
//     return value
// }
// function isActive (value: boolean):boolean {
//     return value
// }
// ageCalculate(1)
// greet("asif")
// isActive(true)
function getValue(value) {
    console.log(value);
}
getValue(123);
getValue(true);
