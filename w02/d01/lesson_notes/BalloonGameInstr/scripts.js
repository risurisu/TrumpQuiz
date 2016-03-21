console.log('...loaded');

var balloonBot = {};

balloonBot.randomColor = function(){
  var red = Math.floor(Math.random()* 255);
  var green = Math.floor(Math.random()* 255);
  var blue = Math.floor(Math.random()* 255);
  return "rgb("+red+","+green+","+blue+")";
};

// <div class="balloon"></div>
balloonBot.createBalloon = function(){
  var newBalloon = document.createElement('div');
  newBalloon.className = "balloon";
  newBalloon.style.backgroundColor = this.randomColor();
  newBalloon.style.left = Math.random() * 100 + '%';
  newBalloon.style.top = Math.random() * 100 + '%';
  this.setPopBalloonHandler(newBalloon);
  return newBalloon;
};

balloonBot.setPopBalloonHandler = function(newBalloon){
  newBalloon.addEventListener('mousedown', function(e){
    e.target.style.backgroundColor = 'red';
  });
  newBalloon.addEventListener('mouseup', function(e){
    e.target.remove();  
  });
};

balloonBot.addNewBalloon = function(){
  var newBalloon = this.createBalloon();
  this.container.appendChild(newBalloon);
};

//   <button type="button" id="new-balloon">Blow Up Balloon</button>
balloonBot.setNewBalloonButtonClickHandler = function(){
  var scope = this;
  this.newButton.addEventListener('click', function(e){
   scope.addNewBalloon();
  });
};

//  DEFINING THE STUFF
// **************
//  USING THE STUFF

window.onload = function(){ // When the DOM is ready...
  balloonBot.container = document.querySelector('#balloon-containter');
  balloonBot.newButton = document.querySelector('#new-balloon');
  balloonBot.setNewBalloonButtonClickHandler();
};





//
