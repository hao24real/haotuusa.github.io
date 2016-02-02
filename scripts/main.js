var myName; //for setting the name for bubble
var square_button = document.getElementById('square_button');
var circle_button = document.getElementById('circle_button');
var user_button = document.getElementById('user_button');
//default bubbleShape start as circle
bubbleShape = 'circle';

//set all the color's RGB
var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [red, orange, green, blue, purple];



//pop up dialog box
function setUserName() {
        myName = prompt('Please enter your name.');
        localStorage.setItem('name', myName);
        drawName(myName, letterColors);
}

user_button.onclick = function(){
        setUserName();
}

//set bubble shape to square
square_button.onclick = function(){
        bubbleShape = 'square';
        drawName(myName, letterColors);
}
//set bubble shape to circle
circle_button.onclick = function(){
        bubbleShape = 'circle';
        drawName(myName, letterColors);
}

//no name in database yet, give dialog box prompt
if(!localStorage.getItem('name')) 
        setUserName();
//case for same user reload, name still there
else
{
        myName = localStorage.getItem('name');
        drawName(myName, letterColors);      
}

bounceBubbles(); 





