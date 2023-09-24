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

// There is one important exception,
// if we have an object which only consists of only number keys,
// then if you output "numbers", you see indeed here that is sorted
// => That makes sense because arrays are objects with number keys where the order should be guaranteed (ascending)!
const numbers = { 5: 'hi', 1: 'true' };
console.log(numbers);
