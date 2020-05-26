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

// ====================================================
// ==== закоментировал домашку до обновления курса ====
// ====================================================

/*let money, time;

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
} */

// ======================================================
// ==== Начал выполнять домашнюю работу заново ==========
// ==== Практика, ч.1. Начинаем создаватьприложение =====
// ======================================================

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */
// =================================================

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let qu1 = prompt('Один из последних просмотренных фильмов?'),
    qu3 = prompt('На сколько оцените его?'),
    qu2 = prompt('Один из последних просмотренных фильмов?'),
    qu4 = prompt('На сколько оцените его?');

personalMovieDB.movies[qu1] = qu3;
personalMovieDB.movies[qu2] = qu4;

console.log(personalMovieDB);