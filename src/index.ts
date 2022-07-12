import { Sorter } from './Sorter'
import { NumbersCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbers = new NumbersCollection([10, 3, -5, 0])
// numbers.sort();
// console.log(numbers.data);

// const charCollect = new CharactersCollection('Xdjfuf');
// charCollect.sort()
// console.log(charCollect.data);

const linkedList = new LinkedList();
linkedList.add(500)
linkedList.add(50)
linkedList.add(30)
linkedList.add(-80)

linkedList.sort()
linkedList.print();
