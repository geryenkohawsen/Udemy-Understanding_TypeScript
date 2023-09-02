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
