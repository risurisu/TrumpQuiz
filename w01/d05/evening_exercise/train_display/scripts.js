console.log("loaded");


// Main object
var mta = {};

mta.lines = {
  d: { color: 'orange', stations: [] },
  n: { color: 'yellow', stations: [] },
  six: { color: 'green', stations: [] }
};

mta.lines.d.stations = ['79th St', '71st St', '65th St', '50th St'];
mta.lines.n.stations = ['TimeSquare', 'Herald Square', 'Union Square', '28th St', '30th St'];
mta.lines.six.stations = ['Grand Central', '33rd Street', 'Union Square'];



mta.warnRiders = function() {
  alert("Please stand clear of the closing doors");
};

mta.greetRiders = function() {
  alert("Welcome. Hope you get to work on time. We make no promises.");
};

mta.renderLine = function(lineName, cssSelector) {
  var lineNode = document.querySelector(cssSelector);
  lineNode.innerHTML = "";
  var lineNameNode = document.createElement('h3');
  lineNameNode.innerText = lineName;
  lineNode.appendChild(lineNameNode);
  var line= this.lines[lineName];
  var stationNode;
    for (var i = 0; i < line.stations.length; i++) {
      stationNode = document.createElement('li');
      stationNode.innerText = line.stations[i];
      lineNode.appendChild(stationNode);
    }
    lineNode.style.backgroundColor = line.color;
};

mta.runUserExperience = function(cssSelector) {
    while (lineName != 'q'){
    mta.greetRiders();
    var lineName = prompt('Which train? d, l or six?');
    if (this.lines [lineName]) {
    mta.renderLine(lineName, cssSelector);
    mta.warnRiders();
  } else {
    alert("Please select a valid line.");
  }
  }
};

setTimeout(function() {
  run.userExperience('#line-display');
}, 2000)
