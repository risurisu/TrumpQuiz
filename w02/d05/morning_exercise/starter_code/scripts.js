console.log("Loaded up!")

$(document).ready(function(){

  var bgColorArray = ['#111','#333','#555'],
    selectBG = bgColorArray[Math.floor(Math.random() * bgColorArray.length)];




    $("#owl").on("mouseover",function(){
      $("body").css({'background-color': selectBG });
  });

  $("#owl").on("mouseout",function(){
      $("body").css({"background-color": 'white'});
  });

  $("#owl").on('click', function() {
    alert( "Do not poke the owl" );
  });

  

});
