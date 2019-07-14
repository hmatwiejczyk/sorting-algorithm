import { ICollections, Sorter } from './Sorter';
export class NumbersCollection extends Sorter implements ICollections {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }
  swap(leftIndex: number, rightIndex: number): void {
    const leftHandSideElement = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHandSideElement;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
}
