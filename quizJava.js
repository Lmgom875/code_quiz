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
var score = document.getElementById("score");
var timer = document.getElementById("timer");
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

//Variables for Question Maker

var lastQuestion = questions.length -1;
var nowQuestion = 0;

//Variable for Questions Verification

var userAnswer = "";

//Variable for Score

var score = 0;

/* -------------------------- */
/* Function*/
/* -------------------------- */

//Function for create the question on screen
function questionCreator (){
    btnStart.style.visibility = "hidden";
    selecMulti.style.visibility = "visible";
    var q = questions[nowQuestion];
    questionsTitle.innerHTML = "<h1>" + q.questionTitle + "</h1>";
    questionsZone.innerHTML = "<p>" + q.question + "</p>";
    btn1.innerHTML = q.choiceA;
    btn2.innerHTML = q.choiceB;
    btn3.innerHTML = q.choiceC;
    btn4.innerHTML = q.choiceD;
    //nowQuestion++;
    //console.log(nowQuestion);

}

//Function for question verification
function questionVerification (){
    if (userAnswer == questions[nowQuestion].correct){
        score + 20;
        answerIsCorrect();
    }else{
        //timer decrease by 5 sec
        answerIsIncorrect();
    }
    if (nowQuestion < lastQuestion){
        nowQuestion++;
        questionCreator();
    }else{
        finalMessage();
    }
}


/* -------------------------- */
/* Events*/
/* -------------------------- */

//Start Button
btnStart.addEventListener('click' , questionCreator)

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
    funciones answerIsCorrect, answerIsIncorrect, finalMessaje
    funsiones para vrear las div en el documento (para que se vea en el mismo sitio)
    timer
    funcion de clear
    funcion de quit */