console.log('...sooo ready to script');

//  Generate a story... that is KINDA random...

//  ****** Create the application object
var storyBook = {};


//  ****** Define the heros in our story object
storyBook.heros = [
  'Lichard DeGray',
  'Kathew Bod',
  'Omily Pnock',
  'Olexandria Lopt'
];


//  ****** Define the locations in our story object
storyBook.locations = [
  'Fulton Grand Tavern',
  'the corner of the Flatiron Building',
  'Propect Park\'s northern corner underpass'
];



//  ****** Define the transportation in our story object
storyBook.transportations = [
  'skipped',
  'walked',
  'hoverboard'
];



//  ****** Define the actions in our story object
storyBook.actions = [
  'sing a sweet song.... that of memories',
  'dream',
  'consider the next step... in life'
];


//  ****** Define ability to select a random Hero
storyBook.randomHero = function(){
  var randIdx = Math.floor( Math.random() * this.heros.length );
  return this.heros[randIdx];
}

//  ****** Define ability to select a random Location
storyBook.randomLocation = function(){
  var randIdx = Math.floor( Math.random() * this.locations.length );
  return this.locations[randIdx];
}

//  ****** Define ability to select a random Transportation
storyBook.randomTransportation = function(){
  var randIdx = Math.floor( Math.random() * this.transportations.length );
  return this.transportations[randIdx];
}

//  ****** Define ability to select a random Action
storyBook.randomAction = function(){
  var randIdx = Math.floor( Math.random() * this.actions.length );
  return this.actions[randIdx];
}


//  ****** Define ability to Write a story line
storyBook.writeLine = function(){
  var newLine = this.randomHero() + " " + this.randomTransportation() +  " to " + this.randomLocation() + " and spent time to " + this.randomAction();
  return newLine;
}

//  ****** Define ability to place a story line on the screen
storyBook.writeStoryOnPage = function(cssSelector){
  var newStory = this.writeLine();
  var storyNode = document.querySelector(cssSelector);
  storyNode.innerText = newStory;
}

//  Every 5 seconds... write a new story!
setInterval(function(){
  storyBook.writeStoryOnPage('#story');
}, 5000);
