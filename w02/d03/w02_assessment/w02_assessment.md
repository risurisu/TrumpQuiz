# Week 2 Assessment!

Welcome to your second assessment. Similar to the first assessment, you will have a series of short answer questions and a few code-based questions.

**Please work alone.** Use tools, such as the Chrome Console or JSFiddle to assess your code.

Answer your questions in the markdown, and complete the code challenge in the supplied starter files. When you are finished, send all the files as attachments to your instructional team:

Andrew: andrew@generalassemb.ly
Rafa: rafa.pacas@generalassemb.ly
Ash: ashley.hofferber@generalassemb.ly

---

#### Short Answer Section

1. What is the Box Model?
A box model wraps around all the html and contains the margins, width, padding, and content.

2. What does the Cascading in Cascading Style Sheets mean?
It means that more than one style can be applied to a piece of HTML 

3. In Javascript, what is ```this``` referring to?
.this refers to the DOM element that works on the subject being called in a function. 

4. What is a CDN?

### Code Challenge


5. Create a variable named `car` that stores an object with the following attributes and abilities. Please write your answer in this markdown.

  - your car should have a `name`.
  - your car should have a `color`.
  - your car should have a `fuel_type`.
  - when you run `car.honk()`, `"HONK HONK HONK"` should be logged in your console.
  - when you run `car.fireUp()`, there should be an alert that says `"VROOM"`.

var car =  {}
car.nameCar = "Bob";
car.colorCar = "blue";
car.fuel_type = "whatever";
console.log(car.fuel_type);

car.honk() {
console.log("HONK HONK HONK");
}
car.fireUp() {
alert("VROOM");
}

---  

These next 3 questions will test your ability to manipulate the DOM with JavaScript. Please work in `scripts/park.js`.

6. Edit the third `li` on the page to change its text from `"Tom Haverford"` to `"DJ ROOMBA"`.  

7. Append an `h1` tag to the body of this page.  This `h1` should have the text `"Parks&Rec"`.

8. Add a click event listener to the `div` on the page with the ID `ron`. This event should append a `div` with the ID `tom` to the DOM. When the event fires, Tom Haverford should appear next to Ron Swanson.  
