# super-stack
[![Build Status](https://travis-ci.org/kkryksina/super-stack.svg?branch=master)](https://travis-ci.org/kkryksina/super-stack)
Stack implementation in JavaScript

#API
```javascript
var Stack = require('super-stack');

var stack = new Stack();
console.log(stack.isEmpty()); // true 
stack.push('2'); // 2
console.log(stack.peek()); // 2
console.log(stack.isEmpty()); // false
console.log(stack.pop()); // 2
console.log(stack.isEmpty()); // true
```