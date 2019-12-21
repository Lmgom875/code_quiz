/* -------------------------- */
/* Variables and Objects */
/* -------------------------- */

//Question Objects
var questions = [
    {
        question : "What year comming out the first Starwar movie?",
        choiceA : "1977",
        choiceB : "1984",
        choiceC : "1986",
        choiceD : "2011",
        correct : "A"
    },{
        question : "What is the name of the actress who plays Princess Leia??",
        choiceA : "Harrison Ford",
        choiceB : "Daisy Ridley",
        choiceC : "Carrie Frances Fisher",
        choiceD : "Mark Hamill",
        correct : "C"
    },{
        question : "What is the name of the wookie co-pilot of Han Solo??",
        choiceA : "Lando Calrissian",
        choiceB : "Jabba the Hutt",
        choiceC : "Boba Fett",
        choiceD : "Chewbacca",
        correct : "D"
    },{
        question : "What are the names of Luke's droids?",
        choiceA : "R2-D2 and C-3PO",
        choiceB : "IG-88 and 8D8",
        choiceC : "BB-8 and 2-1B",
        choiceD : "AZI-3 and U-3PO",
        correct : "A"
    },{
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
var quiz = document.getElementById("quiz");
var questions = document.getElementById("questions");
var selecMulti = document.getElementById("selecMulti");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var answer = document.getElementById("answer");
var final = document.getElementById("final");

//Variables for Question Maker

var lastQuestion = questions.length -1;
var nowQuestion = 0;

/* -------------------------- */
/* Function*/
/* -------------------------- */

alert("aodwoqdk");


/* -------------------------- */
/* Events*/
/* -------------------------- */