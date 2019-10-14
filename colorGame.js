// 5 part
var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add intial colors to square 
	squares[i].style.background = colors[i];

	//add click listeners to squares 
	squares[i].addEventListener("click", function(){
	  //grab color of clicked square
	  var clickedColor = this.style.background;
	  //compare color to pickedColor
	  console.log(clickedColor, pickedColor);
	  if(clickedColor === pickedColor){
	  	messageDisplay.textContent = "Correct!";
	  	changeColors(clickedColor);
	  	h1.style.background = clickedColor;
	  }else{
	  	this.style.background = "#232323";
	  	messageDisplay.textContent = "Try again";
	  }

	});
}
function changeColors(color){
	//loop throught all squares 
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
	//change each color to match given color
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]; 
}
function generateRandomColors(num){
	//make an array
	var arr = [];
	//repat num times
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
		//ger random color and push into arr

	}
	//return an array
	return arr; 
}
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g + ", " + b + ")";
}