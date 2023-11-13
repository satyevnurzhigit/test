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

// function sum(numbers) {
//   numbers = numbers.sort((a, b) => a - b);
//   return numbers[0] + numbers[1];
// }
// console.log(sum([19, 5, 42, 2, 77]));

// Дан массив с элементами [2, 3, 4, 5, 17, 8, 9, 1]. С помощью цикла for найдите
// произведение элементов этого массива, также обработать вариант того, что
// в массиве может быть 0, если он есть нужно остановить цикл и просто
// отобразить 0, так как любое число умноженное на 0 выдаст 0.

// let arr = [2, 3, 4, 5, 17, 1, 8, 9, 1];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     console.log(0);
//     break;
//   }
//   sum += arr[i];
// }
// console.log(sum);

// let arr = "www.codewars.com#about"
// let sum = ""
// for()

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

// "abcd" => "A-Bb-Ccc-Dddd"

// let str = "abcd";
// let res = [];
// for (let i = 0; i < str.length; i++) {
//   res.push(str[i].toUpperCase() + str[i].toLowerCase().repeat(i));
// }
// console.log(res.join("-"));
