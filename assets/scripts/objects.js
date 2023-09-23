const person = { name: 'Max', hobbies: ['Sports', 'Cooking'] };

const person2 = { ...person, age: 30, hobbies: [...person.hobbies] };

console.log(person);
console.log(person2);

person.hobbies.push('Coding');

console.log(person);
console.log(person2);
