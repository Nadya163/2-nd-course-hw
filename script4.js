//Задание 1
// function minValue(a, b) {
//     return a < b ? a : b;
// }

// minValue(7, 12);
// minValue(5, 5);

//Задание 2
// function numValue() {
//     let num = prompt('Пожалуйста, введите любое число');
//     if (num % 2 === 0) {
//         return('Число четное');
//     } else {
//         return('Число не четное');
//     }
// }

// numValue();

//Задание 3.1
// function number(num) {
//     console.log(num * num);
//   }
   
//   number(15);

//Задание 3.2
// function number(num) {
//     return num ** 2;
//   }
   
//   number(25);

//Задание 4
let age = Number(prompt('Введите свой возраст'));

function checkAge(age) {
    if (age <= 12 && age >= 0) {
        return 'Привет, друг!';
    } else if (age >= 13 && age >= 0) {
        return 'Добро пожаловать!';
    } else {
        return 'Вы ввели неправильное значение';
    }
}

alert(checkAge(age));