// Code goes here!
class Department {
  name: string = 'DEFAULT';

  // an method that is executed when the object is initiated
  constructor(n: string) {
    this.name = n;
  }
}

const accounting = new Department('Accounting');

console.log(accounting);
