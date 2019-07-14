import {Sorter} from './Sorter';
import { NumbersCollection } from "./NumbersCollection";

// example
const numbersCollection = new NumbersCollection([1, 0, -22, 5, -2])
const sorter = new Sorter(numbersCollection);
sorter.sort();

console.log(numbersCollection.data);
