import { Sorter } from './Sorter'
import { NumbersCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbers = new NumbersCollection([10, 3, -5, 0])
// const sorter = new Sorter(numbers)
// sorter.sort();
// console.log(numbers.data);

const charCollect = new CharactersCollection('Xdjfuf');
const sorter = new Sorter(charCollect)
sorter.sort()

console.log(charCollect.data);
