// Задание 1
// console.log('Hello word'.toUpperCase());

// Задание 2
// function strAndArr(arr, str) {
//     let newArr = [];
//     arr.forEach((el) => {
//         if (el.toLowerCase().startsWith(str.toLowerCase())) {
//             newArr.push(el);
//         }
//     });
//     console.log(newArr);
// }

// strAndArr(['Сорока', 'Дом', 'Сор', 'Иррациональный', 'Соловей', 'Табурет'], 'со');

// Задание 3
// num = Math.floor(32.58884);
// a = Math.ceil(32.58884);
// b = Math.round(32.58884);

// console.log(num);
// console.log(a);
// console.log(b);

// Задание 4
// let min = function(numbers) {
//     return Math.min(...numbers);
// }

// let max = function(numbers) {
//     return Math.max(...numbers);
// }

// console.log(min([52, 53, 49, 77, 21, 32]));
// console.log(max([52, 53, 49, 77, 21, 32]));

// Задание 5
// function randomNum() {
//     return Math.round((Math.random() * 10) + 1);
// }
// console.log(randomNum());

// Задание 6
// function getRandomArray(num) {
//     const randomArr = []
//     const arrLength = num / 2
  
//     for (let i = 0; i < arrLength; i++) {
//       const randomNum = Math.floor(Math.random() * num)
//       randomArr.push(randomNum)
//     }
  
//     return randomArr
//   }
  
//   console.log(getRandomArray(8));

// Задание 7
// const random = (o, a) => Math.floor(Math.random() * (a - o + 1)) + o;
// console.log(random(3, 9));

// Задание 8
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date(); 
let fullDate = "Сегодняшняя дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + ", " + days[myDate.getDay()];

console.log(fullDate); 