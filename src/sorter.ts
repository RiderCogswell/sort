// we do not need this because we are using an abstract to class to type annotate
// interface Sortable {
//   length: number;
//   compare(leftIdx: number, rightIdx: number): boolean;
//   swap(leftIdx: number, rightIdx: number): void;
// }

export abstract class Sorter {
  abstract compare(leftIdx: number, rightIdx: number): boolean;
  abstract swap(leftIdx: number, rightIdx: number): void;
  // since length is a getter, instead of a traditional
  // function, we can simply right it with this syntax
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        // typeguard - only runs if it satisfies this
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1)
        }
      }
    }
  }
}