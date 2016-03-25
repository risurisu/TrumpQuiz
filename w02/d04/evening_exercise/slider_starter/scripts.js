$(document).ready(function() {

console.log("LOADED, OKAY?!"); // use .on event listener


function renderDisplay(){  // to find the value for each color input
  var r = parseInt($("#red-range").val());
  var g = parseInt($("#green-range").val());
  var b = parseInt($("#blue-range").val());


$('body').css({"backgroundColor": 'rgb(' + r + ',' + g + ','+ b +
')'
});
} // changes background

renderDisplay(); //calls the function

$('input').on('input', renderDisplay);  //helps function fire 

});



  // Find the values for each range input



  // Displays the number values of each range input



  // Change the body background color to match the rgb mix of the range inputs
