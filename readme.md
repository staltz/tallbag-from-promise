# tallbag-from-promise

Convert a Promise to a tallbag listenable source.

`npm install tallbag-from-promise`

## example

```js
const fromPromise = require('tallbag-from-promise');
const observe = require('callbag-observe');

const source = fromPromise(
  fetch('http://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
);

observe(user => console.log(user.name))(source); // Leanne Graham
```
