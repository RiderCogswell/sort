import { Sorter } from './Sorter'
import { NumbersCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbers = new NumbersCollection([10, 3, -5, 0])
// const sorter = new Sorter(numbers)
// sorter.sort();
// console.log(numbers.data);

// const charCollect = new CharactersCollection('Xdjfuf');
// const sorter = new Sorter(charCollect)
// sorter.sort()

// console.log(charCollect.data);

const linkedList = new LinkedList();
linkedList.add(500)
linkedList.add(50)
linkedList.add(30)
linkedList.add(-80)

const sorter = new Sorter(linkedList)
sorter.sort()
linkedList.print();