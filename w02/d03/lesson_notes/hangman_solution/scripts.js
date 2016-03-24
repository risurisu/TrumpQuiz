console.log("HERE")

//start here
var words = ['butt', 'mom', 'hi'];

var hangmanGame = {};

hangmanGame.answer = [];
hangmanGame.currentGameState = [];
hangmanGame.guessedLetters = [];
hangmanGame.numGuesses = 6;

//need a list of words
//need a way to pick a random word
//need those blanks on the page


//show this and the board set up.
hangmanGame.setRandomAnswer = function() {
	var index = Math.floor(Math.random()*words.length);
  this.answer = words[index].split('');
};

hangmanGame.setUpBoard = function() {
    this.setRandomAnswer();
    var spaceAnswers = this.answer.map(function(item) {
        return "_"
    })
    this.currentGameState = spaceAnswers;
}

//let them try this one on their own.
hangmanGame.renderBoard = function() {
    this.setUpBoard();
    $('#answer-space').text(this.currentGameState);
		$('#guesses-remaining').text("Guesses Remaining: " + this.numGuesses);
}

//register handler to listen for when I click on the enter button so it knows letter.
hangmanGame.registerGuessHandler = function() {
    $('#guess').click(function() {
    	hangmanGame.handleGuessSubmit();
    });
}

//What I want to have happen every time that handler is triggered.
hangmanGame.handleGuessSubmit = function() {
	var letter = $("#letter").val();
  //checks to see if the letter you guessed is already been guessed
  var alreadyGuessed = false;

  // LOOP through all the guessed letters
  for (var i = 0; i < this.guessedLetters.length; i++) {
    if (letter === this.guessedLetters[i]) {
      alreadyGuessed = true;
    };
  };
	// tell what to do based on whether the letter has been guessed or not
  if (alreadyGuessed) {
    this.renderStatus("You already guessed that!");
  } else if (letter.length > 1) {
    this.renderStatus("Please guess only one letter");
  } else if (letter === "") {
    this.renderStatus("Please guess a letter");
  } else {
    var guessed = false;
		//if the letter exists in the answer, will replace the letter in game state with the guessed one
    for (var i = 0; i < this.answer.length; i++) {
      if (letter === this.answer[i]) {
        this.currentGameState[i] = letter;
        guessed = true
      };
    };
		//what to do if the guess is wrong
    if (!guessed) {
      this.renderStatus("GUESSED WRONG");
      this.numGuesses -= 1;
    };
		//do this every time.
    this.guessedLetters.push(letter)
    this.checkStatus();
    this.displayCurrentGameState();
  };
	//clear out input
  $('#letter').val('');
}

//something that renders the status, can be used over and over again.
hangmanGame.renderStatus = function(msg) {
	var status = $('#status').append('<p>').addClass("status").text(msg)
  setTimeout(function() {
    status.empty()
  }, 2000);
}

//checks game status and renders the little guy on the page
hangmanGame.checkStatus = function() {
    if (hangmanGame.currentGameState.join("") === hangmanGame.answer.join("")) {
        $('#win-lose').css("color", "gold").text("YOU WIN!")
    } else if (this.numGuesses === 5) {
        $("#head").css("display", "block");
    } else if (this.numGuesses === 4) {
        $("#torso").css("display", "block");
    } else if (this.numGuesses === 3) {
        $("#left-arm").css("display", "block");
    } else if (this.numGuesses === 2) {
        $("#right-arm").css("display", "block");
    } else if (this.numGuesses === 1) {
        $("#left-leg").css("display", "block");
    } else if (this.numGuesses === 0) {
        $("#right-leg").css("display", "block");
        $('#win-lose').css("color", "red").text("YOU LOSE!")
    };
}

// displays the state of the game
hangmanGame.displayCurrentGameState = function() {
	var lettersGuessed = $('#guessed-letters');
	lettersGuessed.text("You've Already Guessed: " + this.guessedLetters);

	var answerAreaDiv = $('#answer-space');
  answerAreaDiv.text(this.currentGameState);

  var guessesRemaining = $('#guesses-remaining');
  guessesRemaining.text("Guesses Remaining: " + this.numGuesses);
}

// renders the board and registers the game handler upon load of the page
$(document).ready(function() {
    hangmanGame.renderBoard();
    hangmanGame.registerGuessHandler();
});
