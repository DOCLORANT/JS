"use strict"

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let qu1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    qu2 = prompt("Во сколько обойдется?", ""),
    qu3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    qu4 = prompt("Во сколько обойдется?", "");

appData.expenses[qu1] = qu2;
appData.expenses[qu3] = qu4;

alert(appData.budget / 30);