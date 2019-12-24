$(document).ready(function(){
/* -------------------------- */
/* Variables and Objects */
/* -------------------------- */
var questions = [
    {
        questionTitle : "Question 1",
        question : "What year comming out the first Starwar movie?",
        choiceA : "1977",
        choiceB : "1984",
        choiceC : "1986",
        choiceD : "2011",
        correct : "A"
    },{
        questionTitle : "Question 2",
        question : "What is the name of the actress who plays Princess Leia??",
        choiceA : "Harrison Ford",
        choiceB : "Daisy Ridley",
        choiceC : "Carrie Fisher",
        choiceD : "Mark Hamill",
        correct : "C"
    },{
        questionTitle : "Question 3",
        question : "What is the name of the wookie co-pilot of Han Solo??",
        choiceA : "Lando Calrissian",
        choiceB : "Jabba the Hutt",
        choiceC : "Boba Fett",
        choiceD : "Chewbacca",
        correct : "D"
    },{
        questionTitle : "Question 4",
        question : "What are the names of Luke's droids?",
        choiceA : "R2-D2 and C-3PO",
        choiceB : "IG-88 and 8D8",
        choiceC : "BB-8 and 2-1B",
        choiceD : "AZI-3 and U-3PO",
        correct : "A"
    },{
        questionTitle : "Question 5",
        question : "What is the name of Luke Skywalker's father?",
        choiceA : "Darth Maul",
        choiceB : "Darth Vader",
        choiceC : "Count Dooku",
        choiceD : "Kylo Ren",
        correct : "B"
    }
]
//General Variables

var nowQuestion = 0;
var userAnswer = "";
var score = 0;
var lastQuestion = questions.length -1;
//var test = 19;
//alert(questions[0].choiceA);




/* -------------------------- */
/* Function*/
/* -------------------------- */

//Create div
function createDiv (){
    $("#start").empty();
    $("#questionRow").append('<div class = "col-12 questions" id = "questions"><h1 id= "questionTitle">Pregunta 1</h1><br><h4 id= "questionLine">variable pregunta</h4></div>')
    $("#questionRow").append('<div class = "col-12 justify-content-around selecMulti" id = "selecMulti"></div>');
    $("#selecMulti").append('<div class = "col-4 btn-group-vertical btnGroup1" id = "btnGroup1"></div>');
    $("#selecMulti").append('<div class = "col-4 btn-group-vertical btnGroup2" id = "btnGroup2"></div>');
    $("#btnGroup1").append('<button class= "btnOption btnOption1 btn-primary" id= "btnOption1" value= A>Option 1</button>');
    $("#btnGroup1").append('<button class= "btnOption btnOption2 btn-primary" id= "btnOption2" value= B>Option 2</button>');
    $("#btnGroup2").append('<button class= "btnOption btnOption3 btn-primary" id= "btnOption3" value= C>Option 3</button>');
    $("#btnGroup2").append('<button class= "btnOption btnOption4 btn-primary" id= "btnOption4" value= D>Option 4</button>');
    //console.log(questions[0].questionTitle);
}

//Create questions
function questionsCreator (){
    var q = questions[nowQuestion];
    $("#questionTitle").text(q.questionTitle);
    $("#questionLine").text(q.question);
    $("#btnOption1").text(q.choiceA);
    $("#btnOption2").text(q.choiceB);
    $("#btnOption3").text(q.choiceC);
    $("#btnOption4").text(q.choiceD);
    //console.log(q.questionTitle);
}

//Question Verfication

function questionVerification (){
    if (nowQuestion < lastQuestion){
        if (userAnswer == questions[nowQuestion].correct){
            answerIsCorrect();
        }else{
            answerIsIncorrect();
        }
        nowQuestion++;
        questionsCreator();
    }else{
        if (userAnswer == questions[nowQuestion].correct){
            score = score+20;
        }
        finalMessage();
    }
}

//Question Answers

function answerIsCorrect(){
    $("#finalRow").append('<div class: "col-12 finalMessaje" id: "finalMessaje"><hr><h3>Correct Answer<br>20 Points</h3?</div>');
    score = score+20;
    setTimeout(function(){
        $("#finalRow").empty();
    }, 500);    
}

function answerIsIncorrect(){
    $("#finalRow").append('<div class: "col-12 finalMessaje" id: "finalMessaje"><hr><h3>Incorrect Answer<br>-15 Seconds</h3?</div>');
    //clearInterval(timeRun);
    //timer = timer-15;
    //startTime();
    setTimeout(function(){
        $("#finalRow").empty();
    }, 500); 
}

function finalMessage(){
    $("#questionRow").empty();
    $("#questionRow").append("<div class: 'col-12 finalMessaje' id: 'finalMessaje'><h1>You are done</h1><h3>Your score is: " + score);
    $("#finalRow").append('<div class: "col-12 Record" id: "Record"><p>Insert your name and press enter<p><input type= "text" name= "userName"></div>');
    $("#finalRow").append('<div class = "col-12 btn-group justify-content-around btnGroupFinal" id = "btnGroupFinal"></div>');
    $("#btnGroupFinal").append('<button class= "btnFinal btnRestart btn-success" id= "btnRestart">Restart</button>');
    $("#btnGroupFinal").append('<button class= "btnFinal btnQuit btn-danger" id= "btnQuit">Exit</button>');
}
/* -------------------------- */
/* Events*/
/* -------------------------- */

//Start Button

$("#start").click(function(){
    //console.log("test");
    createDiv();
    questionsCreator();
})

//Choice Button

$("#container").on('click','.btnOption', function(){
    userAnswer = $(this).attr('value');
    questionVerification();
    //console.log(userAnswer);
})

});