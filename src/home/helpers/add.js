// Занятие с преподователем

// type = 'module';

// type="module" - режим строгого режима и имеет атрбут defer для фонового режима

// Импорт, экспорт

// Именнованный экспорт

// Можно экспортировать каждую функцию, неудобно, когда много

// export function add(a, b) {
//   return a + b;
// }

// export function summ(a, b) {
//   return a * b;
// }

// Второй второй вариант указать, что экспортировать

// Функция имеет доступ до всех своих локальных параметров

// const value = 15;

// function add(a, b) {
//   return a + b + value;
// }

// function summ(a, b) {
//   return a * b;
// }

// export { add, summ, value };

// Приватная функция, не для переиспользования

// /** - создание гугл доку перед функцией, сразу затягивает параметры функции
/**
 *
 * @param {*} value
 * @privat
 */
// function _privat(value) {
//   console.log(value);
// }

// function add(a, b) {
//   const result = a + b + value;
//   _privat(result);
//   return result;
// }

// Дефолтный экспорт

// function add(a, b) {
//   return a + b;
// }

// export default add;

// Экспорт всего namespace import

// const value = 15;

// function add(a, b) {
//   return a + b + value;
// }

// function summ(a, b) {
//   return a * b;
// }

// export { add, summ, value };

// Экспорт функций с одним именем с разных файлов

// function summ(a, b) {
//   console.log('add');
//   return a * b;
// }

// export { summ };

// // Переменные обновлять только через const или let, во время минификации сборки после отправки на git все необъявленные переменные удаляются

// let count = 0;
// for (let i = 0; i < 10; i += 1) {
//   count += 1;
//   console.log(count);
// }

// const test = 'Hello world';
// console.log(test);

// console.log('Hello');

// Занятие с преподователем

// При импорте мы деструктуризируем свойства из импортируемого объекта

// import { add, sum, value } from './home/helpers/add';

// console.log(add(5, 12));
// console.log(sum(5, 12));
// console.log(value);

// Третий способ - namespace import.
// Следующий синтаксис импортирует все экспорты модуля как объект с указанным именем.

// import * as myModule from './home/helpers/add';
// console.log(myModule);
// console.log(myModule.add);
// console.log(myModule.value);
// console.log(myModule.sum);
// console.log(myModule.add(2, 5));
// console.log(myModule.sum(15, 20));

// Дефолтный экспорт
// Экспортируется одна сущность
// import add from './home/helpers/add';
