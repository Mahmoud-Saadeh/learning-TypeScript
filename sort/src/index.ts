import { NumberCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([10, 3, -5, 0, 5]);
const charactersCollection = new CharactersCollection('Mahmoud');
const linkedList = new LinkedList();

linkedList.add(10);
linkedList.add(3);
linkedList.add(-5);
linkedList.add(0);

numberCollection.sort();
charactersCollection.sort();
linkedList.sort();

console.log(numberCollection.data);
console.log(charactersCollection.data);
linkedList.print();
