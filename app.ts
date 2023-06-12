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

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]
// } = {
//   name: 'Gery',
//   age: 20,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };

enum Role {ADMIN, READ_ONLY, AUTHOR} 
enum Role2 {ADMIN = 5, READ_ONLY, AUTHOR} // can choose your own starting number
enum Role3 {ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'xyz'} // can use string also

const person = {
  name: 'Gery',
  age: 20,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
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

if (person.role === Role.ADMIN) console.log('Role is ADMIN!');
