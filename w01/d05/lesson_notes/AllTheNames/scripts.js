console.log('loaded');

// Defining a empty object
var namingMachine = {};

// Define renderList method
namingMachine.renderList = function(cssSelector, numberOfNames){

  // Obtain from the DOM, the HTML NODE of the list
  var listNode = document.querySelector(cssSelector);

  // Define a variable... to be used in the loop
  var liNode;

  // Create a loop to go from 0 to numberOfNames
  for (var i = 0; i < numberOfNames; i++) {

    //  Create a new LI NODE
    liNode = document.createElement('li');

    // Place faker names in the text of the new LI NODE
    liNode.innerText = faker.name.findName();

    // Append LI NODE to the LIST NODE which is already on the page
    listNode.appendChild(liNode);

  }

};
