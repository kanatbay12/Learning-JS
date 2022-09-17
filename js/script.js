'use strict';
let numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?");
// console.log(numberOfFilms);
// 

const personalMovieDB = {
  count: `${numberOfFilms}`,
  movies: {},
  actors:{},
  genres:[],
  private:false
};

// const firstQuestion = prompt("Один из последних просмотренных фильмов?");
// const secondQuestion = prompt("На сколько оцените его?");
// const thirdQuestion = prompt("Один из последних просмотренных фильмов?");
// const fourthQuestion = prompt("На сколько оцените его?");
// personalMovieDB.movies[firstQuestion]=secondQuestion;
// personalMovieDB.movies[thirdQuestion]=fourthQuestion;

// Домашка 12

for (let i=0; i<2; i++){
  let a = prompt("Один из последних просмотренных фильмов?", "");
  let b = prompt("На сколько оцените его?", "");

  if (a != null && b != null && a != `` && b != `` && a.length < 50){
    personalMovieDB.movies[a]=b;
    console.log("Succes");
  } else {
    console.log("Error");
    i--;
  }
}
// 

if (personalMovieDB.count < 10){
  console.log('Просмотрено довольно мало фильмов');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
  console.log('Вы классический зритель');
} else if(personalMovieDB > 30){
  console.log('Вы киноман');
} else{
  console.log('Произошла ошибка');
}


console.log(personalMovieDB);