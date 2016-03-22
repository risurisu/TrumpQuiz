var activator       = $('h1'),
    spinner         = $('.spinner'),
    currentRotation = 0;

activator.on('click', function (e) {
  currentRotation = currentRotation + Math.floor(280 + Math.random() * 800);

  console.log(spinner[0].style.transform);

  spinner.css({
    transform: "rotate(" +
      currentRotation +
      "deg)"
  });
});
