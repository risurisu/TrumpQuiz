console.log('loaded');

var namingMachine = {};

namingMachine.renderList = function(cssSelector, numberOfNames){
  var listNode = document.querySelector(cssSelector);

  var liNode;

  for (var i = 0; i < numberOfNames; i++) {
    liNode = document.createElement('li');
    liNode.innerText = faker.name.findName();
    listNode.appendChild(liNode);
  }

};
