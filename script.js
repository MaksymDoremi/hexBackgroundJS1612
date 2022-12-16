let red;
let green;
let blue;

setInterval(timer, 1000);

async function timer(){

	const date = new Date();

	red = date.getHours();
	green = date.getMinutes();
	blue = date.getSeconds();

	if(red < 10) red="0"+red;
	if(green < 10) green="0"+green;
	if(blue < 10) blue="0"+blue;

	document.getElementById("time").innerHTML = "#"+red+""+green+""+blue;
	document.getElementById("body").style.backgroundColor = '#'+red+""+green+""+blue;
}