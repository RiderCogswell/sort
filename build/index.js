"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const CharactersCollection_1 = require("./CharactersCollection");
// const numbers = new NumbersCollection([10, 3, -5, 0])
// const sorter = new Sorter(numbers)
// sorter.sort();
// console.log(numbers.data);
const charCollect = new CharactersCollection_1.CharactersCollection('Xdjfuf');
const sorter = new Sorter_1.Sorter(charCollect);
sorter.sort();
console.log(charCollect.data);
