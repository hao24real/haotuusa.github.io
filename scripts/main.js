
// var square_button = document.getElementById('square_button');
// var circle_button = document.getElementById('circle_button');
// var user_button = document.getElementById('user_button');
var shape_button = document.getElementById('shape_button');
var theme = document.getElementsByClassName('theme');
var jumbo = document.getElementById('main_jumbo');

//default bubbleShape start as circle
bubbleShape = 'circle';

//set all the color's RGB
var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [red, orange, green, blue, purple];


//changing shape of button
shape_button.onclick = function(){
        if(bubbleShape === 'circle')
        {
                bubbleShape = 'square';
                shape_button.innerHTML = 'Circle Bubble';
                shape_button.style.borderRadius = "0px";
                for (i = 0; i < theme.length; i++) {
                        theme[i].style.borderRadius = "0px";
                }
                jumbo.style.borderRadius = "0px";
        }
        else
        {
                bubbleShape = 'circle';
                shape_button.innerHTML = 'Square Bubble';
                shape_button.style.borderRadius = "40px";
                for (i = 0; i < theme.length; i++) {
                	theme[i].style.borderRadius = "50px";
                }
                jumbo.style.borderRadius = "500px";
		
        }
        drawName('WELCOME', letterColors);
}


drawName('WELCOME', letterColors);

bounceBubbles(); 





