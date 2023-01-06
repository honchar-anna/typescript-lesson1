function declaration(array) {
    var max = array[0];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var funMaxElement = array_1[_i];
        if (funMaxElement > max)
            max = funMaxElement;
    }
    return max;
}
;
var funMaxReturn = declaration([23, 3254, 45345, 22, 33434]);
console.log('завдання 3 максимальне число:  ' + funMaxReturn);
