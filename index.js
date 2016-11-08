'use strict';

var assert = require('assert');

function Node(value) {
    this.value = value;
}

function Stack() {
    this._top = null;
}

Stack.prototype.isEmpty = function() {
    return this._top == null;
}

Stack.prototype.push = function(value) {
    var newNode = new Node(value);
    newNode.next = this._top;
    this._top = newNode;
}

Stack.prototype.pop = function() {
    assert(this._top != null, 'Error: stack is empty');
    var topValue = this._top.value;
    this._top = this._top.next;
    return topValue;
}

Stack.prototype.peek = function() {
    assert(this._top != null, 'Error: stack is empty');
    return this._top.value;
}

module.exports = Stack;
