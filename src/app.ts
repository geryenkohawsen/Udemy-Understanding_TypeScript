// Most decorator use uppercase for the starting letter
function Logger(logString: string) {
	console.log('LOGGER FACTORY');
	return function (constructor: Function) {
		console.log(logString);
		console.log('constructor --> ', constructor);
	};
}

function WithTemplate(template: string, hookId: string) {
	console.log('TEMPLATE FACTORY');
	return function (constructor: any) {
		console.log('Rendering template');
		const hookEl = document.getElementById(hookId);
		const p = new constructor();
		if (hookEl) {
			hookEl.innerHTML = template;
			hookEl.querySelector('h1')!.textContent = p.name;
		}
	};
}

// decorator are launch when your class is DEFINED not when it is INSTANTIATED
// the bottom most decorator are executed first,
// but decorator is also a function so anything before return will be executed also before the return functiona
@Logger('LOGING - PERSON')
@WithTemplate('<h1>###WithTemplate###</h1>', 'app')
class Person {
	name = 'Gery';

	constructor() {
		console.log('Creating person object...');
	}
}

const pers = new Person();

console.log('pers --> ', pers);
