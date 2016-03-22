console.log('loaded')

// Blank object to hold ALL the behaviors and properties
var todoApp = {};

// Empty Array to manage the todo items
todoApp.todos = [];

// Ability to add in a new todo item
todoApp.addTodo = function(taskText){
  this.todos.push(taskText);
};

// What should happen when someone submits the form
todoApp.setFormSubmitHandler = function(){

  var scope = this;
  todoApp.$formElement.on('submit', function(e){      // form that sends request
    e.preventDefault(); // Don't do normal form behavior. Stay here.

    var $input = $(this).find('input'); // grab inout from the form
    var taskText = $input.val(); // grab the text within
    scope.addTodo(taskText); // add that todo text to the list of todos
    $input.val(''); // clear out the input list
    scope.renderList(); // re render the entire list
  });


};

// construct an individual li element for an individual task
todoApp.renderTodo = function(taskText){
  var $li = $('<li>') // generate li element
  $li.text(tastText);// set the elements text
  $li.addClass('todo'); // add class name for future styling
  return $li
}

// re draw the entire list of todos on the page
todoApp.renderList = function(){
  this.$listElement.empty(); // clear out the list as it is
  var $li; // create a empty variable to be used in the loop
  for (var i = 0; i < this.todos.length; i++) { // loop over each todo
    $li = todoApp.renderTodo( this.todos[i] ); // create an li to the list on the page
    this.$listElement.append ( $li ); // append li to the list on the page
  }
};      //iterate elements of array and place an item of that into list.



// Defining the Stuff
// *******
// Using the Stuff

$(function(){ // when document is ready...

todoApp.$listElement = $('#todos'); // grab the list on the dom
todoApp.$formElement = $('todo-station'); // grab the form on the dom
todoApp.setFormSubmitHandler(); //

});

//<form id='todo-station'>
//  <input type="text" name="task-text" placeholder="task text"
//  <input type="submit">
//</form>

//<ul id="todos"> </ul>
