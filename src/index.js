// Именнованный импорт

// import { add, summ, value } from './home/helpers/add';

// console.log(add(5, 12));

// console.log(summ(5, 12));

// console.log(value);

// Дефолтный экспорт

// При дефолтном экспорте нет привязки к имени,
// имя может быть любым

// import qwerty from './home/helpers/add';

// console.log(qwerty(100, 20));

// Импорт всего namespace import в виде объекта

// import * as ESModule from './home/helpers/add';

// console.log(ESModule);
// console.log(ESModule.add(10, 45));
// console.log(ESModule.summ(15, 25));

// Импорт функций с одним именем с разных файлов

// import { summ } from './home/helpers/add';
// import { summ } from './home/helpers/sum';

// Будет вызвана последняя функция с одинаковым именем
// console.log(summ(2, 2));

// При импорте смена названия во время самого импорта
// import { summ as summAdd } from './home/helpers/add';
// import { summ } from './home/helpers/sum';

// console.log(summAdd(2, 2));
// console.log(summ(2, 3));
