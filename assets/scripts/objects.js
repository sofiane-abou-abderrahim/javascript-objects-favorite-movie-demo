const person = { name: 'Max' };

// const person2 = { ...person }; // recommanded approach because it is a really short syntax

const person2 = Object.assign({}, person); // has a bit better browser support

person.name = 'Maximilian';

console.log(person, person2);
