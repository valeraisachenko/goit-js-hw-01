"use strict";
let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let input = prompt("Введите количество дроидов, которое вы хотите купить");

if (input === null) {
    alert("Отменено пользователем!");
} else {
    let num = Number(input);
    totalPrice = num * pricePerDroid;

    if (totalPrice > credits) {
        alert("Недостаточно средств на счету!");
    } else {
        let rest = credits - totalPrice;
        alert(`Вы купили ${num} дроидов, на счету осталось ${rest} кредитов.`);
    }
}