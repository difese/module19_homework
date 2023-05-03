/* Задание 2
Напишите функцию, которая принимает в качестве аргументов 
строку и объект, а затем проверяет, есть ли у переданного 
объекта свойство с данным именем. 
Функция должна возвращать true или false.*/

console.log('----- Задание 2 -----');

const my = 'model year';

const book = {
  title: 'Generation "П"',
  author: 'Виктор Пелевин',
  year: 1999,
};

const car = {
  color: 'red',
  model: '911 GT3 RS',
  'model year': 2023, // = [my] - вычисляемое свойство
};

function check(string, object) {
  // console.log(string in object);
  if (string in object) {
    return true;
  } else {
    return false;
  }
}

// check(my, book);
// check(my, car);

console.log('Проверка "model year" в car: ' + check(my, car));
console.log('Проверка "model year" в book: ' + check(my, book));

console.log('---------------------');

