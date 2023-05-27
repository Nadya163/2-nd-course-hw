// Задача 1
// const num = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < num.length; i++) {
//     if (num[i] === 10) break;
//     console.log(num[i]); 
// }

// Задача 2
// const num = [1, 5, 4, 10, 0, 3];
// console.log(num.indexOf(4));

// Задача 3
// let arr = [1, 3, 5, 10, 20];
// arr = arr.join(' ');

// Задача 4
// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(1);
// 	}
// }

// console.log(arr);

// Задача 5
// const numbers = [1, 1, 1];

// numbers.push(2, 2, 2);
// console.log(numbers);

// Задача 6
// const numders = [9, 8, 7, 'a', 6, 5];

// numbers = numders.sort();
// numbers = numbers.pop();
// console.log(numders);

// Задача 7
// const arr = [9, 8, 7, 6, 5];
// let number = prompt('Введите число от 1 до 10');

// if (arr.includes(parseInt(number))) {
//   console.log("Число находится в массиве");
// } else {
//   console.log("Число отсутствует в массиве");
// }

// Задача 8
// let word = 'abcdef';

// word = word.split("").reverse().join("");
// console.log(word);

// Задача 9
// let mass = [[1, 2, 3],
//             [4, 5, 6]
//         ];

// let result = [].concat(mass[0],mass[1]);
// console.log(result);

// Задача 10
// let arr = [5, 7, 3, 8, 1];
// console.log(arr);
// for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] += arr[i + 1];
//   }

// Задача 11
// const arr = [4, 3, 6, 9, 5];

// let result = arr.map(item => (item ** 2));
// console.log(result);

// Задача 12
// const str = ['слово', 'солнце', 'лор', 'котопес'];

// const getLength = source => source.map(str => str.length);
// console.log(getLength(['слово', 'солнце', 'лор', 'котопес']));

// Задача 13
function filterPositive(array) {
    return array.filter (array => array < 0);
  }
  
  console.log(filterPositive([-1, 0, 5, -10, 56])); // => [-1, -10]
  console.log(filterPositive([-25, 25, 0, -1000, -2])); // => [-25, -1000, -2]