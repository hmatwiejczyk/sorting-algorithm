import { ICollections } from './Sorter';
export class CharactersCollection implements ICollections {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const lettersArray = this.data.split('');
    const leftHandSideElement = lettersArray[leftIndex];
    lettersArray[leftIndex] = lettersArray[rightIndex];
    lettersArray[rightIndex] = leftHandSideElement;
    this.data = lettersArray.join('');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }
}
