# ES6

### Default Params

```js


```

### let + const

- const: constant, indicates that a variable should not be redefined
  - throws error on reassignment attempt
  - allows for parameter shifting but will not allow total, subtraction or addition
- let: limited scope variable, may be reassigned
  - Gives a *block level scope*

> Good code does a great job of describing its intent.
>let and const are all about describing how a program should work and enforcing rules. These new indentifiers give programmers the ability to be more descriptive when writing code and their code is more readable and less bug prone as a result.

> Try to use const before let before var.

```js

let foo = "bar"
const fiz = "bat"

```

### Spread Operator

- Turn elements of an array into arguments of a function call
- Place elements of an array into another array

```js

let numbers = [5,5];
var add = (a,b)=>{
  return a + b;
};

add(...numbers)// Returns 10

```

### Classes

- object template creation


```js

class Controller {
  constructor(urlPrefix = '') {
    this._urlPrefix = urlPrefix;
  }
  getUrlPrefix() {
    return this._urlPrefix;
} }

class UsersController extends Controller {
  constructor(urlPrefix = 'users') {
    super(urlPrefix); // call parent constructor or urlPrefix won't be set!
  }
}

let usersController = new UsersController;
usersController.getUrlPrefix(); // users

```

### Modules

  - exporting and importing external code

```js

modules.exports = function() {
  // return some value
}

```

#### Named exports

- allows you to select pieces of my exported code
- must use same name on import

```js
// FILE: player.js
export const maxPlays = 5;
export function run() {
  // make player run
}
export function jump() {
  // player jump
}
// FILE: main.js
import { maxPlays, jump } from './player';
// import only maxPlays and jump
import * from './player'
// import everything that player exposes (maxPlays, run, jump)

```

### Default exports

- lets you export one object from module
- can be renamed upon import

```js

// Person.js
let foo = 'bar';
export default class Person {
  // class code here...
}
// main.js
import Person from './Person';
console.log(foo); // undefined
console.log(Person) // class Person {}

// -----------------------------------

// no default export defined in player
import { player } from 'player';
// with default export defined in player
import player from 'player';

```
