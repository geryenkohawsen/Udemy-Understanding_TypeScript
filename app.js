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
};
console.log(person.name);
