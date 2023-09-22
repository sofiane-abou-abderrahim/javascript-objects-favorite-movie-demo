const person = {
  'first name': 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function () {
    alert('Hi there!');
  },
  1.5: 'hello'
};

console.log(person[1.5]);
// console.log(person['1.5']); // it also works because JavaScript automatically coerces values to strings
console.log(person); // Look at the order of the object in the browser console (expanded object and not expanded)
