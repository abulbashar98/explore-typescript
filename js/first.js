"use strict";
const first = 'First Typescript file';
const myName = 'Rakib';
console.log('tsConfig updated to es6');
/*
let money = 5500;
money = 'five thousand and five hundred';
money = true;
*/
let money = 5500;
let honey = 'five thousand and five hundred';
let funny = true;
// const age: number = true;    
// const age: number = '';      
const age = 215;
// Function
// function add(first: number, second: number): string {
//     const result = first + second;
//     return result + '';
// }
function add(first, second) {
    const result = first + second;
    return result;
}
// add()
// add(2,34,75)
// add('ball', 25);
// const output: string = add(95, 56);
const output = add(95, 56);
// Multi Purpose function
function add2(first, second) {
    const result = first + second;
    return result;
}
const fullName = add2('adam', 'shaun');
// function without a return 
function doubleConsole(number) {
    console.log(number * 2);
    // return number;
}
