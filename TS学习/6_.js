"use strict";
// import foo = require('../types/foo');
// import * as foo from '../types/foo';
// import { foo } from '../types/foo';
// const foo = require('../types/foo');
// 'bar'.prependHello();
// type Name = string;
// type NameResolver = () => string;
// type NameOrResolver = Name | NameResolver;
// function getName(n: NameResolver): Name {
//     if (typeof n === 'string') {
//         return n;
//     } else {
//         return n();
//     }
// }
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
var directions1 = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
