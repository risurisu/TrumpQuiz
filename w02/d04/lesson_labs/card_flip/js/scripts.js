// Your JS/jQuery should go here
$(document).ready(function() {

  // every time I click on a card, something should happen
  $('.card').on('click', function() {
    var $currentCard = $(this);
    $currentCard.toggleClass("facedown");
  });
})


// which one?!
