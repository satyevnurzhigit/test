// Task 1
// Создайте переменную str и присвойте ей строковое значение.
// Ваша программа должна каждую четную по последовательности букву
// перезаписать верхним регистром. Результат нужно вывести в консоль.
// Подсказка: нужно использовать метод split().
// let str = "javascript";

// let str = "javascript";
// let arr = str.split("").map((el, idx) => {
//   if (idx % 2 === 0) {
//     return el.toUpperCase();
//   } else {
//     return el;
//   }
// });
// console.log(arr.join(""));

// Task 2
// Eсть переменная
// которая принимает строку в качестве аргумента и возвращает
// количество гласных, которые содержатся в строке.
// Гласными являются [а], [о], [и], [ы], [у] и [э], [й], [е], [я], [ю], [ё]
// К примеру:
// 'достопримечательность'// --> 7
// 'субстанционализирующийся' // --> 11

// let str = "субстанционализирующийся";
// let arr = str.split("");
// let newArr = arr.filter((el) => {
//   if (
//     el === "a" ||
//     el === "о" ||
//     el === "и" ||
//     el === "ы" ||
//     el === "у" ||
//     el === "э" ||
//     el === "е" ||
//     el === "я" ||
//     el === "ю" ||
//     el === "ё"
//   ) {
//     return el;
//   }
// });

// console.log(newArr.length);

// Task 3
// Выведите в консоль столбец четных чисел в промежутке от 0 до 100.

// for (let i = 0; i < 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Task 4
// Дана строка: 'Hello, world!', необходимо вывести в консоль
// каждый символ по-отдельности(игнорировать спец. и пробельные
// символы(то есть, ' ', '!', ',' выводить не нужно))

// let str = "Hello, world!";
// let arr = str.split("").filter((el) => {
//   if (el !== " " && el !== "!" && el !== ",") {
//     return el;
//   }
// });
// console.log(arr.join(""));

// Task 5
// let arrNums = [12, 21, 27, 31, 45, 50 ];
// С помощью цикла foreach и оператора if выведите в console элементы
// массива, которые больше 20-ти, но меньше 30-ти.

// let arrNums = [12, 21, 27, 31, 45, 50];
// for (let i of arrNums) {
//   if (i > 20 || i < 30) {
//     return el;
//   }
//   console.log(i);
// }

// Task 5
// Создайте функцию которая принимает строку, удаляет все гласные буквы из строки,
// а согласные буквы в свою очередь переводит в заглавные и возвращает новую строку.
// Например: ввод - 'hello', функция должна возвратить 'HLL'

// let str = "hello";
// let arr = str
//   .toLowerCase()
//   .split("")
//   .filter((el) => {
//     if (el === "e" && el === "o") {
//       return el;
//     }
//   });

// console.log(arr);

// Task 6
// Создайте переменную arr и присвойте массив со строками.
// Напишите код, который переписывает первые буквы строк
// массива верхним регистром. Вы должны вывести новый массив в
// переменной newArr в console.log()

// Пример ввода:
// let arr = ["programming", "code", "javascript", "react"];

// let newArr = arr.map((el, idx) => {
//   return el[0].toUpperCase() + el.slice(1).toLocaleLowerCase();
// });
// console.log(newarr);

// Task 7
// Дана строка: 'Hello, I'm Jack. I'm 25 years old and I Frontend developer!',
// вывести в консоль символы у которых четный индекс

// let str = "Hello, I'm Jack. I'm 25 years old and I Frontend developer!";
// let res = [];

// for (let i in str) {
//   if (i % 2 === 0) {
//     res.push(str[i]);
//   }
// }

// console.log(res.join(""));

// Напишите стрелочную функцию, которая принимает в
// качестве параметра километры и возвращает метры. Функцию
// с начала напишите в несколько строк (тело функции в фигурных
// скобках. Затем, функцию сократите до одной строки.

// Напишите функцию, которая принимает два аргумента и возвращает
//  все числа, которые делятся на данный делитель. Первый
//  аргумент - это массив чисел, а второй - делитель.
// Пример: divisible([1, 2, 3, 4, 5, 6], 2)
// Вывод: [2, 4, 6]

// function divisible(arr, num) {
//   let res = [];
//   for (let i of arr) {
//     if (i % num === 0) {
//       res.push(i);
//     }
//   }
//   console.log(res);
// }
// divisible([1, 2, 3, 4, 5, 6], 2);

// Напишите функцию для преобразования имени в инициалы.
// Аргумент в видес строки  строго состоит из двух слов с
// одним пробелом между ними. На выходе должны быть две
// заглавные буквы с точкой, разделяющей их. Это должно
// выглядеть так:
// Sam Harris => S.H
// patrick feeney => P.F

// let str = "patrick feeney";
// let arr = str.split(" ");
// let newArr = arr.map((el) => {
//   return el[0].toUpperCase();
// });
// console.log(newArr.join("."));

