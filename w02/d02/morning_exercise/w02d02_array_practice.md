## Arrays All Day!

I provided a starter HTML that you can work in, but feel free to use JSFiddle, REPL.it or the Chrome console if you prefer working there.

###Part 1

Given the following arrays:

```javascript

var andrew = ["andrew", 50, "sananab"];
var rafa = ["rafa", 17, "regal"];
var ash = ["ash", 52, "desserts"];
var sergey = ["sergey", 186, "knits"];

```

- Andrew can't remember his name. Remove Andrew's name from his array.
- Rafa just had his birthday! :tada: Change Rafa's array to reflect him being a year older.
- Ash has another favorite word, `"jolly"`, add this to her array.
- Sergey doesn't like knits anymore. Remove Sergey's favorite word from his array.

Hint: Take a dive into Mozilla Developer Network documentation (MDN)!

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

###Part 2

Given the following array of arrays:

```js

var arrayOfArrays = [
  ["andrew", 50, "sananab"],
  ["rafa", 17, "regal"],
  ["ash", 52, "jolly"],
  ["sergey", 186, "knits"]
];

```
Loop through the array. The output of every loop should be the following:
- The first element of the array, all capital letters, labeled as name.
- The second element of the array, labeled as age.
- The third element of the array, reversed, labeled as favorite word.

The console should log like so:

```
Name: ANDREW
Age: 50
Favorite word: bananas

```
###Part 3

Given the following array of arrays:


```js
var pokemonArray = [
  ["Squirtle",["HP",[44,["Attack",[48,["Defense",[65,["Speed",[43]]]]]]]]],
  ["Snorlax",["HP",[160,["Attack",[110,["Defense",[65,["Speed",[30]]]]]]]]],
  ["Mew",["HP",[100,["Attack",[100,["Defense",[100,["Speed",[100]]]]]]]]]
];
```
The console should log for **each** pokemon:

```
Squirtle || HP: 44 || Attack: 48 || Defense: 65 || Speed: 43

```
