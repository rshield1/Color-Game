var colors = generateRandomColors(6);
var squares  =  document.querySelectorAll(".square");
var pickedColor = pickColor()
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay")
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for  ( var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.background = colors[i];

    //add event listeners to squares
    squares[i].addEventListener("click", function(){
     //grab color of clicked square
    var clickedColor = this.style.background
    //commpare color to picked color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
    }      else {
            this.style.background = "black";
            messageDisplay.textContent = "Try Again"
    }
    })
}


function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
         //change each color to match give color
        squares[i].style.background = color;
    }

}


function pickColor() {
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = []
    //add num random colors to array
    for ( var i = 0; i < num; i++) {
        //get random color and push into arr
     arr.push(randomColor())
    }
    //return that array
    return arr;
}


function randomColor() {
    //pick a "red" for 0 -255
    var r =  Math.floor(Math.random() * 256);
    //pick a "green" from 0 -255
    var g =  Math.floor(Math.random() * 256);
    //pick a "blue" from 0 -255
    var b =  Math.floor(Math.random() * 256);
   // "rgb(r, g, b)" Dont forget to add spaces after commas (small bug!)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}