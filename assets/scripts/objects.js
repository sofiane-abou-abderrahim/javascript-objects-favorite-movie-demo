const person = { name: 'Max', hobbies: ['Sports', 'Cooking'] };

// const person2 = { ...person };
/*
What this does is it takes all key-value pairs of that object you pass after the spread operator
and merge these key-value pairs into this object.
So it creates a new object but copies over the values you have in the keys of the old object
and not only values but also the key names.
*/

const person2 = { ...person, age: 30, hobbies: [...person.hobbies] };

console.log(person);
console.log(person2);

person.hobbies.push('Coding');

console.log(person);
console.log(person2);
