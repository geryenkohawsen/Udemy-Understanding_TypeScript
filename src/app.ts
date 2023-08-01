// const userName = 'Gery';
// userName = 'const error';
// let age = 30;

import { Agent } from 'http';

// age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }
// console.log(result); // let and const is define in using block scope

// if (age > 20) {
//   var isOld = true; // var is defined using function adn global scope
// }
// console.log(isOld); // Error in TS but not in JS

// const add = (a: number, b: number = 1) => a + b; // always set default argument on the right because JS will not skip the first default argument

// const printOutput = (output: string | number) => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', (event) => console.log(event));
// }

// printOutput(add(5, 2));
// printOutput(add(1));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

// spread operator also works on objects
const person = {
  name: 'Gery',
  age: 24,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 101, 2, 3, 3.7);
console.log(addedNumbers);
