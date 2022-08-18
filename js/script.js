let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
  count: `${numberOfFilms}`,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

let firstQuestion = prompt("Один из последних просмотренных фильмов?");
let firstQuestionScore = prompt("Насколько оцените его?");

personalMovieDB.movies = {
  firstQuestion: firstQuestionScore,
};
