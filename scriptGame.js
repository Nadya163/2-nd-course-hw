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


// let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

// let res = arr.filter(function(elem) {
// 	if (elem <= 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// console.log(res);
