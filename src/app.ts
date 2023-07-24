// const userName = 'Gery';
// userName = 'const error';
// let age = 30;

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

const add = (a: number, b: number) => a + b;

const printOutput = (output: string | number) => console.log(output);

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', (event) => console.log(event));
}

printOutput(add(5, 2));
