// TALK ABOUT FUNCTIONS:


/*
  FUNCTION EXPRESSION

  This way you can only use it after the declaration.
  Only the 'name' is hoisted.
  Typically used in objects
*/
  foo(); // it doesnt work! because 'foo' is hoisted, not the function definition.
  var foo = function() {}
/*
  FUNCTION DECLARATION

  This way, you can use the function anywhere, before or after declaration.
  Both the 'name' and 'function' hoisted to the top
*/
  foo(); // it works! both 'foo' and the definition are hoisted
  function foo() {}

/*
  This doesnt work either
*/
  foo(); // it doesnt work! because 'foo' is hoisted, not the function definition.
  var foo = function foo() {}
