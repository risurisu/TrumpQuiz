$(document).ready(function() {

  $('#enter').on('click', function(e) {

    var x = $('#x').val();
    var y = $('#y').val();
    var operand = $('#operand').val();
    var calcValue = calc( x, y, operand );
    $('#result').val( calcValue  );
  });

  function calc( x, y, operand) {

    var _operand = operand || '+';
    var _x = parseInt(x) || 0;
    var _y = parseInt(y) || 0;
    var result = null;

    if (operand === '*') {
      result = _x * _y;
    }else if (operand === '+') {
      result = _x + _y;
    }else if( operand === '-') {
      result = _x - _y;
    }else {
      result = _x / _y;
    }

    return result;
  }
});
