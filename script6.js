// Задание 1
// console.log('Hello word'.toUpperCase());

// Задание 2
function strAndArr(arr, str) {
    let newArr = [];
    arr.forEach((el) => {
        if (el.toLowerCase().startsWith(str.toLowerCase())) {
            newArr.push(el);
        }
    });
    console.log(newArr);
}

strAndArr(['Сорока', 'Дом', 'Сор', 'Иррациональный', 'Соловей', 'Табурет'], 'со');
