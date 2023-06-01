// Игра 1
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


  // Игра 2
  function playGameFruits() {
  const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  rundom = fruits.sort(() => Math.random() - 0.5);
  alert(`Запомните! ${rundom}`);

  let firstQuestion = prompt('Чему равнялся первый элемент массива?');
  let secondQuestion = prompt('Чему равнялся последний элемент массива?');

  if (firstQuestion.toLowerCase() === fruits[0].toLowerCase() && secondQuestion.toLowerCase() === fruits[6].toLowerCase()) {
    alert ('Поздравляем, у вас отличная память! Вы чемпион чемпионов!');
  } else if (firstQuestion.toLowerCase() === fruits[0].toLowerCase() && secondQuestion.toLowerCase() !== fruits[6].toLowerCase() || firstQuestion.toLowerCase() !== fruits[0].toLowerCase() && secondQuestion.toLowerCase() === fruits[6].toLowerCase()) {
    alert('Вы были так близки!');
  } else {
    alert('К сожалению вы ответили не верно :(');
  }
}