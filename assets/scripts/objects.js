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
