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
