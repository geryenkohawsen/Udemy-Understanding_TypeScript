type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
	name: 'Max',
	privileges: ['create-server'],
	startDate: new Date(),
};
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString();
	}
	return a + b;
}

const result = add('Geryenko', 'Hawsen');
result.split(' ');

const fetchedUserData = {
	id: 'u1',
	name: 'Max',
	job: {
		title: 'CEO',
		description: 'my own company',
	},
};

console.log(fetchedUserData?.job?.title);

const userInput = undefined;

// const storedData = userInput || 'DEFAULT'; // if userInput is an empty string it will not go to the fallback value
const storedData = userInput ?? 'DEFAULT';

console.log('storedData --> ', storedData);

/*
type UnknownEmployee = Employee | Admin;

// use [in] to type guard object
function printEmployeeInformation(emp: UnknownEmployee) {
	console.log('Name --> ', emp.name);
	if ('privileges' in emp) {
		console.log('Privileges --> ', emp.privileges);
	}
	if ('startDate' in emp) {
		console.log('startDate --> ', emp.startDate);
	}
}

printEmployeeInformation(e1);

class Car {
	drive() {
		console.log('Driving');
	}
}

class Truck {
	drive() {
		console.log('Driving a truck');
	}

	loadCargo(amount: number) {
		console.log('Loading cargo --> ', amount);
	}
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

// use [isntanceof] to type guard object that is instantiated from a class
function useVehicle(vehicle: Vehicle) {
	vehicle.drive();
	if (vehicle instanceof Truck) {
		vehicle.loadCargo(1000);
	}
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
	type: 'bird';
	flyingSpeed: number;
}

interface Horse {
	type: 'horse';
	runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
	let speed;
	switch (animal.type) {
		case 'bird':
			speed = animal.flyingSpeed;
			break;
		case 'horse':
			speed = animal.runningSpeed;
	}
	console.log('Moving speed --> ', speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });

// Type Casting version 1
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;

// Type Casting version 2
const userInputElement = document.getElementById(
	'user-input'
)! as HTMLInputElement;

userInputElement.value = 'Hi there!';

// Version 3
const userInputElement2 = document.getElementById('user-input');

if (userInputElement2) {
	(userInputElement2 as HTMLInputElement).value = 'Hello';
}

interface ErrorContainer {
	[prop: string]: string;
}

const errorBag: ErrorContainer = {
	1: 'Not a valid email',
	// email: 1,
	email: 'Not a valid email',
	username: 'Must start with a capital character!',
};
*/
