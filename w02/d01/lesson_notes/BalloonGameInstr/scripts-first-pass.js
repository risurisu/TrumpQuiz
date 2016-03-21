var balloon = document.querySelector('.balloon');
// OLD: var balloon = document.getElementsByClassName('balloon')[0]

// e is the EVENT OBJECT... containing all the information about the click event
balloon.addEventListener('mousedown', function (e){
  e.target.style.backgroundColor = 'red';
});

balloon.addEventListener('mouseup', function(e){
  e.target.remove();
  // OLD: e.target.parentNode.removeChild(e.target);
});
