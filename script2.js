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
// let monthNumder = Number(prompt('Введите месяц'));

// switch (monthNumder) {
//     case 1:
//     case 2:
//     case 12:
//         console.log('Зима');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log('Весна');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log('Лето');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log('Осень');
//         break;
//     default:
//         console.log('Нет такого месяца!');
//         break;
// }

//Задание 7
//let num = prompt('Пожалуйста, введите любое число');

//console.log(parseFloat(num)); Второй вариант проверки

// if (num != 'NaN' && num % 2 === 0) {
//      alert(`${num},Число четное`);
// } else if (num != 'NaN' && num % 2 != 0) {
//     alert(`${num}, число не четное`);
// } else {
//      alert(parseFloat(num));
// }

//Задание 8
let clientOS = Number(prompt('Введите "0" если у вас iOS или "1" - Android'));

if (clientOS === 0) {
    alert('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1) {
    alert('Установите версию приложения для Android по ссылке');
} else {
    alert('Не верно ввели данные');
}