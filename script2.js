// Заание 1
// let namePassword = prompt('Введите пароль');
// let password = 'пароль';

// if (namePassword === password) {
//     console.log('Пароль введен верно');
// } else {
//     console.log('Пароль введен не правильно');
// }

//Задание 2
// let c = 15;

// (c > 0 && c < 10) ? console.log('Верно') : console.log('Не верно');

// Проверка
// let c = 0 /*10, -3, 2*/;

// (c > 0 && c < 10) ? console.log('Верно') : console.log('Не верно');

//Задание 3
// let d = 56;
// let e = 115;

// (d > 100 || e > 100) ? console.log('Верно') : console.log("Не верно");

//Задание 4
// let a = '2';
// let b = '3';

// alert(+a + +b);
// //alert( Number(a) + Number(b) );

//Задание 5
let monthNumder = Number(prompt('Введите месяц'));

switch (monthNumder) {
    case 1:
    case 2:
    case 12:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('Нет такого месяца!');
        break;
}
