const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = []; // an array is an object (reference type), we can store this in a constant and still edit the value here with push and pop and so on

const renderMovies = () => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = ''; // not ideal way: technically always everything gets cleared and re-rendered from scratch

  // outputting the movies
  movies.forEach(movie => {
    const movieEl = document.createElement('li');
    movieEl.textContent = movie.info.title;
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
    id: Math.random()
  };
  movies.push(newMovie);
  renderMovies();
};

addMovieBtn.addEventListener('click', addMovieHandler);
