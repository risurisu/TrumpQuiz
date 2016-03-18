console.log('Loaded');



// Created a storyBook object
var storyBook = {};

// Create a method on the storybook object... that knows how to write a line
storyBook.writeLine = function(){
  var newLine = faker.name.firstName() + " will " + faker.hacker.verb() + " to " + faker.address.state() + " and found a lot of " + faker.hacker.noun() + ", " + faker.hacker.noun() + ", and " + faker.hacker.noun();
  return newLine;
};


//  Create a method on the storybook object.... that accepts a cssSelector...
    //  Replaces the text of the html NODE with a new story line
// SideNote:  YOu will likely need to create an HTML tag to select
storyBook.render = function(cssSelector){
  var storyNode = document.querySelector(cssSelector);
  storyNode.innerText = this.writeLine();
};


storyBook.render('#story-board');
