class Department {
  // name: string = 'DEFAULT'; // an initializer value is not mandatory
  // private id: string;
  // private name: string; // public keyword is the DEFAULT setting
  private employees: string[] = [];

  // a method that is executed when the object is initiated
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  // Make sure to catch unwanted behavior in TS
  describe(this: Department) {
    console.log('Department: ' + this.id + this.name);
  }

  addEmployee(employee: string) {
    // this.id = 'changed id';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Tom');

// accounting.employees[2] = 'Anna';

console.log(accounting);
accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'Dummy', describe: accounting.describe };

// accountingCopy.describe();
