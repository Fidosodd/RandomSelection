window.onload = function() {
document.getElementById("mybutton").onclick = randomSelector;
}
function randomSelector() {
	var classSize = 20
	var randomChoice = Math.floor(Math.random() * classSize); 
	document.write(randomChoice)
  }
