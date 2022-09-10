let numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?");
document.write(numberOfFilms);

// 

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors:{},
  genres:[],
  private:false
};