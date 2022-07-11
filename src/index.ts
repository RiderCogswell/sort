import { Sorter } from './Sorter'
import { NumbersCollection } from './NumberCollection';

const numbers = new NumbersCollection([10, 3, -5, 0])
const sorter = new Sorter(numbers)
sorter.sort();
console.log(numbers.data);
