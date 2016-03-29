$(document).ready(function() {


  var counter = 0; // Keep quiz score.
  var score = 0;

  var options = [
    {
      name: "donald",
      url: "http://www.wnd.com/files/2015/07/trump300x300.jpg"
    },
    {
      name: "robotnik",
      url: "http://static.giantbomb.com/uploads/scale_medium/0/5128/362102-sa_dr_eggman_02.jpg"
    },
    {
      name: "mojo",
      url:"http://i.cdn.turner.com/v5cache/CARTOON/site/Images/i23/ppg_mojojojo_174x252.png"
    },
    {
      name: "bender",
      url: "https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png"
    }
  ]

  var listOfQuotes = [  // All quiz data
    {
      "quote": "You're disgusting",
      "answer": "donald",
      "fullName": "The Donald"
    },

    {
      "quote": "The beauty of me is that I'm very rich",
      "answer": "donald"
    },

    {
      "quote": "I have never seen a thin person drinking Diet Coke",
      "answer": "donald"
    },
    {
      "quote": "My IQ is one of the highest and you all know it. Please don't feel stupid or insecure. It's not your fault.",
      "answer": "donald"
    },
    {
      "quote": "Good people don't go into government",
      "answer": "donald"
    },
    {
      "quote": "The concept of global warming was created by and for the Chinese in order to make US manufacturing non-competitive.",
      "answer": "donald"
    },
    {
      "quote": "I don't get along with rich people.",
      "answer": "donald"
    },
    {
      "quote": "Tiny children are not horses. One vaccine at a time over time.",
      "answer": "donald"
    },
    {
      "quote": "I will build a great wall",
      "answer": "donald"
    },
    {
      "quote": "There's nobody bigger or better at the military than I am.",
      "answer": "donald"
    },
    {
      "quote": "All I know is what's on the internet.",
      "answer": "donald"
    },
    {
      "quote": "It's freezing and snowing in New York. We need global warming.",
      "answer": "donald"
    },
    {
      "quote": "Rich people are rich because they solve difficult problems.",
      "answer": "donald"
    },
    {
      "quote": "When someone crosses you, my advice is get even",
      "answer": "donald"
    },
    {
      "quote": "Show me someone without an ego and I'll show you a loser.",
      "answer": "donald"
    },
    {
      "quote": "My acting skills are unmatched",
      "answer": "robotnik"
    },
    {
      "quote": "As a child, I looked up to my grandfather because of all the great things he accomplished in life.",
      "answer": "robotnik"
    },
    {
      "quote": "You shall be rewarded handsomely for helping me. As soon as I conquer the world.",
      "answer": "robotnik"
    },
    {
      "quote": "I do not reiterate, repeat, reinstate the same thing over and over again.",
      "answer": "mojo"
    },
    {
      "quote": "WIll the people in the cheap seats please leave",
      "answer": "mojo"
    },
    {
      "quote": "Am I just supposed to find a part time retail job and pretend I'm not infinitely superior to everyone around me? Have you ever worked in retail?",
      "answer": "mojo"
    },
    {
      "quote": "Game's over losers! I have all the money!",
      "answer": "bender"
    },
    {
      "quote": "I say the whole world must learn of our peaceful ways...by force.",
      "answer": "bender"
    },
    {
      "quote": "You're a pimple on society's ass and you'll never amount to anything.",
      "answer": "bender"
    },
    {
      "quote": "Idiots doing idiot things because they're idiots.",
      "answer": "archer"
    },
    {
      "quote": "Karate? The Dane Cook of martial arts? No. ISIS agents use Krav Maga",
      "answer": "archer"
    },
    {
      "quote": "And by the way, if I was a clone of Adolf goddamn Hitler, wouldn't I look like Adolf goddamn Hitler?!",
      "answer": "archer"
    }
  ];

  // assigning dom elements to variables.

  var $quote= $('.quote'),
      $generate = $('.generate'),
      $result = $('.results'),
      $score = $('.score')

  QuizGame = {}; //  assign quiz as object

  QuizGame.init = function() {   // Shows the quote
    this.currentQuote = listOfQuotes[score];
    // var selection = listofQuotes[0];
    var type = this.currentQuote["answer"];
    $quote.html(this.currentQuote["quote"]);

    $generate.hide();
    $result.hide();
    $score.hide();
  }

  QuizGame.getOptions = function(){
    // 0 - (options.length -1)
    var option1Index = Math.floor(Math.random()*options.length);
    var option2Index = Math.floor(Math.random()*options.length);

    var option1 = options[option1Index];
    var option2 = options[option2Index];

    return [option1, option2];
  }

  QuizGame.renderOptions = function(){
    var options = this.getOptions();
    var $container = $('.options');
    options.forEach(function( option ) {
      var $myOpt = $('<div class="choice">');
      var $img = $('<img>').attr("src", option.url);
      $myOpt.append($img);
      $container.append($myOpt);
    });

  }

  // start the quiz and go to the next question
  QuizGame.generate = function() {
    if (counter < listofQuotes.length) {
      var selection = listofQuotes[counter];
      $quote.html(selection["quote"]);
      type = selection["answer"];

      $result.hide();
      $score.hide();
      $quote.show();

    } else {
      console.log("done") // placeholder
    }

    $generate.hide();

  }

  // is the user right?
  $('.choice').click(function(e) {
    var answer = e.target.id;

    //
    // // tells the user the answer.
    // if (answer === "donald") {
    //   fullAnswer = "The Donald";
    // } else {
    //   fullAnswer = "robotnik"; // Do I add more else's for each character?
    // }

    if( answer == QuizGame.currentQuote.answer ) {
      $result.html( "Correct " + QuizGame.currentQuote.fullName ); // do i append success trump image here?
      score++;
    } else {
      $result.html("wrong!") // do i append failure trump image here?
    }

    counter ++;
    $score.html("You have " + score + " out of " + counter + ".");
    $generate.show();


    $result.show();
    $score.show();
    $quote.hide();
  });



    // Is the user right or wrong. Add point.



  // });
  //
  // $(document).ready(function () {
  //   QuizGame.init();
  // });

  $generate.on('click', function (e) {
    QuizGame.generate();
  });



  QuizGame.init();
  QuizGame.renderOptions();
});
