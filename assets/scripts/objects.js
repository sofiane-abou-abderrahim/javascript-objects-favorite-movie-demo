const person = { name: 'Max', hobbies: ['Sports', 'Cooking'] };

// const person2 = { ...person };
/*
What this does is it takes all key-value pairs of that object you pass after the spread operator
and merge these key-value pairs into this object.
So it creates a new object but copies over the values you have in the keys of the old object
and not only values but also the key names.
*/

/*
And the spread operator does not do a deep copy
where it goes through all level of nested reference values
you might have in this object or array
and then copies it from scratch.
  => This is normal, this is how reference values behave.

Instead it just copies the top level key-value pairs into a brand new object
and any nested reference values are kept, the addresses there are kept, there are no "hobbies" created.

If you would want to copy those as well,
you would have to do it manually by assigning a new hobbies array
where you copy over the old array
*/

const person2 = { ...person, age: 30, hobbies: [...person.hobbies] };

console.log(person);
console.log(person2);

person.hobbies.push('Coding');

console.log(person);
console.log(person2);
