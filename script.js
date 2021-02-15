/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++){
    const   a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
            
    if(a != null && b != null && a != '' && a!= '' & a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    }
    else{
        console.log('error');
        i --;
    }
}
// let j = 0;
// while ( j != 2 ) {
//     const   a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
            
//     if(a != null && b != null && a != '' && a!= '' & a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     }
//     else{
//         console.log('error');
//         j --;
//     }
//     j++;
// }

// do {
//         const   a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
            
//         if(a != null && b != null && a != '' && a!= '' & a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         }
//         else{
//         console.log('error');
//         j --;
//         }
//         j++;
// }
// while(j != 2);
if(personalMovieDB.count < 10) 
{
    console.log("Посмотрено довольно мало фильмов");
}
else if( 10 < personalMovieDB.count && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
}
else if (personalMovieDB.count > 30){
    console.log("Вы киноман!");
}
else {
    console.log('ошибка');  
}
console.log(personalMovieDB);
// while (true){
//     const   a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');

// if(personalMovieDB[a] == null || personalMovieDB[c] == null){
//     continue;
// }
// else if (personalMovieDB[a].length > 50 || personalMovieDB[a].length > 50){
//    continue;
// }
// else {
//     personalMovieDB.movies[a] = b;
//     personalMovieDB.movies[c] = d; 
// }

// console.log(personalMovieDB);
// }