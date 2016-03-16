## JavaScript Drills!

Tonight you are going to write JavaScript statements to solve the following problems. This assignment is to get you to started thinking like a developer.

A starter HTML file has been provided and is where you should work tonight.

#### 1. Pythagorean Theorem
Write a JavaScript statement that can solve the pythagorean theorem.
Don't know it? Google might! :smile:
function pythagorean (a, b) {

var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
return c;
}

#### 2. Create an array of your favorite things
Create an array that will have 5 indices—**0 through 4**. Each one should be assigned a value that contains a favorite thing of yours.
var myFavoriteThings = [Cats, Beer, Politics, Bodegas, Hats];

#### 3. Write a statement that checks to see if a buyer is over 21
We want to sell the booze! However, we can't sell to minors. Write an **if/else** statement that checks someone's age to be over 21. :beer:

var buyer= prompt("Please enter your age");
    if (buyer < 21) {
        console.log ("Get out.");
    }
    else {
        console.log("All the beer!");
    }

#### 4. Problems...problems everywhere!
Take the following math statements and turn them into JavaScript statements. *Use variables where they make sense.*

- Item A is greater than Item B
Var A > Var B
- Item C is equal to Item D
Var C === Var D
- 42 is less than 48
42 > 48
- Name is equal to Name
NameOne === NameTwo
- Item E minus Item F equals Item G
Var E - Var F === Var G
- Item H squared equals Item I
Var H = 2
Var I = 8
Math.pow(H , 3) === Var I
- Item J times Item H
var J= 2
var H = 3
var q = j * h

#### 5. Adventure Time!
- Write an adventure story in a paragraph.
- Next, you'll need to remove key verbs and nouns. Your users will enter their own values for these (like MadLibs).
- For example: _Today, I was [  x  ] to [  y  ]! On my way, I encountered [  z  ]! I had to use my [  u  ] to escape the horrible clutches of [  q  ]! All in a day's work as a [  k  ]!_
- You must use `prompt()` to ask your users at least five questions. These questions will determine the words used in your story. These answers should be assigned to a variable.
  - *Bonus*: Use an `array` to store your user's input.
- You will then need to use string manipulation to build your adventure paragraph!
- You should use at least one **conditional statement** when building your adventure.
- Try your (or a classmate's) adventure story out!

confirm("Let's go on a MadLib adventure! Complete the sentences.");
    var age = prompt("What's your age?");
if (age < 13) {
    console.log("Go back, it's not safe.");
}
else {
    console.log("Welcome!");
}

console.log("Today I was");
    var a = prompt("Enter your verb here");
console.log("to");
    var b = prompt("Enter your desired location here");
console.log("On my way, I encountered");
    var c = prompt("Enter your noun here");
console.log("I had to use my");
    var d = prompt("Enter your noun here");
console.log("to escape the horrible clutches of");
    var e = prompt("Enter your noun here");
console.log("All in a day's work as a");
    var f = prompt("Enter your profession here");

confirm("Do you want to hear your story?");
    console.log("Today I was " + a + " " +
    "to "  + b + " " + "On my way, I encountered "  + c + "! " + "I had to use my "  + d + " " + "to escape the horrible clutches of " + e + "! "  + "All in a day's work as a " + f);




### Done?
As we did yesterday, please submit your evening assignment via a GitHub issue. In the body of your submission, make sure to leave your **comfortability** (0–5), **completeness** (0–5), a **win**, a **challenge** and maybe a **comment** about this assignment.
