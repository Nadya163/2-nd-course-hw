//Задание 1
// function minValue(a, b) {
//     return a < b ? a : b;
// }

// console.log(minValue(7, 12));
// console.log(minValue(5, 5));

//Задание 2
// function numValue() {
//     let num = prompt('Пожалуйста, введите любое число');
//     if (num % 2 === 0) {
//         return('Число четное');
//     } else {
//         return('Число не четное');
//     }
// }

// console.log(numValue());

//Задание 3.1
// function number(num) {
//     console.log(num * num);
//   }
   
//  console.log(number(15));

// //Задание 3.2
// function number(num) {
//     return num ** 2;
//   }
   
//  console.log(number(25));

//Задание 4
// let age = Number(prompt('Введите свой возраст'));

// function checkAge(age) {
//     if (age <= 12 && age >= 0) {
//         return 'Привет, друг!';
//     } else if (age >= 13 && age >= 0) {
//         return 'Добро пожаловать!';
//     } else {
//         return 'Вы ввели неправильное значение';
//     }
// }

// alert(checkAge(age));

//Задание 5
// function num(a, b) {
//     if (isNaN(a) && isNaN(b)) {
//         return 'Одно или оба значения не являются числом';
//     } else {
//         return a * b;
//     }
// }

// console.log(num(13, 5));

//Задание 6
// let n = prompt('Введите число');

// function numberCheck(n) {
//     if (isNaN(n)) { 
//         return 'Переданный параметр не является числом';
//     }   else {
//         return `n в кубе равняется ${(n ** 3)}`;
//     }
// }

// alert(numberCheck(n));

// Задание 7
function getCircleArea(radius) {
    return 3.14 * this.radius * this.radius;
}

function getCirclePerimeter() {
    return 2 * 3.14 * this.radius;
}

let circl1 = {
    radius: 13,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter
}

let circl2 = {
    radius: 6,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter
}

console.log(circl1.getArea());
console.log(circl1.getPerimeter());
console.log(circl2.getArea());
console.log(circl2.getPerimeter());