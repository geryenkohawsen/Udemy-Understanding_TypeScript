// // the Array is the first built-in generic type of TS

// const names: Array<string> = [];
// // names[0].split(' ');

// //  second is the Promise
// const promise: Promise<number> = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(0);
// 	}, 2000);
// });

// promise.then((data) => {
// 	// data.split(' ');
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}

const mergedObj1 = merge({ name: 'Gery', hobbies: ['Sports'] }, { age: 24 });
const mergedObj2 = merge({ name: 'Gery' }, { age: 24 });

console.log('mer1 --> ', mergedObj1);
// console.log('mer2 --> ', mergedObj2.hobbies); // no hobbies property

interface Lengthy {
	length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
	let descriptionText = 'Got no value.';
	if (element.length > 0) {
		descriptionText = `Got ${element.length} element${
			element.length > 1 ? 's' : ' '
		}.`;
	}
	return [element, descriptionText];
}

console.log('countAndDescribe --> ', countAndDescribe('Hi there!'));
console.log('countAndDescribe --> ', countAndDescribe(['Sports', 'Cooking']));
console.log('countAndDescribe --> ', countAndDescribe([]));

function extractAndConvert<T extends object, U extends keyof T>(
	obj: T,
	key: U
) {
	return `Value: ${obj[key]}`;
}

console.log(
	'extractAndConvert --> ',
	extractAndConvert({ name: 'Gery' }, 'name')
);

class DataStorage<T extends string | number | boolean> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		if (this.data.indexOf(item) === -1) {
			return;
		}
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems() {
		return [...this.data];
	}
}

const textStorage = new DataStorage<string>();
// textStorage.addItem(10); // will return an error
textStorage.addItem('Gery');
textStorage.addItem('Enko');
textStorage.addItem('Hawsen');
textStorage.removeItem('Gery');

console.log('textStorage --> ', textStorage.getItems());

const numberStorage = new DataStorage<number | string>();
numberStorage.addItem(123);
numberStorage.addItem('123');

/*
const objStorage = new DataStorage<object>();
const maxObj = { name: 'Max' };
objStorage.addItem(maxObj);
objStorage.addItem({ name: 'John' });
// ..
objStorage.removeItem(maxObj);
console.log('objStorage --> ', objStorage.getItems());
*/

interface CourseGoal {
	title: string;
	description: string;
	completeUntil: Date;
}

function createCourseGoal(
	title: string,
	description: string,
	date: Date
): CourseGoal {
	// return { title: title, description: description, completeUntil: date };
	// step by step
	let courseGoal: Partial<CourseGoal> = {};
	courseGoal.title = title;
	courseGoal.description = description;
	courseGoal.completeUntil = date;
	return courseGoal as CourseGoal;
}

const names: Readonly<Array<string>> = ['Max', 'Anna'];
// below methods will return an error
// name.push('push');
// name.pop()
