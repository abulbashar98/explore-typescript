const first = 'First Typescript file';
const myName = 'Rakib';
console.log('tsConfig updated to es6');

/*
let money = 5500;
money = 'five thousand and five hundred';
money = true;
*/

let money: number = 5500;
let honey: string = 'five thousand and five hundred';
let funny: boolean = true;

// const age: number = true;    
// const age: number = '';      
const age: number = 215;



// Function

// function add(first: number, second: number): string {
//     const result = first + second;
//     return result + '';
// }
function add(first: number, second: number): number {
    const result = first + second;
    return result;
}
// add()
// add(2,34,75)
// add('ball', 25);

// const output: string = add(95, 56);
const output: number = add(95, 56);





// Multi Purpose function

function add2(first: number | string, second: number | string): number | string {
    const result: number | string = first + second;
    return result;
}
const fullName = add2('adam', 'shaun')




// function without a return 

function doubleConsole(number: number): void {
    console.log(number * 2)
    // return number;
}