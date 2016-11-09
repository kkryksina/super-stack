'use strict';

const Stack = require('./index.js');

const assert = require('assert');

describe('super-stack', function() {
    it('should use expected API', function() {
        assert.strictEqual(typeof Stack, 'function', 'Stack is not a function');
        assert.strictEqual(typeof Stack.prototype.isEmpty, 'function', 'Stack has no isEmpty method');
        assert.strictEqual(typeof Stack.prototype.push, 'function', 'Stack has no push method');
        assert.strictEqual(typeof Stack.prototype.pop, 'function', 'Stack has no pop method');
        assert.strictEqual(typeof Stack.prototype.peek, 'function', 'Stack has no peek method');
    }); 

    it('New stack should be empty', function() {
        const stack = new Stack();
        assert(stack.isEmpty(), 'New stack is not empty');
    });

    it('Stack with elements should not be empty', function() {
        const stack = new Stack();
        stack.push('1');
        assert(!stack.isEmpty(), 'Stack with elements is empty');
    });

    it('Push method should save new element on the top', function() {
        const stack = new Stack();
        stack.push('1');
        assert.strictEqual(stack.peek(), '1', 'New element is not on the top');
    });

    it('Stack should be empty after push and pop', function() {
        const stack = new Stack();
        stack.push('1');
        assert.strictEqual(stack.pop(), '1', 'Stack is not empty after push and pop');
    });

    it('Peek method should return last pushed element', function() {
        const stack = new Stack();
        stack.push('1');
        stack.push('2');
        stack.push('3');
        assert.strictEqual(stack.peek(), '3', 'Peek method returns not last pushed element');
    });

    it('Peek method should always return last pushed element', function() {
        const stack = new Stack();
        stack.push('1');
        assert.strictEqual(stack.peek(), stack.peek(), 'Peek method returns wrong element');
    });

    it('Peek method should return new value after pop', function() {
        const stack = new Stack();
        stack.push('1');
        stack.push('2');
        stack.push('3');
        assert.strictEqual(stack.peek(), '3', 'Peek method returns wrong element');
        stack.pop();
        assert.strictEqual(stack.peek(), '2', 'Peek method returns wrong elementp');
    });

    it('Pop method should return elements in reversed order', function() {
        const stack = new Stack();
        stack.push('1');
        stack.push('2');
        assert.strictEqual(stack.pop(), '2', 'Pop method returns elements in order');
        assert.strictEqual(stack.pop(), '1', 'Pop method returns elements in order');
    });

    it('Pop method should throw error if stack is empty', function() {
        const stack = new Stack();
        assert.throws(function() {stack.pop()}, 'Stack is empty');
    });

    it('Pop method should throw error if all elements were poped', function() {
        const stack = new Stack();
        stack.push('1');
        stack.pop();
        assert.throws(function() {stack.pop()}, 'Stack is empty');
    });
    
    it('Peek method should throw error if stack is empty', function() {
        const stack = new Stack();
        assert.throws(function() {stack.peek()}, 'Stack is empty');
    });

}); 