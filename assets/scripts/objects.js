'use strict'; // If we are in strict mode, "this" is actually be undefined
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
    let { getFormattedTitle } = movie; // object destructuring on a method
    getFormattedTitle = getFormattedTitle.bind(movie); // we can also use bind to not only preconfigure arguments a function will get but also to preconfigure what this will refer to
    // let text = movie.getFormattedTitle() + ' - '; // you can use this approach without bind()
    let text = getFormattedTitle() + ' - '; // executes the function
    // now, we have nothing in front of getFormattedTitle(),
    // so the thing responsible for triggering the function is our global execution context)
    // In non-strict mode which I'm using here, "this" will then actually refer to the window object
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
      // "this" refers to the window object and that's just the default in non-strict mode,
      // => "this", if it refers to nothing else, refers to the global object.
      // if we were in strict mode, you will see that "this" will actually be undefined
      // either way it will never refer to my "movie"
      // So, to make sure that "this" refers to thr right thing (here "movie"),
      // you can use the bind() method
      return this.info.title.toUpperCase();
    }
  };
  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value; // reads user input
  renderMovies(filterTerm); // calls renderMovies and forwards filterTerm
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