// Напишите функцию checkTask(), которая принимает целое число и возвращает сумму всех его цифр.
// Например, для числа 456, функция должна вернуть:
// 15
// так как 4 + 5 + 6 = 15

// function checkTask(num) {
//   let sum = 0;
//   let str = num.toString();
//   let arr = str.split("");
//   let newArr = console.log(arr);
// }
// checkTask(456);

//! Лекция: Переменные и типы данных, операторы, комментарии

//? ● Что такое переменные? Для чего они нужны?

//? ● Через какие ключевые слова можно объявлять переменные в JS?

//? let
//? const
//? var

//? ● Что такое const и чем он отличается от let?

// const str = "Azamat";
// let num = 20;

// console.log(num);
// num = 10;

// str = "Sezim";
// console.log(str);

//? ● Можно ли повторно объявлять переменные?

// let str = ""
// let str = ""

//? ● Как не следует объявлять переменные в JS?

// let motionWeb = ""

//? ● Сколько типов данных есть в JS?

//? ● Что такое typeof?

//? ● Какой тип выведет следующий код console.log(typeof '23')?

// console.log(typeof "23");

//? ● Какой оператор используется для присваивания в JS?

// =

// let name = "Azamat"

//? ● Какой оператор используется для сравнивания?

// >
// <
// ==
// ===

// console.log("1" === 1);

//? ● Для чего нужны операторы “+”, “-”, “%”, “/”?

// let num = 10

// if(num % 2 === 0)

//? ● Каким сочетанием горячих клавиш можно закомментировать код?

//? ● Какие виды комментариев вы знаете?

//? ● Чем отличается // от /* */?

//gfhfhgf
// jhlkjk
/*
jbjll
jhljk
lkj;
*/

//? ● Что такое alert, prompt, confirm?

// alert("vhjvhk");

// let a = prompt("age");
// console.log(a);
// console.log(window);

// let c = confirm();
// console.log(c);

//? ● Что вернет confirm если нажать отмена?
// ● Что вернет prompt если нажать отмена или esc?

//! Лекция: Условные операторы и логические операторы

//?  Что такое условный оператор?

//?  Какие формы условных операторов бывают?

//?  Каков синтаксис условного оператора if?

// let age = 20;
// if (age === "20") {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// if(false){
//     console.log("YES");
// }else{
//     console.log("NO");
// }

//?  Для чего используется оператор if...else?

// else if()

//?  В каком случае используем тернарный оператор?

//  Для чего предназначен оператор switch?
//  Для чего используется ключевое слово default в switch?

//?  Зачем нам нужны логические операторы?

//? && - и

//? || - или

//? ! - не

//  Какие типы логических операторов бывают?
//  Как работает оператор ‘&&’ (и)?
//  Как работает оператор ‘||’ (или)?
//  Как работает оператор ‘!’ (не)?

// let num = 10;

// if (num > 20 || num < 15) {
//   console.log("Yes");
// } else {
//   console.log("NO");
// }

// console.log(!false);

// let num = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let i of num) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   } else {
//     console.log(i, "else");
//   }
// }

//! Лекция: Array, Loop, array methods

// Массивы
//  Что такое массив?

// let arr = [null, undefined, {}, 12, "hgkjh", true, false];

// console.log(arr);

// let num = 123;

// console.log(num.length);

//?  Что такое индекс?

//?  Что такое length?

//  Как вытащить значение из массива?

// let arr = [0, 1, 2, 3];

// console.log(arr[2]);

// Методы массива
//  Как работают .pop(), .push(), .shift(), .unshift() ?

// let arr = [1, 2, 3];

// let newEl = arr.pop();

// console.log(newEl);

//  Как работает .concat() ?

// let a = 1;

// let b = 2;

// let res = a.concat(b);

// console.log(res);

//  Как работает .indexOf() ?

// let arr = [1, 2, 3, 4, 5];

// console.log(arr.indexOf(3));

//  Как работает .reverse() ?

// let arr = ["Hello World", "GFJGHFHJGF"];

// arr.reverse();

// console.log(arr);

//  Как работает .slice() ?

// let str = "hghjjhg";

// console.log(str.slice(0));

//?  Как работает .splice() ? В чём отличие от .slice() ?

//! start delCount items

// let arr = [1, 2, 3, 4, 5];

// arr.slice(3);

// console.log(arr);

// arr.splice(1, 0, 0, 0);

// console.log(arr);

//!  Как работает .join() ?

// let arr = [1, 2, 3, 4];

// let str = arr.join("$");

// console.log(str);

//?  Как работает .includes() ?

// let str || arr

//?  Как работает .forEach() ?

//?  Как работает .map() ? В чём отличие от forEach() ?

//? index()

//? forEach()

//? index

//  Как работает .filter() ?

//? index, el, array

// let arr = [1, 2, 3, 4];

// let newArr = arr.filte
