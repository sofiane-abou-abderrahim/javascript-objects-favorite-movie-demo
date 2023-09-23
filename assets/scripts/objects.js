'use strict';
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = []; // an array is an object (reference type), we can store this in a constant and still edit the value here with push and pop and so on

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = ''; // not ideal way: technically always everything gets cleared and re-rendered from scratch

  const filteredMovies = !filter
    ? movies
    : movies.filter(movie => movie.info.title.includes(filter));

  // outputting the movies
  filteredMovies.forEach(movie => {
    const movieEl = document.createElement('li');
    const { info, ...otherProps } = movie; // between the curly brackets, you have to enter a key name that exists in the object
    console.log(otherProps); // remaining properties of the object (here it is the id)
    // const { title: movieTitle } = info; // if you want to use a different name by adding a colon
    let { getFormattedTitle } = movie; // object destructuring on a method
    // getFormattedTitle = getFormattedTitle.bind(movie); // we can also use bind to not only preconfigure arguments a function will get but also to preconfigure what this will refer to
    let text = getFormattedTitle.call(movie) + ' - '; // it executes a function for you when you want to change what this refers to
    // let text = getFormattedTitle.apply(movie) + ' - '; // it is like call(), but you use an array as a second parameter instead of an unlimited amount of values
    // let text = movieTitle.toUpperCase() + ' - '; // there is nothing wrong, but sometimes you want to bake certain logic into your objects
    for (const key in info) {
      if (key !== 'title') {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  }); // you could use a for/of loop
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      title, // useful shorthand notation, if key name and value name are the same, you can use that instead of "title: title"
      [extraName]: extraValue
    },
    id: Math.random().toString(),
    getFormattedTitle() {
      console.log(this);
      // Inside of a function, no matter if that function is part of an object or not,
      // the this keyword will refer to whatever called that function,
      // whatever was responsible for executing that function you could say
      return this.info.title.toUpperCase();
    }
  };
  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = function () {
  // The key thing really is that this refers to what called a function,
  //the thing with what's in front of the function only works if you're executing the function on your own in your code
  // When a function executes based on an event,
  // then this inside of the function will actually refer to the object, to the element that's triggered,
  // that event which in the end triggered that function
  // => the browser binds "this" for you (on event listeners) to the DOM element triggered the event,
  // ONLY IF YOU'RE NOT USING AN ARROW FUNCTION
  console.log(this);
  // If I click on "Search", we indeed see the button is output there,
  // so this inside of a function that's triggered based on an event listener refers to the element or
  // to the thing that is responsible for triggering this event.
  const filterTerm = document.getElementById('filter-title').value; // reads user input
  renderMovies(filterTerm); // calls renderMovies and forwards filterTerm
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
