var secondsLeft = 75;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time Left: " + secondsLeft ;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

var questions = [
    {
        question: "What is Javascript?",
        answers =["Coffee", "A way of writing","A programming language", "A stained script"],
        answer: 3
    },
    {
        question: "Arrays in Javascript can be used to store_____",
        answers =["Other Arrays", "Numbers","Strings", "All of the above"],
        answer: 4
    },
    {
        question: "Commonly used data types do not include______",
        answers =["Booleans", "Balloons","Strings", "Numbers"],
        answer: 2
    },
    {
        question: "Numbers are enclosed in parenthesis.",
        answers =["True", "False"],
        answer: 2
    },
]
