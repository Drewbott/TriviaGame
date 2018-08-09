// Create a Trivia Game

// A start button will initialize the game 
// on click button initializeGame

// When the game begins, a timer is displayed and begins couting down at the top of the page.
// setInterval

// 8 Multiple Choice questions are displayed with 4 mutiple choice answers, using radio buttons
// We need an array of questions organized as objects so question is 

// When a right or wrong answer is selected show a  gif

// Once all questions are answered or time runs out show a scorecard showing correct, incorrect, and unanswered 

// Show a play again button to re start the game


// Variables go here
// timer
var intervalId;
var clockRunning = false;
var timer = 90;
// question object?
// counter

var correct = 0;
var unanswered=0;
var questions = [
{question: "The Athletics were in Philadelphia when their franchise began in the American League in 1901. Who was their manager in that season?", 
answers: ["Connie-Mack", "Jimmy-Collins", "John-McGraw", "Hugh-Duffy"],
correctAnswer: "Connie-Mack"},
{question: "After a stint in Kansas City the team officially moved to Oakland in what year?",
answers: ["1961", "1966", "1968", "1969"],
correctAnswer: "1968"}
// {question: ""}


];

if (!clockRunning) {
      
    intervalId = setInterval(timer.count, 1000);
    clockRunning = true;
  }
// Functions go here:
// answerTracker
var initializeGame = function(){
    for (var i = 0; i<questions.length; i++){
        var questionDiv = $("<div>");
        questionDiv.html("<h2>" + questions[i].question + "</h2>")
        for (var j = 0; j<questions[i].answers.length; j++){
            questionDiv.append("<input type='radio' ans="+questions[i].answers[j]+" name="+"q"+i+">" + questions[i].answers[j])
            }
        $("#questions").append(questionDiv)
        
    }
}


$("#end").on("click", function(){
   
    for (let i = 0; i < questions.length; i++) {   
    if($("input[name=q"+i+"]:checked").length>0){
        if($("input[name=q"+i+"]:checked")[0].getAttribute("ans")==questions[i].correctAnswer) {
            correct ++;
        }  
    }else{
        unanswered ++;
    }
    }
})
initializeGame()
// showResults = function(){}


 