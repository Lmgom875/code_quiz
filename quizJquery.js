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



/* -------------------------- */
/* Function*/
/* -------------------------- */

//Create div
function createDiv (){
    $("#start").remove();
    $("#container").append('<div class = "col-12 questions" id = "questions"><h1>Pregunta 1</h1><br><h4>variable pregunta</h4></div>')
    $("#container").append('<div class = "col-12 justify-content-around selecMulti" id = "selecMulti"></div>')
    $("#selecMulti").append('<div class = "col-4 btn-group-vertical btnGroup1" id = "btnGroup1"></div>');
    $("#selecMulti").append('<div class = "col-4 btn-group-vertical btnGroup2" id = "btnGroup2"></div>');
    $("#btnGroup1").append('<button class= "btnOption1 btn-primary" id= "btnOption1">Option 1</button>')
    $("#btnGroup1").append('<button class= "btnOption2 btn-primary" id= "btnOption2">Option 2</button>')
    $("#btnGroup2").append('<button class= "btnOption3 btn-primary" id= "btnOption3">Option 3</button>')
    $("#btnGroup2").append('<button class= "btnOption4 btn-primary" id= "btnOption4">Option 4</button>')

}


/* -------------------------- */
/* Events*/
/* -------------------------- */

//Start Button

$("#start").click(function(){
    console.log("test");
    createDiv();

})


});