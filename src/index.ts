import {Sorter} from './Sorter';
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// example
const numbersCollection = new NumbersCollection([1, 0, -22, 5, -2])
const sortedNumbers = new Sorter(numbersCollection);
sortedNumbers.sort();
const charactersCollection = new CharactersCollection('Hubert');
const sortedCharacters = new Sorter(charactersCollection);
sortedCharacters.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
