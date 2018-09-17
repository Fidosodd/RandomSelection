window.onload = function() {
document.getElementById("mybutton").onclick = randomSelector;
}

function randomSelector() {
	
	{
    var rawFile = new XMLHttpRequest();
	var filename = document.getElementById("list").value;
    rawFile.open("GET", filename, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                /*document.write(allText);*/
				var splitString = allText.split("\n");
				Length = splitString.length;
				/*var test = allText.slice(2, 8);*/
				/*document.write(splitString);*/
				
				var classSize = Length
				var randomChoice = Math.floor(Math.random() * classSize); 
				/*document.write(randomChoice)*/
				document.getElementById("result").innerHTML = (splitString[randomChoice])
				
            }
        }
    }
    rawFile.send(null);
}
  }
