import {Sorter} from './Sorter';
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from './LinkedList';

// example
const numbersCollection = new NumbersCollection([1, 0, -22, 5, -2])
const sortedNumbers = new Sorter(numbersCollection);
sortedNumbers.sort();

const charactersCollection = new CharactersCollection('Hubert');
const sortedCharacters = new Sorter(charactersCollection);
sortedCharacters.sort();

const linkedList = new LinkedList();
linkedList.add(44);
linkedList.add(-10);
linkedList.add(0);
linkedList.add(33);
const sortedLinkedList = new Sorter(linkedList);
sortedLinkedList.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();
