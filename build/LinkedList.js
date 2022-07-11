"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class Node {
    constructor(data) {
        this.data = data;
        // next is of type Node or null, set default to null
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
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
    get length() {
        if (!this.head)
            return 0;
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    at(index) {
        if (!this.head)
            throw new Error('Index out of bounds');
        let counter = 0;
        // manul TA because at expects a node 
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    }
    compare(leftIdx, rightIdx) {
        if (!this.head)
            throw new Error('List is empty');
        return this.at(leftIdx).data > this.at(rightIdx).data;
    }
    swap(leftIdx, rightIdx) {
        const leftNode = this.at(leftIdx);
        const rightNode = this.at(rightIdx);
        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }
}
exports.LinkedList = LinkedList;
