const userChosenKeyName = 'level';

const person = {
  'first name': 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  [userChosenKeyName]: '...', // sets dynamically the property
  greet: function () {
    alert('Hi there!');
  },
  1.5: 'hello'
};

const keyName = 'first name';

console.log(person[keyName]); // accesses dynamically the property
console.log(person[userChosenKeyName]); // // accesses dynamically the property
// console.log(person['level']); // you can access dynamically the property like this as well
console.log(person);
