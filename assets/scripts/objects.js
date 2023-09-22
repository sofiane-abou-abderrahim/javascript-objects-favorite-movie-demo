const person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function () {
    alert('Hi there!');
  }
};

///// ADDING /////

person.isAdmin = true; // adds a new property

///// MODIFYING /////

person.age = 31; // overrides the old value

console.log(person);

///// DELETING /////

delete person.age; // cleaner than setting it to undefined because you really get rid of it
// person.age = undefined; // you don't see the property in the browser console, but technically it is still there
// person.age = null; // still has the age property, but it resets the value

console.log(person.age, person);
