console.log('...loaded');

var balloon = document.querySelector('.balloon')

//e is an event object containing all the information about the click event
 balloon.addEventListener('click', function (e) {
  e.target.style.backgroundColor = 'red';
});

//Add event listener to the balloon
  // When I mouse down n the balloon...I want it to turn red
  // When I release my mouse...I want the balloon to disappear

balloon.addEventListener('mousedown', function (e) {
    e.target.style.backgroundColor 'red';
  });

balloon.addEventListener('mouse out', function (e) {
//old  e.target.parentNode.removeChild(e.target);
e.target.remove();
});
