// Most decorator use uppercase for the starting letter
function Logger(logString: string) {
	return function (constructor: Function) {
		console.log(logString);
		console.log('constructor --> ', constructor);
	};
}

// decorator are launch when your class is DEFINED not when it is INSTANTIATED
@Logger('LOGING - PERSON')
class Person {
	name = 'Gery';

	constructor() {
		console.log('Creating person object...');
	}
}

const pers = new Person();

console.log('pers --> ', pers);
