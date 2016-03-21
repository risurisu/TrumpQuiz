console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;

// Part One.
var makeMiddleEarth = function () {
  var section = document.createElement('section');
  section.setAttribute('id', 'middle-earth');

  var lands;
    for (var i=0; i<lands.lengthl i++) {
      lands= document.createElement('article');
      lands.innerHTML='<h1>' +lands[i]+'</h1>';
      section.appendChild(lands);
      body.appendChild(lands)
    }
};

makeMiddleEarth();

// Part Two.
var makeHobbits = function () {

var hobbitList = document.createElement('ul');
var hobbitNodes;
  for (var i = 0; i < hobbits.length; i++) {
    hobbitNodes = document.createElement('li');
    hobbitNodes.setAttribute('class', 'hobbit');
    hobbitList.appendchild(hobbitNodes);
  }

  var theShire = document.body.querySelector('article');

  theShire.appendChild(hobbitList);
};

makeHobbits();

// Part Three
var keepItSecretKeepItSafe = function () {

var theRing = document.createElement('div')

theRing.setAttribute('id', 'the-ring');
theRing.setAttribute('class', 'magic-imbued-jewelry');

var theShire = document.body.querySelector('article');
var frodo = theShire.lastElementChild.children[0]

frodo.appendChild(theRing);

};

keepItSecretKeepItSafe();

// Part Four

var makeBuddies = function () {
var aside = document.createElement('aside');
var buddiesUL = document.createElement('ul');

var buddyNodes;

for (var i = 0; i < buddies.length; i++) {
  buddyNodes = document.createElement('li');
  buddyNodes.innerText = buddies[i];
  buddiesUL.appendChild(buddyNodes);
}

landArray = document.body.querySelectorAll('article')
rivendell = landarray[1]

rivendell.appendChild(buddiesUL);

};
makeBuddies();

// Part Five

var beautifulStranger = function () {

Strider.nodeValue="Aragorn";
};

// Part Six

var leaveTheShire = function() {

var hobbits = document.querySelector('article').firstElementChild.nextElementSibling;

var rivendell = document.body.querySelectorAll('article')[1];
rivendell.appendChild(hobbits);

};

// Part Seven

var forgeTheFellowShip = function () {
  var div= document.createElement('the-fellowship');
  document.getElementbyID('the-fellowship').appendChild('Rivendell');
  the-fellowship = [];
  the-fellowship.push(hobbits, buddies)

};


// Part Eight

var theBalrog = function () {
gandalf.innerText ='Gandalf the White';
document.getElementByID(Gandalf).style.color = "white";
document.getElementByID(Gandalf).style.border = "Grey";
};

// Part Nine
var hornOfGondor = function () {
  alert("The Horn of Gondor Has been blown");

  var fellowship = document.body.querySelectorAll('article')[1].firstElementChild.nextElementSibling;

  fellowship.lastElementChild.remove();
};

// Part Ten
var itsDangerousToGoAlone = function () {
  var hobbits = document.getElementsByClassName('hobbit');

  var frodo = hobbits[0];
  var sam = hobbits[1];

  var mordor = document.querySelectorAll('article')[2];

  mordor.appendChild(frodo);
  mordor.appendChild(sam);

  var mtDoom= document.createElement('div');
  mtDoom.setAttribute('id', 'Mount-Doom');
  mordor.appendChild(mtDoom);
};

// Part Eleven
var weWantsIt = function () {
  var gollum = document.createElement('div')
  gollum.setAttribute('id', 'gollum');

  var frodo = document.getElementsByClassName('hobbit')[2];
  gollum.appendChild(frodo.lastElementChild);
  var mtDoom = document.getElementByID('Mount-Doom');
  mtDoom.appendChild(gollum);
};

// Part Twelve

var thereAndBackAgain () {

  var mordor= document.querySelectorAll('article')[2];
  mordor.lastElementChild.children[0] // remove here?

  var hobbits = document.getElementsByClassName ('hobbit');
  for (var i = 0; i < hobbits.length; i++) {
    theShire.appendChild(hobbits[i]);

  }

};
