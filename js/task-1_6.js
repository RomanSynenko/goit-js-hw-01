"use strict";

let input;
let total = 0;
let message;

do {
  input = prompt("Введите число");
  let a = Number(input);

  if (isNaN(a)) {
    alert("Было введено не число, попробуйте еще раз");
    input = prompt("Введите число");
    a = Number(input);
  }

  total = total + a;
  console.log(Number(total));
} while (input != null);
message = `Общая сумма чисел равна ${total}`;
alert(message);
