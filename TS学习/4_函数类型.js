"use strict";
let mySearch;
mySearch = (source, subString) => source.search(subString) !== -1;
//下面必须用箭头
let mySum = function (x, y) {
    return x + y;
};
function push(array, ...items) {
    items.forEach(function (item) {
        array.push(item);
    });
    return array;
}
function reverse1(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
let hello;
