
// var to create questions array, contains 7 questions - index = 0 to 6
var questions = [
  {
    title:
      "What should appear at the very end of your JavaScript: The < script LANGUAGE = 'JavaScript' > tag ?",
    choices: [
      "The </script>",
      "The <script>",
      "The END statement",
      "None of the above"
    ],
    answer: "The </script>"
  },

  {
    title: "What is the correct JavaScript syntax to write 'Hello World'?",
    choices: [
      "System.out.println('Hello World')",
      "println('Hello World')",
      "document.write('Hellow World')",
      "response.write('Hello World')"
    ],
    answer: 'document.write("Hello World")'
  },

  {
    title: "Which of the following best describes JavaScript ?",
    choices: [
      "a low level programming language",
      "a scripting language precompiled in the browser",
      "a complicated scripting language",
      "an object oriented scripting language"
    ],
    answer: "an object oriented scripting language"
  },
  {
    title: "Which of the following is the structure of an if statement ?",
    choices: [
      "if(conditional expression is true) thenexecute this codeend if",
      "if(conditional expression is true)execute this codeend if",
      "if(conditional expression is true)   { then execute this code > ->}",
      "if(conditional expression is true) then { execute this code }"
    ],
    answer:
      "if(conditional expression is true)   { then execute this code > ->}"
  },
  {
    title: "What is meant by 'this' keyword in javascript ?",
    choices: [
      "It refers to current object",
      "It referes to previous object",
      "It is a variable which contains value",
      "None of the above"
    ],
    answer: "It refers to current object"
  },

  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  }
];

var questionIndex = 0;

// function that initiates post click of start button to start the game 
var getQuestion = function(e) {
 
//  empties content on main page to be replaced with quiz content
  $(".main").empty();


// var for current question that pulls from the index of the questions above 
  var currentQuestion = questions[questionIndex];

  // creates new h2 that is filled with the question so that CSS can be applied
  var questionNode = $("<h2 class ='questionTitle'>");
  $(".main").append(questionNode);
  $(".questionTitle").append(currentQuestion.title);

  console.log(questionNode);

  // Loops through the questions changing post click and applies class for CSS styling
  currentQuestion.choices.forEach(function(choice, i) {
    var choiceNode = $("<button class='choiceButton'>");
    choiceNode.attr("value", choice);
    choiceNode.text(choice);
    choiceNode.click(questionClick);
    $(".main").append(choiceNode);
    console.log(choice);
  });

  // adds <br> to buttons so they will stack
  $("button").after("<br>");

  // adds timer to the page and class for CSS
  $(".main").append("<div class = 'timer'>", "Time remaining: ");

  var totalSeconds = 105;
  var secondsElapsed = 0;
  var interval;
};

// function for clicking question anser right or wrong
var questionClick = function(e) {
  console.log("test");
  if (this.value === questions[questionIndex].answer) {
    alert("correct");
  }
  if (questionIndex === questions.length - 1) {
    alert("gameover");
    return;
  }
  questionIndex += 1;
  getQuestion();
  console.log(questionIndex);
  console.log(questions.length);
};

// function to start game upon Start button click 
$(".startBtn").click(function(e) {
  //   $(".main").empty();
  getQuestion();
  //   console.log(e);
  // // // function(e) {
  // //     for (var i = 0; i < questions.length; i++);

  // //     var questions = question[i];
  console.log(e);
  // }
});
// console.log(this);
