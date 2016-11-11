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

    it('should be empty after creating', function() {
        const stack = new Stack();
        assert.strictEqual(stack.isEmpty(), true, 'New stack is not empty');
    });

    it('should not be empty when stack contains elements', function() {
        const stack = new Stack();
        stack.push('1');
        assert.strictEqual(!stack.isEmpty(), true, 'Stack with elements is empty');
    });

    it('should be empty after push and pop', function() {
        const stack = new Stack();
        stack.push('1');
        assert.strictEqual(stack.pop(), '1', 'Stack is not empty after push and pop');
    });

    it('should have new element on the top after push method', function() {
        const stack = new Stack();
        stack.push('1');
        assert.strictEqual(stack.peek(), '1', 'New element is not on the top');
    });
});

describe('super-stack peek method', function() {

    it('should return last pushed element', function() {
        const stack = new Stack();
        stack.push('1');
        stack.push('2');
        stack.push('3');
        assert.strictEqual(stack.peek(), '3', 'Peek method returns not last pushed element');
    });

    it('should always return last pushed element', function() {
        const stack = new Stack();
        stack.push('1');
        assert.strictEqual(stack.peek(), stack.peek(), 'Peek method returns wrong element');
    });

    it('should return new value after pop', function() {
        const stack = new Stack();
        stack.push('1');
        stack.push('2');
        stack.push('3');
        assert.strictEqual(stack.peek(), '3', 'Peek method returns wrong element');
        stack.pop();
        assert.strictEqual(stack.peek(), '2', 'Peek method returns wrong elementp');
    });

    it('should throw error if stack is empty', function() {
        const stack = new Stack();
        assert.throws(function() {
            stack.peek()
        }, 'Stack is empty');
    });
});

describe('super-stack pop method', function() {
    it('should return elements in reversed order', function() {
        const stack = new Stack();
        stack.push('1');
        stack.push('2');
        assert.strictEqual(stack.pop(), '2', 'Pop method returns elements in order');
        assert.strictEqual(stack.pop(), '1', 'Pop method returns elements in order');
    });

    it('should throw error if stack is empty', function() {
        const stack = new Stack();
        assert.throws(function() {stack.pop()}, 'Stack is empty');
    });

    it('should throw error if all elements were poped', function() {
        const stack = new Stack();
        stack.push('1');
        stack.pop();
        assert.throws(function() {stack.pop()}, 'Stack is empty');
    });
});