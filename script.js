"use strict"

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let qu1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
        qu2 = prompt("Во сколько обойдется?", "");

    if (typeof (qu1) === 'string' && typeof (qu1) != null && qu1 != '' && qu1.length < 50 && (typeof (qu2)) != null && qu2 != '') {
        appData.expenses[qu1] = qu2;
        console.log("На все вопросы получены правильные ответы");
    } else {
        console.log("Введён неправильный ответ");
        alert("Введите коректные символы");
        i--;
    }
};

// Цикл While

// let i = 0;
// while (i < 2) {
//     let qu1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         qu2 = prompt("Во сколько обойдется?", "");

//     if (typeof (qu1) === 'string' && typeof (qu1) != null && qu1 != '' && qu1.length < 50 && (typeof (qu2)) != null && qu2 != '') {
//         appData.expenses[qu1] = qu2;
//         console.log("На все вопросы получены правильные ответы");
//     } else {
//         console.log("Введён неправильный ответ");
//         alert("Введите коректные символы");
//         i--;
//     }
//     i++;
// };

// Цикл do while
// let i = 0;
// do {
//     let qu1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         qu2 = prompt("Во сколько обойдется?", "");

//     if (typeof (qu1) === 'string' && typeof (qu1) != null && qu1 != '' && qu1.length < 50 && (typeof (qu2)) != null && qu2 != '') {
//         appData.expenses[qu1] = qu2;
//         console.log("На все вопросы получены правильные ответы");
//     } else {
//         console.log("Введён неправильный ответ");
//         alert("Введите коректные символы");
//         i--;
//     }
//     i++;
// } while (i < 2);

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay <= 500) {
    console.log("У вас минимальный уровень достатка");
} else if (appData.moneyPerDay < 1000 && appData.moneyPerDay > 500) {
    console.log("У вас средний уровень достатка");
} else if (appData.moneyPerDay >= 1000 && appData.moneyPerDay <= 2000) {
    console.log("У вас хороший уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("У вас высокий уровень достатка");
} else {
    console.log("что-то пошло не так");
}