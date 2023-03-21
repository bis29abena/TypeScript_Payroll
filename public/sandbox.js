"use strict";
// let character = 'mario';
// const circ = (diameter: number) => {
//     return diameter * Math.PI
// }
// console.log(circ(5))
// let age: any;
// age = 25
// age = "hello"
// //Functions In The type SCript
// let greet: Function;
// greet = () =>{
//     console.log("hello world")
// }
// greet()
// //Optional Parameters In Function
// const add = (a: number, b: number, c?: number | string) => {
//     console.log(a+b)
//     console.log(c)
// }
// // add(20, 5)
// //Functions with return type
// const minus = (a: number, b: number): number => {
//     return a - b
// }
// //Type Aliases
// type StringOrNum = string | number
// type ObjWithName = {name: string, uid: StringOrNum}
// const loginDetails = (uid: StringOrNum, username: string): any => {
//     console.log(`${username} has with uid ${uid} cannot login`)
// }
// const greetUser = (user: ObjWithName): void => {
//     console.log(`${user.name} has uid ${user.uid}`)
// }
// greetUser({name: "Hello", uid: 123434325443})
//Functions Signatures
let greet;
greet = (fname, lname) => {
    console.log(`${fname} that's the first name and ${lname} is the last name`);
};
//Example 2
let calc;
calc = (num1, num2, action) => {
    if (action === "add") {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
let logDetails;
logDetails = (user) => {
    console.log(`${user.name} has age ${user.age} years`);
};
logDetails({ name: "Bismark", age: 24 });
