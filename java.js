// Task 1
// Создайте переменную str и присвойте ей строковое значение.
// Ваша программа должна каждую четную по последовательности букву
// перезаписать верхним регистром. Результат нужно вывести в консоль.
// Подсказка: нужно использовать метод split().

// let str = "javascript";
// let arr = str.split("");
// let newArr = arr.map((el, idx) => {
//   if (idx % 2 === 0) {
//     return el.toUpperCase();
//   } else {
//     return el;
//   }
// });
// console.log(newArr.join(""));

// Task 2
// Eсть переменная
// которая принимает строку в качестве аргумента и возвращает
// количество гласных, которые содержатся в строке.
// Гласными являются [а], [о], [и], [ы], [у] и [э], [й], [е], [я], [ю], [ё]
// К примеру:
// 'достопримечательность'// --> 7
// 'субстанционализирующийся' // --> 11

// function checkTask(str) {
// let arr = str.split("");
//   let sum = 0;
//   for (let i of str) {
//     if (
//       i == "a" ||
//       i == "о" ||
//       i == "и" ||
//       i == "ы" ||
//       i == "у" ||
//       i == "э" ||
//       i == "й" ||
//       i == "е" ||
//       i == "я" ||
//       i == "ю" ||
//       i == "ё"
//     ) {
//       sum += i.length;
//     }
//   }
//   console.log(sum);
// }
// checkTask("достопримечательность");

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
//   let newArr = arr.reduce((acc, el) => +acc + +el);
//   console.log(newArr);
// }
// checkTask(456);

// let arr = [1, 2, 3, 4];

