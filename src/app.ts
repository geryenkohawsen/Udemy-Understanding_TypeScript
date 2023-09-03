// Most decorator use uppercase for the starting letter
function Logger(logString: string) {
	return function (constructor: Function) {
		console.log(logString);
		console.log('constructor --> ', constructor);
	};
}

function WithTemplate(template: string, hookId: string) {
	return function (constructor: any) {
		const hookEl = document.getElementById(hookId);
		const p = new constructor();
		if (hookEl) {
			hookEl.innerHTML = template;
			hookEl.querySelector('h1')!.textContent = p.name;
		}
	};
}

// decorator are launch when your class is DEFINED not when it is INSTANTIATED
// @Logger('LOGING - PERSON')
@WithTemplate('<h1>###WithTemplate###</h1>', 'app')
class Person {
	name = 'Gery';

	constructor() {
		console.log('Creating person object...');
	}
}

const pers = new Person();

console.log('pers --> ', pers);
