// Задание 1
// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
//  ];

//  console.log(people.sort((a, b) => a.age - b.age));

//Задание 2
// function isPositive(num) {
//     return num > 0;
// }
// function isMale(people) {
//     return people.gender === 'male';
// }
// function filter(arr, ruleFunction) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//       const item = arr[i];
//       if (ruleFunction(item)) {
//         result.push(item);
//       }
//     }
//     return result;
// }

// console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

// const people = [
//     {name: 'Глеб', gender: 'male'},
//     {name: 'Анна', gender: 'female'},
//     {name: 'Олег', gender: 'male'},
//     {name: 'Оксана', gender: 'female'}
// ];

// console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

//Задача 3
// let timer = 0;

// const intervalId = setInterval(() => {
//   console.log(new Date().toLocaleString());
//   timer++;
//   if (timer === 10) {
//     clearInterval (intervalId);
//     console.log("Прошло 30 секунд");
//   }
// }, 3000);

// console.log(intervalId);

//Задача 4
// function delayForSecond(callback) {
//     setTimeout(callback, 1000);
// }

// delayForSecond(function () {
//   console.log('Привет, Глеб!');
// })

//Задача 5
// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) {
            cb();
        }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => {
    sayHi('Глеб');
})