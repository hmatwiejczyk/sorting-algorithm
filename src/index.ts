import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// example
const numbersCollection = new NumbersCollection([12, -4, 2, 0, -2]);
numbersCollection.sort();
console.log(numbersCollection);

const charactersCollection = new CharactersCollection('Hubert');
charactersCollection.sort();
console.log(charactersCollection);

const linkedList = new LinkedList();
linkedList.add(300);
linkedList.add(-4);
linkedList.add(5);
linkedList.add(0);
linkedList.sort();
linkedList.print();
