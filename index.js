'use strict';

const assert = require('assert');

class Node {
    constructor(value) {
        this.value = value;
    }
}

class Stack {
    constructor() {
        this._top = null;
    }

    isEmpty() {
        return this._top === null;
    }

    push(value) {
        const newNode = new Node(value);
        newNode.next = this._top;
        this._top = newNode;
    }

    pop() {
        assert(!this.isEmpty(), 'stack is empty');

        const topValue = this._top.value;
        this._top = this._top.next;
        return topValue;
    }

    peek() {
        assert(!this.isEmpty(), 'stack is empty');

        return this._top.value;
    }
}

module.exports = Stack;
