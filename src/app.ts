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

//  --

//  when adding a decorator to a property, it needs 2 arguments
//  Again, the constructor will execute when the property is DEFINED
function Log(target: any, propertyName: string | Symbol) {
	console.log('Property decorator!!');
	console.log(target, propertyName);
}

class Product {
	@Log
	title: string;
	private _price: number;

	set price(val: number) {
		if (val > 0) {
			this._price = val;
		} else {
			throw new Error('Invalid price - should be positive');
		}
	}

	constructor(t: string, p: number) {
		this.title = t;
		this._price = p;
	}

	getPriceWithTax(tax: number) {
		return this._price * (1 + tax);
	}
}
