console.log('...loaded');

var heartBot = {};

heartBot.generateHeart = function(){
  var $newHeart = $('<h1>');
  $newHeart.addClass('heart');
  $newHeart.html('&hearts;');
  $newHeart.css({
    top: this.currentMousePosition.y,
    left: this.currentMousePosition.x
  });
  return $newHeart;
};

heartBot.setTrackMouseHandler = function(){
  this.currentMousePosition = { x:null, y:null };
  var scope = this;
  $(document).on('mousemove', function(e){
    scope.currentMousePosition.x = e.pageX;
    scope.currentMousePosition.y = e.pageY;
  });
};


heartBot.animateHeart = function($heart){
  $heart.animate({  // Animate some css
    top: (Math.random() * 200 - 50 ) + '%',  // Slide to a random top distance
    left: (Math.random() * 200 - 50) + '%',  // Slide to a random left distance
    opacity: 0  // Fade to zero opacity... i.e. fade out
  },
  1000,  // How long should the animation take?
  'linear',  //  With what "swing" type should it use
  function(){  // When the animation is complete... what should happen?
    $(this).remove();  // Remove the element
  });
};

heartBot.appendNewHeart = function( $parentNode ){
  var $heart = this.generateHeart();
  $parentNode.append($heart);
  heartBot.animateHeart($heart);
};

$(function(){  // "Document Ready"

  heartBot.setTrackMouseHandler();

  setInterval(function(){
    heartBot.appendNewHeart( $('body') );
  }, 50);

});







//
