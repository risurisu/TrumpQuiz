//  Given the 3 dimensions of a box ( length, width, and height).
// Calculate the Volume.

// UNDERSTAND
// Get the length, width, and height variables from the user
// then calculate the volume by multiplying the variables
// the formula is V = l x w x h
// return the volume

/*
  REPRESENT (pseudo code)


  Get length, width, height
  Compute Volume
    volume = length * width * height
  Store volume
  Display volume
*/


// IMPLEMENT


// Get length, width, height
var length = prompt("What is the length of the box?");
var width = prompt("What is the width of the box?");
var height = prompt("What is the height of the box?");

function computeBoxVolume( length, width, height ) {
  return length * width * height;
}
computeBoxVolume( length, width, height );
