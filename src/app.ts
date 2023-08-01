class Department {
  // name: string = 'DEFAULT'; // an initializer value is not mandatory
  name: string;

  // a method that is executed when the object is initiated
  constructor(n: string) {
    this.name = n;
  }
}

const accounting = new Department('Accounting');

console.log(accounting);
