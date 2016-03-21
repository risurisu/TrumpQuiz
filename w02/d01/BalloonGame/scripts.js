console.log('...loaded');

var balloonBot = {};

balloonBot.randomColor = function(){
  var red = Math.random()* 255;
  var green = Math.random()* 255;
  var blue = Math.random()* 255;
  return "rgb("+red+", "+green+", "+blue+")"
};

// <div class ="balloon"></div>
balloonBot.createBalloon = function() {
  var newBalloon= document.createElement('div');
  newBalloon.className = "balloon";
  newBalloon.style.backgroundColor = this.randomColor();
  newBalloon.style.left = Math.random() * 100 + '%';
  newBalloon.style.top = Math.random() * 100 + '%';
  this.setPopBalloonHandler(newBalloon);
  // Random style of left
  // Random style of top

  return newBalloon;
};
// Mousedown event and a mouseup event on balloon
balloonBot.setPopBalloonHandler = function(newBalloon) {
  this.container.addEventListener('mousedown', function(e) {
    e.target.style.backgroundColor = 'red'
  } )

  this.container.addEventListener('mouseup', function(e) {
    e.target.remove();

} )

};

balloonBot.addNewBallooon = function(){
  var newBalloon = this.createBalloon();
  this.container.appendChild(newBalloon);
};

balloonBot.setNewBalloonButtonClickHandler = function() {
  var scope = this;
  this.newButton.addEventListener('click', function(e) {
    scope.addNewBalloon();
  });

};

balloonBot.addNewBalloon = function() {
  var newBalloon = this.createBalloon();
  this.container.appendChild(newBalloon);
};

// button type= "button" id="new-balloon">Blow Up Balloon(/balloon)

balloonBot.setNewBalloonButtonClickHandler = function() {
  var scope = this;
  this.newButton.addEventListener('click', function(e){
    scope.addNewBalloon();
  });
};

// DEFINING THE STUFF
// *******
// USING THE STUFF

window.onload = function(){
balloonBot.container = document.querySelector('#balloon-container');
balloonBot.newButton = document.querySelector('#new-balloon');
balloonBot.setNewBalloonButtonClickHandler();
};
