// Will throw error when trying to access properties because generic type properties are not defined
// const person: object = {
//   name: 'Gery',
//   age: 20
// }
// Not efficient. Better to let TypeScript infer the types themselves for simple types
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Gery',
//   age: 20,
// };
var person = {
    name: 'Gery',
    age: 20,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
person.role.push('admin');
person.role[1] = 10;
console.log(person.role);
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // Error because TypeScript inferences knows that the map() method are not callable from a string
}
