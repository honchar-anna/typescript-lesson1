var ask = prompt('Введіть число');
if (ask % 2 == 0) {
    console.log('завдання 2  ' + "\u0427\u0438\u0441\u043B\u043E ".concat(ask, " \u043F\u0430\u0440\u043D\u0435"));
}
else if (ask % 2 !== 0) {
    console.log('завдання 2  ' + "\u0427\u0438\u0441\u043B\u043E ".concat(ask, " \u043D\u0435\u043F\u0430\u0440\u043D\u0435"));
}
else {
    console.log('завдання 2  ' + 'Число 0');
}
