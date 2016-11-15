'use strict';

const assert = require('assert');

/** Class representing a Node. */
class Node {
    /**
     * Create a Node.
     * @param value - The  value.
     */
    constructor(value) {
        this.value = value;
    }
}

/** Class representing a Stack. */
class Stack {
    /**
     * Create a Stack.
     */
    constructor() {
        this._top = null;
    }

    /**
     * Сheck the emptiness of the stack.
     * @return {boolean} True or false.
     */
    isEmpty() {
        return this._top === null;
    }
    
    /**
     * Put the value on top of the stack.
     * @param value - The  value.
     */
    push(value) {
        const newNode = new Node(value);
        newNode.next = this._top;
        this._top = newNode;
    }
    
    /**
     * Pop and return the value from top of the stack.
     * @return The value.
     */
    pop() {
        assert(!this.isEmpty(), 'stack is empty');

        const topValue = this._top.value;
        this._top = this._top.next;
        return topValue;
    }
    
    /**
     * Return the value from top of the stack.
     * @return The value.
     * 
     */
    peek() {
        assert(!this.isEmpty(), 'stack is empty');

        return this._top.value;
    }
}

module.exports = Stack;
