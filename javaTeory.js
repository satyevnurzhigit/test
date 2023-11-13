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
