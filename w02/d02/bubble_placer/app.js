var bubbleBox = $('.bubble-box');

var dudes = $('.dude');

bubbleBox.on('click', function (e) {
  for (var i = 0; i < dudes.length; i++) {
    $(dudes[i]).toggleClass('flip');
  } // this is flashy, but unnecessary... leave it, they love bubbles.


var bubble = $('<div>') // create new div
bubble.addClass('bubble'); // adding the class of bubble to the div
bubble.css({   // so we can set the coordinates of our new div to where the mouse is
left: e.offsetX-24,
top: e.offsetY-24

});
 bubbleBox.append(bubble); // add bubble to bubblebox

  /*
    1. create a new bubble div
    2. set it's left & top properties so that it's inside the bubble-box WHERE the user clicked
    3. add it to the bubble-box
    */
});

console.log(bubbleBox);
