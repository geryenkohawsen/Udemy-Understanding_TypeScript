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

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]
} = {
  name: 'Gery',
  age: 20,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

// person.role.push('admin')
// person.role[1] = 10

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // Error because TypeScript inferences knows that the map() method are not callable from a string
}
