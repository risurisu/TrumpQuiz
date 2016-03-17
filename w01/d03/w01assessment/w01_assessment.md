# Week 1 Assessment

Please work alone. Feel free to use tools like the Chrome Console or Repl.it to test your code.

This assessment consists of short answer & code questions, all based on the YouTube JavaScript videos you watched before class. To do the code challenge portion. Please write your answers to the short answer questions into this markdown. If you write/test your code in Repl.it or the Chrome Console, copy and paste each step of your code, as well as your answers, into this markdown too.

Once finished, go ahead and attach the markdown to an email and send it to all of us, your instructional team (listed below)! :sparkles:

* Andrew: andrew@generalassemb.ly
* Rafa: rafa.pacas@generalassemb.ly
* Ash: ashley.hofferber@generalassemb.ly

---
### Short Answer questions

1. Name at least 3 primitive object types built in to JavaScript.

2. Name 2 built in methods for an array.

3. What does “&&”, “||” and “!” mean?

4. What is the difference between == & === ?

5. What's the difference between a for loop and a while loop?

6. What are two ways in which you can access properties of an object?

7. What is ​*scope*​ in the context of JavaScript?

8. Given the following code:

  ```
  var darthVadar = "Luke, I am your mother?"

    function lukeSkywalker (darthVadar){
      return darthVadar;
    }
    ```

    - What will `lukeSkywalker(darthVadar);` return? Why?
    - What will `lukeSkywalker("This is weird!");` return? Why?

---
### Code questions

1. Assign one variable to hold your name and one variable to hold the name of your favorite lunch spot. Write an expression using that variable that tells everyone your favorite place for lunch.

  e.g. `Hi my name is Ash. My favorite place for lunch is Chipotle.`

<<<<<<< HEAD
var Name = "Liz.";
var Lunch = "Panino Rustico."; {

console.log ("Hi, my name is" + " " + Name + " "  + "My favorite place for lunch is" + " " + Lunch);
}

=======
>>>>>>> a369e6c8ce864e96cd3220f065ea200df601ebb4
2. Complete the following steps:
  * Create a new function called `myMessage`.
  * When executed, have the function log the message `"This function was executed!"`.
  * Additionally, have it return `true`.
  * Store the returned value of `myMessage` in a new variable called `newVariable`.

<<<<<<< HEAD
function myMessage () {
console.log ("This function was executed!");
return (true);
}

var newMessage = myMessage();

=======
>>>>>>> a369e6c8ce864e96cd3220f065ea200df601ebb4
3. Write a while loop that iterates over the given array, removing the last element in the array through each iteration. Log the result of thisArray each time it loops through. When thisArray is empty, the while loop should stop.

  `var thisArray = [1,2,3,4,5,6,7,8,9,10]`

<<<<<<< HEAD
var thisArray =[1,2,3,4,5,6,7,8,9,10];

while (thisArray.length > 1) {
var arrayPop= thisArray.pop();
console.log(arrayPop);
}
console.log(thisArray)

4. Write a for loop that will log the numbers 1 through 20.

var a = 1;

for (var a = 1; a < 21; a ++); {
console.log(a);
}



1. 3 Primitive Object types built in JavaScript:
1. array
2. float
3. true/false
4. null/undefined
5. numbers, floats

2. Two built in methods for arrays: Push and Pop

3. && is And. || is Or. ! is Not. 

4. == can be equal or equivalent to. === is the strictest equal. Ex. "3" is == 3. But only 3 === 3. 

5. For loops have a test that needs to be fulfilled to execute the code.
While loops are a way to do something until a condition is met. 

6. To access properties of an object, you can use either . or [""]

7. Scope in JavaScript= the variables, functions and objects you can work with. 

8. lukeSkywalker(darthVader) will return "Luke, I am your mother" because the variable was declared with that string and was returned when it was placed in the function
lukeSkywalker("This is weird") will return undefined. The string was never define
=======
4. Write a for loop that will log the numbers 1 through 20.
>>>>>>> a369e6c8ce864e96cd3220f065ea200df601ebb4
