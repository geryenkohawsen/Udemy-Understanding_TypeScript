/**
 * 1. an interface is also usable to define a function because a function is technically an object
 * 2. custom types is more commonly used to define a function
 */
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

/**
 * 1. interface describe the structure of an object
 * 2. interface and custom type are not the same. Type can store union types but interface can be implemented by a class
 */

interface Named {
  readonly name: string;
}

interface Aged {
  age: number;
}

/**
 * class can only extends one other class but interface can extends multiple interfaces
 */
interface Greetable extends Named, Aged {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;

user1 = new Person('Max');
// user1.name = 'Manu';

// user1 = {
//   name: 'Max',
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   },
// };

user1.greet('HI! I am');
