//Задание 1
// function minValue(a, b) {
//     return a < b ? a : b;
// }

// minValue(7, 12);
// minValue(5, 5);

//Задание 2
function numValue() {
    let num = prompt('Пожалуйста, введите любое число');
    if (num % 2 === 0) {
        return('Число четное');
    } else {
        return('Число не четное');
    }
}

numValue();