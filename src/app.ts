class Department {
  // name: string = 'DEFAULT'; // an initializer value is not mandatory
  name: string;

  // a method that is executed when the object is initiated
  constructor(n: string) {
    this.name = n;
  }

  // Make sure to catch unwanted behavior in TS
  describe(this: Department) {
    console.log('Department: ' + this.name);
  }
}

const accounting = new Department('Accounting');

console.log(accounting);
accounting.describe();

const accountingCopy = { name: 'Dummy', describe: accounting.describe };

accountingCopy.describe();
