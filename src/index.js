// Переменные обновлять только через const или let, во время минификации сборки после отправки на git все необъявленные переменные удаляются

let count = 0;
for (let i = 0; i < 10; i += 1) {
  count += 1;
  console.log(count);
}

const test = 'Hello world';
console.log(test);
