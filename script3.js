//Задание 1
//  for (let i = 0;  i < 2; i++) {
//     console.log('Привет');
//  }

//Задание 2
// let i = 1;

// while (i <= 5) {
//     console.log(i);
//     i++;
// }

//Задание 3
// let i = 7;

// while (i <= 22) {
//     console.log(i);
//     i++;
// }

//Задание 4
let obj = {
    "Коля": 200,
    "Вася": 300,
    "Петя": 400
}

for (let key in obj) {
	if (obj[key]) {
        let salary = obj[key];
		console.log(`${key} - зарплата ${salary} долларов`);
    }
}