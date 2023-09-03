// Most decorator use uppercase for the starting letter
function Logger(constructor: Function) {
	console.log('Logging...');
	console.log('constructor --> ', constructor);
}

// decorator are launch when your class is DEFINED not when it is INSTANTIATED
@Logger
class Person {
	name = 'Gery';

	constructor() {
		console.log('Creating person object...');
	}
}

const pers = new Person();

console.log('pers --> ', pers);
