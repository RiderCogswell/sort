"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const LinkedList_1 = require("./LinkedList");
// const numbers = new NumbersCollection([10, 3, -5, 0])
// const sorter = new Sorter(numbers)
// sorter.sort();
// console.log(numbers.data);
// const charCollect = new CharactersCollection('Xdjfuf');
// const sorter = new Sorter(charCollect)
// sorter.sort()
// console.log(charCollect.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(50);
linkedList.add(30);
linkedList.add(-80);
const sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
