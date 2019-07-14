import { ICollections } from "./Sorter";
export class NumbersCollection implements ICollections {
  
  constructor(public data: number[]) {}

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