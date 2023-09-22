const person = {
  'first name': 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function () {
    alert('Hi there!');
  }
};

console.log(person['first name']);

const movieList = document.getElementById('movie-list');
// movieList.style.backgroundColor = 'red';
movieList.style['background-color'] = 'red'; // square brackets access feature
movieList.style.display = 'block';
