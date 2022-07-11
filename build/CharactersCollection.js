"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    ;
    compare(leftIdx, rightIdx) {
        return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
    }
    ;
    swap(leftIdx, rightIdx) {
        const chars = this.data.split('');
        const leftHand = chars[leftIdx];
        chars[leftIdx] = chars[rightIdx];
        chars[rightIdx] = leftHand;
        this.data = chars.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
