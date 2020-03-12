
$(document).ready(function() {
  //Creating variable to track the question & "slide" numbers
  var questionCounter = 0;
  
  // timeout 
  var ansTimeout = 2000;
  
  //Creating score variables
  var correct = 0;
  var incorrect = 0;
  var missed = 0;
  
  //Creating array of user's answers
  var userAns = [];
  
  //Creating an array of objects with the questions, answer options, and correct answer
  var questions = [
    {
        question: "What is Javascript?",
        choices: ["Coffee", "A way of writing","A programming language", "A stained script"],
        choicesAnswer: 2    },
    {
        question: "Arrays in Javascript can be used to store_____",
        choices: ["Other Arrays", "Numbers","Strings", "All of the above"],
        choicesAnswer: 3
    },
    {
        question: "Commonly used data types do not include______",
        choices: ["Booleans", "Balloons","Strings", "Numbers"],
        choicesAnswer: 1
    },
    {
        question: "Numbers are enclosed in parenthesis.",
        choices: ["True", "False"],
        choicesAnswer: 1
    },
]
  //Function to submit answers
  function submitAns() {
    $("#submit").on("click", function(e) {
      e.preventDefault();
      userAns.length = 0;
        
      //Record user answer to question
      var userSelection = $("#responses input:radio[name=optionsRadios]:checked").val();
      userAns.push(userSelection);
      console.log(userAns);
      nextQ();
    });
  };
    
  //Creating question timer variables & functions
  var timeLeft = 8;
  var increment;
  
  function runTimer() {
    increment = setInterval(decrement, 1000);
  };
  
  function decrement() {
    timeLeft--;
    $("#time-left").html("Time remaining: " + timeLeft + " seconds");
    if (timeLeft === 0) {
      stopTimer();
      userAns.length = 0;		
      //Record user answer to question
      var userSelection = $("#responses input:radio[name=optionsRadios]:checked").val();
      userAns.push(userSelection);
      console.log(userAns);
      nextQ();
    };
  };
  
  function resetTimer() {
    timeLeft = 8;
    $("#time-left").html("Time remaining: " + timeLeft + " seconds");
  };
  
  function displayTimer() {
    $("#time-left").html("Answer Review");
  };
  
  function stopTimer() {
    clearInterval(increment);
  };
    
  });