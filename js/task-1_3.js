"use strict";
const enterAdminPassword = prompt("Введите пароль");
const ADMIN_PASSWORD = "jqueryismyjam";
let message;
if (enterAdminPassword === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else if (enterAdminPassword === null) {
  message = "Отменено пользователем";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);
