window.onload = function() {
document.getElementById("selectButton").onclick = randomSelector;
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
				var splitString = allText.split("\n");
				var classSize = splitString.length;
				/*var test = allText.slice(2, 8);*/

				var randomChoice = Math.floor(Math.random() * classSize); 
				document.getElementById("result").textContent = (splitString[randomChoice])
				
            }
        }
    }
    rawFile.send(null);
}
  }
