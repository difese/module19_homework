/* Задание 3
Напишите функцию, которая создает пустой объект, но без прототипа.*/

console.log('----- Задание 3 -----');

function createEmptyObject() {
  return Object.create(null);
}

const object = createEmptyObject();

console.log(object);
console.log(Object.getPrototypeOf(object));

console.log('---------------------');
