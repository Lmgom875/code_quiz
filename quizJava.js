/* -------------------------- */
/* Variables and Objects */
/* -------------------------- */

//Question Objects
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

//Variable for DOM
var container = document.getElementById("container");
var scorePoints = document.getElementById("scorePoints");
var timerRow = document.getElementById("timerRow");
var start = document.getElementById("start");
var btnStart = document.getElementById("btnStart");
var quiz = document.getElementById("quiz");
var questionsTitle = document.getElementById("questionsTitle");
var questionsZone = document.getElementById("questions");
var selecMulti = document.getElementById("selecMulti");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var answer = document.getElementById("answer");
var final = document.getElementById("final");
var btnPrueba = document.getElementById("btnPrueba");
var timerNumber = document.getElementById("timerNumber");
var timeRun = "";

//Variables for Question Maker

var lastQuestion = questions.length -1;
var nowQuestion = 0;
var timeRun = "";
var timer = 90;

//Variable for Questions Verification

var userAnswer = "";

//Variable for Score

var score = 0;



/* -------------------------- */
/* Function*/
/* -------------------------- */

//Function for create the question on screen
function questionCreator1 (){
    //container.removeChild(start);
    //createChild();
    btnStart.style.visibility = "hidden";
    selecMulti.style.visibility = "visible"; 
    startTime();
    var q = questions[nowQuestion];
    questionsTitle.innerHTML = "<h1>" + q.questionTitle + "</h1>";
    questionsZone.innerHTML = "<p>" + q.question + "</p>";
    scorePoints.innerHTML = "<p>score: " + score + "</p>";
    btn1.innerHTML = q.choiceA;
    btn2.innerHTML = q.choiceB;
    btn3.innerHTML = q.choiceC;
    btn4.innerHTML = q.choiceD;
    //nowQuestion++;
    //console.log(score);

}

function questionCreator (){
    //container.removeChild(start);
    //createChild();
    //btnStart.style.visibility = "hidden";
    //selecMulti.style.visibility = "visible"; 
    //startTime();
    var q = questions[nowQuestion];
    questionsTitle.innerHTML = "<h1>" + q.questionTitle + "</h1>";
    questionsZone.innerHTML = "<p>" + q.question + "</p>";
    scorePoints.innerHTML = "<p>score: " + score + "</p>";
    btn1.innerHTML = q.choiceA;
    btn2.innerHTML = q.choiceB;
    btn3.innerHTML = q.choiceC;
    btn4.innerHTML = q.choiceD;
    //nowQuestion++;
    //console.log(score);

}

//Function for question verification
function questionVerification (){
    if (userAnswer == questions[nowQuestion].correct){
        score = score+20;
        answerIsCorrect();
    }else{
        clearInterval(timeRun);
        timer = timer - 15;
        startTime();
        answerIsIncorrect();
    }
    if (nowQuestion < lastQuestion){
        nowQuestion++;
        questionCreator();
        //console.log(score);
    }else{
        scorePoints.innerHTML = "<p>score: " + score + "</p>";
        finalMessage();
    }
}

//Funcion correcta
function answerIsCorrect (){
    if (nowQuestion < lastQuestion){
    answer.style.visibility = "visible";
    answer.innerHTML = "<hr><h6>Correct  answer</h6>";
    setTimeout(function(){
        answer.style.visibility = "hidden";
    }, 2000);}
}

//Funcion incorrecta
function answerIsIncorrect (){
    if (nowQuestion < lastQuestion){
    answer.style.visibility = "visible";
    answer.innerHTML = "<hr><h6>Wrong answer -15 seconds</h6>";
    setTimeout(function(){
        answer.style.visibility = "hidden";
    }, 2000);}
}

//Funcion Final
function finalMessage (){
    clearInterval(timeRun);
    container.removeChild(start);
    container.removeChild(quiz);
    final.style.visibility = "visible";
    final.innerHTML = "<h2>You are done</h2><br><h4>Your score is: " + score;
    setTimeout(function(){
        final.style.visibility = "hidden";
    }, 2000);
}

//Funcion Time out

function timeOut (){
    quitChild();
    final.style.visibility = "visible";
    final.innerHTML = "<h2>You are out of time.</h2><br><h4>Your score is: " + score;

}

//Funtion createChild

// function createChild (){
//     var createDiv = document.createElement('button');
//     var insideChild = document.createTextNode('test');
//     createDiv.appendChild(insideChild);
//     createDiv.setAttribute('class','testDiv')
//     createDiv.setAttribute('class','testDiv2')

//     quiz.appendChild(createDiv);
//}

//Funtion quitChild

function quitChild (){
    container.removeChild(quiz);
    


}
//Funcion Timer
function startTime(){
    timeRun = setInterval(timeDecre, 1000);
    function timeDecre(){
        timer--;
        if (timer <= 0){
            timeOut();
            clearInterval(timeRun)
        }
        timerNumber.innerHTML = "<p>timer: " + timer + "</p>";
        console.log(timer);
}
}



/* -------------------------- */
/* Events*/
/* -------------------------- */

//Start Button
btnStart.addEventListener('click' , questionCreator1)

//Answer Buttons

btn1.addEventListener('click' , function(){
    userAnswer = "A";
    questionVerification();
})
btn2.addEventListener('click' , function(){
    userAnswer = "B";
    questionVerification();
})
btn3.addEventListener('click' , function(){
    userAnswer = "C";
    questionVerification();
})
btn4.addEventListener('click' , function(){
    userAnswer = "D";
    questionVerification();

})
/*Cosas sin hacer
    funsiones para vrear las div en el documento (para que se vea en el mismo sitio)
    funcion de clear
    funcion de quit */