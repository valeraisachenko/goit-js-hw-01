"use strict";

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;


let input = prompt("количество дроидов которые пользователь хочет купить");

if (input === null) {
    message = 'Отменено пользователем!';
} else if (input === totalPrice) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);