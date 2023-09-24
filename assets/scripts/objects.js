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

    // if ('info' in movie) {
    // } // checks for the existance of a property in an object with in keyword

    // if (movie.info === undefined) {
    // } // checks for the existance of a property in an object with a comparison

    const { info, ...otherProps } = movie; // between the curly brackets, you have to enter a key name that exists in the object
    console.log(otherProps); // remaining properties of the object (here it is the id)
    const { title: movieTitle } = info; // if you want to use a different name by adding a colon
    let text = movieTitle + ' - ';
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
    id: Math.random().toString()
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
