/* Задание 1 
Напишите функцию, которая принимает в качестве аргумента объект 
и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение.*/

console.log('----- Задание 1 -----');

const car = {
  type: 'vehicle',
  color: 'black',
};

const porsche = Object.create(car);
porsche.color = 'blue';
porsche.model = '911 GT3';
porsche['model year'] = 2022;

function showOwnObjectProperties(object) {
  for (let property in object) {
    if (object.hasOwnProperty(property)) {
      console.log(`Ключ: ${property}, значение: ${object[property]}`);
    }
  }
}

showOwnObjectProperties(porsche);

console.log('---------------------');
