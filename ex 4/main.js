function getSqrt(number) {
    console.log('lox1');
    if (number > 0) {
        console.log("\u041A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u0438\u0439 \u043A\u043E\u0440\u0456\u043D\u044C \u0437 ".concat(number, " = ").concat(Math.sqrt(number)));
    }
    else if (number < 0) {
        console.log('Введіть додатнє число');
    }
    else {
        console.log('Будь ласка, введіть число!');
    }
    console.log('lox3');
}
getSqrt(-3);