// let newArr = arr.filte

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     if (args.length === 0) {
//       return undefined;
//     }
//     args.sort((a, b) => a - b);
//     return args[0];
//   }
// }

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return args.sort((a,b)=>a-b)[0];
//     }
//   }

// function arrayPlusArray(arr1, arr2) {
//   const sum1 = arr1.reduce((acc, el) => acc + el, 0);
//   const sum2 = arr2.reduce((acc, el) => acc + el, 0);
//   let result = sum1 + sum2;
// }

// arrayPlusArray([1, 2, 3], [4, 5, 6]);

// let arr = [12, 23, 45, 23, 67, 89, 45];
// let arr2 = [1, 2, 3];
// let newArr = arr.reduce((acc, el) => acc + el);
// let newArr2 = arr2.reduce((acc, el) => acc + el);
// let result = newArr + newArr2;
// console.log(result);

// let arr = [12, 23, 45, 23, 67, 89, 45];
// let sum = Math.max(...arr);
// console.log(arr.length);

// function filter_list(l) {
//   let result = [];

//   for (let i = 0; i < l.length; i++) {
//     if (typeof l[i] !== "string") {
//       result.push(l[i]);
//     }
//   }

//   return result;

// }

// filter_list([1, 2, "a", "b"]);

// function accum(s) {
//   const result = [];
//   for (let i = 0; i < s.length; i++) {
//     result.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i));
//   }
//   return result.join("-");
// }

// // Example usage:
// const inputStr = "abcd";
// const outputStr = accum(inputStr);
// console.log(outputStr);

// let str = "abcd";
// let res = [];
// for (let i = 0; i < str.length; i++) {
//   res.push(str[i].toUpperCase() + str[i].toLowerCase().repeat(i));
// }
// console.log(res.join("-"));

// let str = "bilalbek";
// if (str.slice(-3) === "bek") {
//   console.log(str.slice(0, 5) + "gul");
// } else {
//   console.log(str);
// }

// let str = "bilalbek";
// let arr = [];
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// TODO 1
// Создайте функцию, которая принимает число и возвращает
// его противоположное значение. Пример: input: 20, output: -20.

// function checkTask(num) {}
// checkTask(20);
// TODO 2
// Напишите функцию checkTask(), которая принимает целое
// число и возвращает сумму всех его цифр.
// Например, для числа 456, функция должна вернуть:
// 15
// так как 4 + 5 + 6 = 15

// function checkTask(num) {
//   return num
//     .toString()
//     .split("")
//     .reduce((acc, el) => +acc + +el);
// }
// console.log(checkTask(456));

// TODO 3
// Напишите стрелочную функцию, которая принимает в качестве
// параметра километры и возвращает метры. Функцию с начала
// напишите в несколько строк (тело функции в фигурных скобках.
// Затем, функцию сократите до одной строки.

// const checkTask = (km, m) => {
//   return ${m * km}m;
// };
// console.log(checkTask(4, 1000));

// TODO 4
// Напишите функцию, которая принимает строку из нескольких
// слов и возвращает самое длинное слово.
// Например: "js css html"
// Ответ:"html"
// function newArr(params) {
//   return params
//     .split(" ")
//     .reduce((acc, el) => (acc.length > el.length ? acc : el));
//   // .reduce((acc, el) => (acc.length > el.length ? acc : el));
// }
// console.log(newArr("js css html bilya"));

// TODO 5
// Напишите функцию, которая принимает строку, и возвразает
// ее в перевернутом виде. Например: "JavaScript-11".

// TODO 6
//  Запишите функцию квадратной суммы, чтобы она возводила в квадрат
// каждое переданное ей число, а затем суммировала результаты.
// Например, для [1, 2, 2] он должен вернуть 9, потому что 1^2 + 2^2 + 2^2 = 9.

// TODO 7
// Создайте функцию avg() , которая будет находить среднее значение
// по всем своим аргументам.

// TODO 8
// Напишите функцию pow(x,n) которая возвращает x в степени n.
// Другими словами умножьте x на себя n раз.

// TODO 9
// Напишите программу на JavaScript для вычисления суммы двух заданных
// целых чисел. Если два значения одинаковы, то возвращается тройная их сумма.
// function count(num1, num2) {
//   if (num1 === num2) return (num1 + num2) * 3;
//   return num1 + num2;
// }
// console.log(count(2, 1));

// TODO 11
// Дан массив следущего вида: [
// {title: 'Post 1', author: 'User 1', likes: 549},
// {title: 'Post 2', author: 'User 1', likes: 67},
// {title: 'Post 3', author: 'User 3', likes: 345},
// {title: 'Post 4', author: 'User 6', likes: 1023},
// {title: 'Post 5', author: 'User 2', likes: 150},
// ],
// задача: вернуть массив, в котором будут только названия 3х самых популярных
// постов(ориентироваться на лайки)(использовать метод sort())

// TODO 12
// Дан массив [true, 7, 2, 'Hello']. Найдите сумму чисел в массиве
// (только элементов с числовым типом данных).
// let arr = [true, 7, 2, 'Hello'];
// Good luck.

// let arr = [true, 7, 2, "Hello"];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "number") {
//     sum += arr[i];
//   }
// }

// console.log(sum);

// function sum(numbers) {
//   numbers = numbers.sort((a, b) => a - b);
//   return numbers[0] + numbers[1];
// }
// console.log(sum([19, 5, 42, 2, 77]));

// function Task(arr) {
//   return arr.reduce((acc, el, idx) => {
//     if (arr.indexOf(el) == idx) {
//       return acc.concat(el);
//     } else {
//       return acc;
//     }
//   }, []);
// }
// console.log(Task([55, 42, 5, 4, 32, 43, 25, 5, 4, 25, 43, 6, 4, 6, 14, 3]));

// function arr(a, b) {
//   let arr1 = a.reduce((acc, el) => acc + el, 0);
//   let arr2 = b.reduce((acc, el) => acc + el, 0);
//   let result = arr1 + arr2;
//   console.log(result);
// }
// arr([1, 3, 5], [2, 4, 6, 5]);

// function arrayPlusArray(arr1, arr2) {
//   const sum1 = arr1.reduce((acc, el) => acc + el, 0);
//   const sum2 = arr2.reduce((acc, el) => acc + el, 0);
//   let result = sum1 + sum2;
// }

// Завершите решение так, чтобы функция разбивала верблюжий регистр, используя пробел между словами.

// Пример
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
// let str = "camelCasingNFNF";
// console.log(
//   str
//     .split("")
//     .map((el) => {
//       if (el === el.toLowerCase()) {
//         return el;
//       } else {
//         return " " + el;
//       }
//     })
//     .join("")
// );

// function reverseWords(str) {
//   for (let i = 0; i < str.length; i++) {
//     str.splite();
//   }
// }
// console.log(reverseWords("This is an example!"));

// Во всех задачах используйте только методы map, reduce.
// 1. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму этих чисел.
// let arr = [5, 15, 315, 2, 13, 20, 9];
// let sum = 0;
// let newArr = arr.map((el, idx) => {
//   if (el % 2 === 0) {
//     return (sum += el);
//   }
// });
// console.log(sum);
// 2. Вам дан массив с числами [5,12,314,2,13,20,9]. Найдите сумму всех четных чисел.
// 3. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму чисел, которые больше 10.
// let arr = [5, 12, 314, 2, 13, 20, 9];
// let sum = 0;
// let newArr = arr.map((el, idx) => {
//   if (el >= 10) {
//     return (sum += el);
//   }
//   return;
// });
// console.log(sum);
// 4. Вам дан массив с числами [3,13,54,15,335, 39]. Найдите разность чисел, которые больше 10.
// let arr = [3,13,54,15,335, 39]
// let newArr = arr
// 5. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Сложите все строки и выведите длину результата.
// 6. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите все строки в верхнем регистре, используя map.
// let arr = ["Аскар", "Баяман", "Калмамат"];
// let newArr = arr.map((el) => {
//   return el.toUpperCase();
// });
// console.log(newArr);
// 7. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите все вторые строки в верхнем регистре.
// let arr = ["Аскар", "Баяман", "Калмамат"];
// let newArr = arr.map((el, idx) => {
//   return el.slice(0, 2).toUpperCase() + el.slice(2);
// });
// console.log(newArr);
// 8. Напишите функцию, которая принимает str, target. И возвращает true или false, если targer присутствует в str. Использовать .reduce для этого.
// Пример: isPresent ('abcd', 'b') => true
// isPresent ('efghi', 'a') // => false
// 9. Вам дан массив с строками ['асКар', 'бЯяман', 'калМмамат']. Используйте заглавные
// буквы в каждом массиве имен.
// Пример: (["john", "JACOB", "jinGleHeimer", "schmidt"])), => ["John", "Jacob", "Jingleheimer", "Schmidt"]
// let arr = ["асКар", "бЯяман", "калМмамат"];
// let newArr = arr.map((el) => {
//   return el[0].toUpperCase() + el.slice(1).toLowerCase();
// });
// console.log(newArr);
// 10. Вам дан массив со строками ['Баяман', 'Калмамат']. Поменяйте местами первые буквы строк.

// 11. Вам дан массив [true, '1234', 325]. Напишите функцию,
// которая проверяет, все ли элементы массива относятся к одному типу данных.
// 12. Вам дана строка 'тестинг'. Ваша задача - вернуть средний символ слова.
// Если длина слова нечетная, верните средний символ. Если длина слова четная, вернуть 2 средних символа.
// 13. Вам дан массив с числами [5, -3, 13, -7, 45]. Верните сумму всех положительных чисел.
// 14. Вам дан массив с числами [5, -54, 13, -7, 45, -15, -34]. Верните сумму всех отрицательных чисел,
// которые больше 10.
// 15. Вам дан массив с числами [1, 65, 13 , 30, 100] - все числа - доллары. Вам нужно обменять эти доллары по курсу сома и вывести все числа в сомах.
// 16. Вам дан массив со строками ['Lorem ipsum dor sit omet devour il ela sit']. Выведите каждый нечетный индекс в строке в верхнем регистре.
// 17. Вам дан массив с строками ['Оскар', 'Баяман', 'Калмамат']. Добавьте к каждой строке нумерацию.
// 18. Вам дан массив с числами [2,456,6,8]. Напишите функцию , которая вставляет дефис (-) между каждыми двумя четными числами. Например, если вы принимаете 025468, на выходе должно быть 0-254-6-8.
// 20. Вам дан массив с числами [5,15,315,2,13,20,9]. Посчитайте среднее арифметическое чисел в массиве.

// 724785141567815621321 ===> 1010101010101100101010
// function Task(num) {
//   let str = num.split("").map((el) => {
//     if (el > 5) {
//       return 1;
//     }
//     return 0;
//   });
//   console.log(str.join(""));
// }
// console.log(Task("3241961258752171527"));

// "URZHIGI" ===> "NURZHIGI"
// let str = "URZHIGI";
// let sum = "N" + str + "T";
// console.log(sum);

// function task(str) {
//   let arr = str.filter((el) => {
//     return el.includes("a");
//   });
//   console.log(arr);
// }
// console.log(task(["Nurzhigit", "Bilal", "Emirlan", "Yryskeldi"]));

// ".".toLowerCase;

// function Task(a) {
//   let arr = a.split("").map((el, idx) => {
//     if (idx % 2 !== 0) {
//       return el.toUpperCase();
//     }
//     return el.toLowerCase();
//   });
//   console.log(arr.join(""));
// }
// console.log(Task("Выведите все строки в верхнем регистре используя"));

// let arr = [12, 35, 78, 3, 90, 42];
// for (let i = 0; i < arr.length; i++) {}

// String.prototype.isUpperCase = function () {
//   let str = this.split("");
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[i].toUpperCase()) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log("ПАЧПЧПЧП".isUpperCase());

// function mergeArrays(a, b) {
//   let arr = a.concat(b);
//   let newArr = arr.sort((a, b) => a - b);
// }
// console.log(mergeArrays([1, 3, 5], [2, 4, 6]));
