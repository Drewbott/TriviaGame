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

var number = 90;
var intervalId;

var correct = 0;
var incorrect=0;
var questions = [
{question: "The Athletics were in Philadelphia when their franchise began in the American League in 1901. Who was their manager in that season?", 
answers: ["Connie Mack", "Jimmy Collins", "John McGraw", "Hugh Duffy"],
correctAnswer: "Connie Mack"},
{question: "After a stint in Kansas City the team officially moved to Oakland in what year?",
answers: ["1961", "1966", "1968", "1969"],
correctAnswer: "1968"},
{question: "What starting pitcher did the Athletics acquire in the trade that sent Gio Gonzalez to the Nationals ?",
answers: ["Tommy Milone", "Jon Lester", "Jarrod Parker", "Bartolo Colon"],
correctAnswer: "Tommy Milone"},
{question: "In 1990, Rickey Henderson surpassed Ty Cobb as the AL's all-time leader in career stolen bases with his _____ stolen base",
answers: ["864", "759", "819", "893"],
correctAnswer: "893"},
{question: "What was 'Catfish' Hunter's real first name?",
answers: ["Bob", "Tim", "Jim", "Albert"],
correctAnswer: "Jim"},
{question: "Who won 1987 Rookie of the Year",
answers: ["Mark McGwire", "Jose Canseco", "Rickey Henderson", "Rob Nelson"],
correctAnswer: "Mark McGwire"},
{question: "What number did A's pitcher, Barry Zito wear?",
answers: ["7", "17", "75", "15"],
correctAnswer: "75"},

];

// Functions go here:

function startTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
  function decrement() {
      number--;
      $("#timeleft").text(number)
      if (number === 0) {
          stop();
          calculateScore();
          alert("Time's up!")
          displayScore();

      }
    }
   function stop(){
       clearInterval(intervalId);
   }

// answerTracker
var initializeGame = function(){
    for (var i = 0; i<questions.length; i++){
        var questionDiv = $("<div>");
        questionDiv.html("<h2>" + questions[i].question + "</h2>")
        for (var j = 0; j<questions[i].answers.length; j++){
            questionDiv.append(`<input type='radio' name='question-${i}' value='${questions[i].answers[j]}'> ${questions[i].answers[j]}`);
            $("#questions").append(questionDiv);
        }
    }
}

            $("#end").on( "click", function (){

                
                stop();
                calculateScore();
                displayScore();
                

                alert("Correct: " + correct);
                alert("Incorrect: " + incorrect);
            })
            

//             questionDiv.append("<input type='radio' ans="+questions[i].answers[j]+" name="+"q"+i+">" + questions[i].answers[j])
//             }
//         $("#questions").append(questionDiv)
        
//     }
// }


// $("#end").on("click", function(){
   
//     for (let i = 0; i < questions.length; i++) {   
//     if($("input[name=q"+i+"]:checked").length>0){
//         if($("input[name=q"+i+"]:checked")[0].getAttribute("ans")==questions[i].correctAnswer) {
//             correct ++;
//         }  
//     }else{
        
//         incorrect ++;
//     }
//     }
//     stop()
// })

function displayScore() {
    $("#results").html("<h2>Correct: " + correct + "</h2><h2>Incorrect: " + incorrect + "</h2>");
}

function calculateScore() {
    for (var i = 0; i < questions.length; i++) {
        // debugger;
        //take the input name and store as a variable 
        if (document.querySelector(`input[name="question-${i}"]:checked`) == null) {
            incorrect++;
        } else {
            var answer = document.querySelector(`input[name="question-${i}"]:checked`).value;
            if(answer == questions[i].correctAnswer) {
                correct++;
            } else {

                incorrect++;
            }
        }
        

    }
}

function quizStart(){
    startTimer()
    initializeGame()

}
$("#start").on("click", quizStart);
// document.querySelector("#start").innerText = unsortedArr.join(", ");



// showResults = function(){}


 