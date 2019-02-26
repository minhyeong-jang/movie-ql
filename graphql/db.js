export let movies = [
  {
    id: 0,
    name: "Movie 0",
    score: 23,
  },
  {
    id: 1,
    name: "Movie 1",
    score: 99,
  },
  {
    id: 2,
    name: "Movie 2",
    score: 5,
  },
  {
    id: 3,
    name: "Movie 3",
    score: 23,
  },
  {
    id: 4,
    name: "Movie 4",
    score: 52,
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0];
}

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id === id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
}