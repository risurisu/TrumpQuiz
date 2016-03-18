console.log('Loaded');



// Created a storyBook object
var fakerStory = {};


// Create a method on the storybook object... that knows how to write a line
fakerStory.writeLine= function() {
  var randomName = faker.name.findName();
  var randomAddress = faker.address.country();
  var randomNoun = faker.hacker.noun();
  var randomVerb= faker.hacker.verb();

  var newLine = randomName + " " + randomVerb + "to" + randomAddress + "with" +
  randomNoun
  return newLine;
}

//  Create a method on the storybook object.... that accepts a cssSelector...
    //  Replaces the text of the html NODE with a new story line
    fakerStory.writeStoryOnPage = function(cssSelector) {
      var newStory= this.writeLine();
      var storyNode = document.querySelector(cssSelector);
      storyNode.innerText = newStory;
    }



// SideNote:  YOu will likely need to create an HTML tag to select

fakerStory.render('#thisfakestory')

setInterval(function(){
  fakerStory.writeStoryOnPage('#story');
}, 5000);
