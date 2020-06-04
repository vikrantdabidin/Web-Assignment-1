/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
    Created on : Jun. 3, 2020, 11:00:10 p.m.
    Author     : Vikrant Dabidin
    STUDENT ID: 991590150
    WEB ASSIGNMENT 1
*/

<script type="text/javascript">

function restart(){
document.location.href="index.html"
}

var position = 0, display1, display2, question, choice, choices, option1, option2, option3, option4, correctAnswer = 0;
// this is a multidimensional array with 4 inner array elements with 5 elements inside them
// if you don't want answers viewable in the code, then you should use PHP and mySQL database

var questions = [
                 ["In Pirates of the Caribbean, what was the name of Captain Jack Sparrow’s ship?","The Marauder", "The Black Pearl", "The Black Python", "The Slytherin", "B"],
                 ["Which one of these characters aren’t a part of the Friends group?", "Rachel", "Joey", "Gunther", "Monica", "C"],
                 ["What language is the most spoken worldwide?", "Chinese", "Spanish", "Arabic", "English", "D"]
                 ];
                 
 
function get(x){
    
 return document.getElementById(x);
 
}

function getQuestion(){
    
 display1 = get("display1");
 
 if(position >= questions.length){
 display1.innerHTML = "<h2>You got "+correctAnswer+" of "+questions.length+" questions correct</h2>";
 get("display2").innerHTML = "Test completed";

 position =3;
 
 correctAnswer = 0;

 return false;
 }
 
 get("display2").innerHTML = "Question "+(position+1)+" of "+questions.length;
 
 question = questions[position][0];
 option1 = questions[position][1];
 option2 = questions[position][2];
 option3 = questions[position][3];
 option4 = questions[position][4];
 
 display1.innerHTML = "<h3>"+question+"</h3>";

 display1.innerHTML += "<input type='radio' name='choices' value='A'> " + option1 + "<br>";
 display1.innerHTML += "<input type='radio' name='choices' value='B'> " + option2 + "<br>";
 display1.innerHTML += "<input type='radio' name='choices' value='C'> " + option3 + "<br>";
 display1.innerHTML += "<input type='radio' name='choices' value='D'> " + option4 + "<br><br>";
 
}

function checkAnswer(){

 choices = document.getElementsByName("choices");
 
 for(var counter=0; counter<choices.length; counter++){
     
 if(choices[counter].checked){
 choice = choices[counter].value;
 }
 
 }

 if(choice == questions[position][5]){
     
 correctAnswer++;
 }
 

 position++;

 getQuestion();
 
}

window.addEventListener("load", getQuestion, false);


function displayHelp(){    
    
    document.write("Answer the first question by clicking on the correct option") + "<br>";
    document.write("Then, click on the 'Enter Answer' or 'Next Question' to proceed to the next question") + "<br>";
    document.write("Your score will be displayed at the end") + "<br>";
    document.write("Click on 'Restart' to start over") + "<br>";
 
}


</script>


