"use strict";
// we do not need this because we are using an abstract to class to type annotate
// interface Sortable {
//   length: number;
//   compare(leftIdx: number, rightIdx: number): boolean;
//   swap(leftIdx: number, rightIdx: number): void;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1; j++) {
                // typeguard - only runs if it satisfies this
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
