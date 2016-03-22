var bubbleBox = $('.bubble-box');

var dudes = $('.dude');

bubbleBox.on('click', function (e) {
  for (var i = 0; i < dudes.length; i++) {
    $(dudes[i]).toggleClass('flip');
  } // this is flashy, but unnecessary... leave it, they love bubbles.

  /*
    1. create a new bubble div
    2. set it's left & top properties so that it's inside the bubble-box WHERE the user clicked
    3. add it to the bubble-box
    */
});

console.log(bubbleBox);
