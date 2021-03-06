import { Sorter } from "./Sorter";

class Node {
  // next is of type Node or null, set default to null
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    // if no current head, set node equal to head and return
    if (!this.head) {
      this.head = node;
      return;
    }

    // create tail variable, 
    let tail = this.head;
    // while tail has a next
    while (tail.next) {
      // set tail = tail.next
      tail = tail.next;
    }
    // set tail.next = to the node we just created
    tail.next = node;
  }

  get length(): number {
    if (!this.head) return 0;

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index: number): Node {
    if (!this.head) throw new Error('Index out of bounds')

    let counter = 0;
    // manul TA because at expects a node 
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds')
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    if (!this.head) throw new Error('List is empty');

    return this.at(leftIdx).data > this.at(rightIdx).data
  }

  swap(leftIdx: number, rightIdx: number): void {
    const leftNode = this.at(leftIdx);
    const rightNode = this.at(rightIdx);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) return;

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}