console.log("LOADED UP");

function bgColor() {
  $('body').css('background-color',"rgba(" +
      parseInt(Math.random()*256) + ", " +
      parseInt(Math.random()*256)+ ", " +
      parseInt(Math.random()*256) + ", " +
      Math.random() + ")");
}

function originalColor(){
  $('body').css('background-color', 'white');
}

function setHandler(){
  $('#owl').mouseenter(function(){
    bgColor();
  });
  $('#owl').mouseleave(function(){
    originalColor();
  })
  $('#owl').click( function(){
    alert("HEY QUIT IT!");
  })
}

function moveOwl(){
  $('body').keydown(function( e ) {
    console.log( e )
    if (e.keyCode === 38){
      $('#owl').css("margin-top", (parseInt($('#owl').css("margin-top")) - 10));
    } else if (e.keyCode === 40){
      $('#owl').css("margin-top", (parseInt($('#owl').css("margin-top")) + 10));
    } else if (e.keyCode === 39){
      $('#owl').css("margin-left", (parseInt($('#owl').css("margin-left")) + 10));
    }  else if (e.keyCode === 37){
      $('#owl').css("margin-left", (parseInt($('#owl').css("margin-left")) - 10));
    }
  })
}

function growOwl(){
  $('body').keypress(function( e ){
    if(e.keyCode === 13){
      $('#owl').css('height', parseInt($('#owl').css('height')) * 2);
      $('#owl').css('width', parseInt($('#owl').css('width')) * 2);
    } else if (e.keyCode === 115){
      $('#owl').css('height', parseInt($('#owl').css('height')) / 2);
      $('#owl').css('width', parseInt($('#owl').css('width')) / 2);
    };
  });
};




$(document).ready(function(){
  setHandler();
  moveOwl();
  growOwl();
})
