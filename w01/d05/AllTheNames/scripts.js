console.log("loaded")

//Defining empty object
var soManyNames = {};

//define renderList method
soManyNames.renderlist = function (cssSelector, numberofNames) {

// obtain from the DOM, the HTML node of the list
  var listNode = document.querySelector (cssSelector);

// Define a variable to be used in the loop
  var liNode;

// Create a loop to go from 0 to numberofNames
  for (var i = 0; i < numberofNames; i++) {

// Create a new LI node
    liNode = document.createElement('li')

// Place faker names in the text of the new LI Node
    liNode.innerText = faker.name.findName();

// Append LI node to the list node which is already on the page 
    listNode.appendChild(liNode);


  }
};

// #all-the-names
