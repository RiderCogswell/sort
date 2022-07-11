import { NumbersCollection } from "./NumberCollection";

export class Sorter {
  // collection: number[];

  // constructor(collection: number[]) {
  //   this.collection = collection;
  // } 
  // is the same as below because of public
  constructor(public collection: NumbersCollection ) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        // typeguard - only runs if it satisfies this
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1)
        }
      }
    }
  }
}