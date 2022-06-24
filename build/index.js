"use strict";
class Sorter {
    // collection: number[];
    // constructor(collection: number[]) {
    //   this.collection = collection;
    // } 
    // is the same as below because of public
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1; j++) {
                if (this.collection[j] > this.collection[i]) {
                    const leftHand = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHand;
                }
            }
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
