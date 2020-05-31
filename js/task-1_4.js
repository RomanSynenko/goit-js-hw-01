"use strict";
const credits = 23500;
const pricePerDroid = 3000;
const enterQuantilyDroid = prompt("Сколько дроидов вы купите ?");
let message;
if (enterQuantilyDroid === null) {
  message = "Отменено пользователем";
} else {
  const totalPrice = enterQuantilyDroid * pricePerDroid;
  const creditsbalance = credits - totalPrice;
  if (totalPrice > credits) {
    message = "Недостаточно средств на счету!";
  } else if (
    isNaN(enterQuantilyDroid) ||
    enterQuantilyDroid <= 0 ||
    enterQuantilyDroid % 1 != 0
  ) {
    message = "Введите натуральное число";
  } else {
    message = `Вы купили ${enterQuantilyDroid} дроидов, на счету осталось ${creditsbalance} кредитов.`;
  }
}
alert(message);
