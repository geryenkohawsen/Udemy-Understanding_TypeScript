class Department {
  // name: string = 'DEFAULT'; // an initializer value is not mandatory
  public name: string; // public keyword is the DEFAULT setting
  private employees: string[] = [];

  // a method that is executed when the object is initiated
  constructor(n: string) {
    this.name = n;
  }

  // Make sure to catch unwanted behavior in TS
  describe(this: Department) {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Tom');

accounting.employees[2] = 'Anna';

console.log(accounting);
accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'Dummy', describe: accounting.describe };

// accountingCopy.describe();
