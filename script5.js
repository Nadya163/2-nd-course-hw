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
let word = 'abcdef';

word = word.split("").reverse().join("");
console.log(word);