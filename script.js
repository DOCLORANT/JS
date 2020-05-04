"use strict";

// appData - данные приложения
// budget - бюджет
// timeData -  данные времени
// expenses - расходы
// optionalExpenses - дополнительные расходы
// income - доход
// savings - экономия
// chooseExpenses - выбрать расходы
// detectDayBudget - определить дневной бюджет
// detectLevel - определить уровень
// checkSavings - проверить сбережения
// chooseOptExpenses - выбрать опцию расходов
// chooseIncome - выбрать доход

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
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
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
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
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let optExp = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = optExp;
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

        if (typeof (items) != "string" || items == "" || typeof (items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }

        appData.income.forEach(function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i + 1) + " - " + itemmassive);
        });
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}