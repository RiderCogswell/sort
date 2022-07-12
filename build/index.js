"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("./LinkedList");
// const numbers = new NumbersCollection([10, 3, -5, 0])
// numbers.sort();
// console.log(numbers.data);
// const charCollect = new CharactersCollection('Xdjfuf');
// charCollect.sort()
// console.log(charCollect.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(50);
linkedList.add(30);
linkedList.add(-80);
linkedList.sort();
linkedList.print();
