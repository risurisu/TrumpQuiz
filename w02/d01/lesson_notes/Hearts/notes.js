console.log('...loaded');

// OLDEST:    document.getElementById('opening-message');
window.onload = function(){
  var messageNode = document.getElementById('opening-message');
  messageNode.innerText = "I REALLY LOVE YOU";
};


// jQuery:    $('#opening-message')
$(function(){
  var $messageNode = $('#opening-message');
  $messageNode.text('I REALLY LOVE YOU');
});


// NEWEST:    document.querySelector('#opening-message');
window.onload = function(){
  var messageNode =  document.querySelector('#opening-message');
  messageNode.innerText = "I REALLY LOVE YOU";
};
