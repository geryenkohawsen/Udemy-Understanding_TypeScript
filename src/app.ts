// the Array is the first built-in generic type of TS

const names: Array<string> = [];
// names[0].split(' ');

//  second is the Promise
const promise: Promise<number> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(0);
	}, 2000);
});

promise.then((data) => {
	// data.split(' ');
});
