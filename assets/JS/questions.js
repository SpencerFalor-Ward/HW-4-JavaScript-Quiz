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

var getQuestion = function(e) {
  $(".main").empty();
  var currentQuestion = questions[questionIndex];

  $(".main").html(currentQuestion.title);
  currentQuestion.choices.forEach(function(choice, i) {
    var choiceNode = $("<button class='color'>");
    choiceNode.attr("value", choice);
    choiceNode.text(choice);
    console.log(choice);
    choiceNode.click(questionClick);
    $(".main").append(choiceNode);
  });
};

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
