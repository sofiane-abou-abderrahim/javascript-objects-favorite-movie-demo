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
      if (key !== 'title' && key !== '_title') {
        // && key !== '_title' should be added if you plan on using this pattern here
        // so that we don't output the _title (on the browser) when we go through all properties
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

  if (extraName.trim() === '' || extraValue.trim() === '') {
    return;
  }

  const newMovie = {
    info: {
      set title(val) {
        if (val.trim() === '') {
          // extra validation
          this._title === 'DEFAULT'; // fallback
          return;
        }
        this._title = val; // internal value
      }, // creates a setter
      get title() {
        return this._title; // refers to this internal property which I create here on the fly in the setter
        // return this._title.toUpperCase(); // you could do additional transformations, like this.
      }, // creates a getter
      [extraName]: extraValue
    },
    // So getters and setters can be nice if you want to add some extra validation, maybe a fallback
    // or add some extra transformation when getting a value
    id: Math.random().toString(),
    getFormattedTitle() {
      console.log(this);
      // Inside of a function, no matter if that function is part of an object or not,
      // the this keyword will refer to whatever called that function,
      // whatever was responsible for executing that function you could say
      return this.info.title.toUpperCase();
    }
  };

  newMovie.info.title = title; // we assigned the title constant we created in addMovieHandler()
  console.log(newMovie.info.title); // the getter is triggered whenever we access the property, for example like this.

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = function () {
  console.log(this);

  const filterTerm = document.getElementById('filter-title').value; // reads user input
  renderMovies(filterTerm); // calls renderMovies and forwards filterTerm
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
