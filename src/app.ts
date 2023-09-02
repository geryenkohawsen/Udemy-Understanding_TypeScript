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

function merge<T extends object, U>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}

const mergedObj1 = merge({ name: 'Gery', hobbies: ['Sports'] }, { age: 24 });
const mergedObj2 = merge({ name: 'Gery' }, { age: 24 });

console.log('mer1 --> ', mergedObj1.hobbies);
// console.log('mer2 --> ', mergedObj2.hobbies); // no hobbies property
