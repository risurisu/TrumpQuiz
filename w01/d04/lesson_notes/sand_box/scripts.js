console.log(" loaded script ");

// Let's make a list of each of us.
// This is an array of string
var owls = ["matt", "colette", "blake", "tariq", "kasia"];
// use the typeof operator to prove an array is an object

//  Shout all the names!
for (var index = 0; index < owls.length; index++) {
  console.log( "shoutout " + owls[index] );
}

// Let's give each of us some attributes!
var owls = [
  {
    "name": "matt",
    "favoriteColor": "purple",
    "likePets": true,
    "fictionalAge": 68,
    "specialPower": "intuition",
    "sayHi": sayHi,
    sayStory: sayStory,
    getAge: getAge
  },
  {
    "name": "colette",
    "favoriteColor": "black",
    "likePets": true,
    "fictionalAge": 18,
    "specialPower": "can eat lightbulbs and nails",
    "sayHi": sayHi,
    sayStory: sayStory,
    getAge: getAge
  },
  {
    "name": "blake",
    "favoriteColor": "white",
    "likePets": true,
    "fictionalAge": 1000,
    "specialPower": "teleport",
    "sayHi": sayHi,
    sayStory: sayStory,
    getAge: getAge
  },
  {
    "name": "tariq",
    "favoriteColor": "black",
    "likePets": true,
    "fictionalAge": 30,
    "specialPower": "you have the stamina of a God",
    "sayHi": sayHi,
    sayStory: sayStory,
    getAge: getAge
  },
  {
    "name": "kasia",
    "favoriteColor": "navyBlue",
    "likePets": true,
    "fictionalAge": 200,
    "specialPower": "greatness modesty",
    "sayHi": sayHi,
    sayStory: sayStory,
    getAge: getAge
  },
  {
    "name": "taco",
    "favoriteColor": "babyblue",
    "likePets": false,
    "fictionalAge": 1,
    "specialPower": "howls like a wolf",
    "sayHi": sayHi,
    sayStory: sayStory,
    getAge: getAge
  }
];

// NON FUNCTIONAL WAY OF PROCESSING THE OWLS ====================

// Now, let's create a small story from the info of each student.
for (var i = 0; i < owls.length; i++) {
  var story = "My name is " + owls[i].name + ". " +
              "My favorite color is " + owls[i].favoriteColor + ". " +
              "and my super power is " + owls[i].specialPower + ".";

  console.log(story);
}

// We can also use a diferent loop called the while loop.
var loopedTimes = 0;
while( loopedTimes < owls.length ) {
  var story = "My name is " + owls[loopedTimes].name + ". " +
              "My favorite color is " + owls[loopedTimes].favoriteColor + ". " +
              "and my super power is " + owls[loopedTimes].specialPower + ".";
  loopedTimes+=1;
  // loopedTimes++;
}

// END OF NONFUNCTIONAL SECTION ==================================

// FUNCTION DECLARATIONS =========================================

function sayHi() {
  // console.log(this);
  // console.log( "my favorite color is" + this.favoriteColor );
  return "my favorite color is" + this.name;
}

function sayStory() {
    var story = "My name is " + this.name + ". " +
                "My favorite color is " + this.favoriteColor + ". " +
                "and my super power is " + this.specialPower + ".";
    return story;
}

function getAge() {
  return this.fictionalAge;
}

function getOddAgedOwls( thingsArray ) {
  var oddAgedOwls = [];

  for (var i = 0; i < thingsArray.length; i++) {

    if(thingsArray[i].getAge() % 2 !== 0 ) {
      console.log( thingsArray[i] );
      oddAgedOwls.push( thingsArray[i] );
    }
  }

  // thingsArray.forEach(function( prettyOwl ){
  //   var even = prettyOwl.getAge() % 2 !== 0;
  //
  //   console.log(prettyOwl.getAge());
  //
  //   //  If the age of the owl is even
  //   if ( even ) {
  //     oddAgedOwls.push( prettyOwl );
  //   }
  // });

  return oddAgedOwls;
}

function makeThemGreet( owls ) {
  owls.forEach(function( owl ){
    owl.sayHi();
  })
}
