// Задание 1
// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
//  ];

//  console.log(people.sort((a, b) => a.age - b.age));

//Задание 2
function isPositive(num) {
    return num > 0;
}
function isMale(people) {
    return people.gender === 'male';
}
function filter(arr, ruleFunction) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (ruleFunction(item)) {
        result.push(item);
      }
    }
    return result;
}
    
console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
const people = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];
    
console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]