var bubbleBox = document.querySelector('.bubble-box');

var dudes = document.querySelectorAll('.dude');

bubbleBox.addEventListener('click', function (e) {
  for (var i = 0; i < dudes.length; i++) {
    dudes[i].classList.toggle('flip');
  }
});

console.log(bubbleBox);
