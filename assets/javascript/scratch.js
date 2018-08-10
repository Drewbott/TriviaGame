questionDiv.append(`<input type='radio' name='question-${i}' value='${questions[i].answers[j]}'> ${questions[i].answers[j]}`);
            $("#questions").append(questionDiv);
        }
    }
}

            $("#end").on( "click", function (){
                for (var i = 0; i < questions.length; i++) {
                    // debugger;
                    //take the input name and store as a variable 
                    var answer = document.querySelector(`input[name="question-${i}"]:checked`).value
                    // $('input:radio[name=question-'+[i],':checked').val();
                    // debugger;
                    if(answer == questions[i].correctAnswer[0]) {
                        correct++;
                    } else {

                        incorrect++;
                    }
                }
                stop()
            })