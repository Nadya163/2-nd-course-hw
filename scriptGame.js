function playGame() {
let month = Number(prompt('Введите номер месяца'));

    if (month === 12 || (month === 1 && month === 2)) {
        console.log('Этот месяц относится к зиме');
    } else  if (month >= 3 && month <= 5) {
      console.log('Этот месяц относится к весна');
    } else  if (month >= 6 && month <= 8) {
      console.log('Этот месяц относится к лето');
    } else  if (month >= 9 && month <= 11) {
      console.log('Этот месяц относится к осень'); 
     } else {
      console.log('Таких данных нет');
    }
  };

// // Задача 10
// let arr = [5, 7, 3, 8, 1];
// console.log(arr);
// for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] += arr[i + 1];
//   }

// const arr = [1, 2, 3, 4, 5];

// let result = arr.map(item => (item ** 2));
// console.log(result);

// Вариант 2
// for (const element of arr) {
//   // Code to be executed for each element
//   console.log(element** 2);
// }

// let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

// let res = arr.filter(function(elem) {
// 	if (elem <= 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// console.log(res);


// const getLength = source => source.map(str => str.length);

// console.log(getLength(['one', 'sound', 'underground']));