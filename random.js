//This script uses your selected list to pick a random item
//Thanks (https://github.com/MilanDonhowe) for your amazing code!

var listItems = [];

window.onload = function() {
  document.getElementById("selectButton").onclick = randomSelector;
  document.getElementById("editButton").onclick = editPrep;
}
let editPrep = () => {
	
  let list = document.getElementById("listSelect").value;
	
  let port = chrome.extension.connect({
    name: "Save List Items"
  });
  port.postMessage(list);
}
let randomSelector = () => {
	
  let list = document.getElementById("listSelect").value;
	
  let port = chrome.extension.connect({
    name: "Load Student Names"
  });
  port.postMessage(list);
  
  port.onMessage.addListener(function(msg) {
    console.log("message received");
    console.log(msg);
    listItems = msg;
    if (listItems != []) {
      if(listItems[Math.floor(Math.random() * listItems.length)] != undefined){
        let selected = listItems[Math.floor(Math.random() * listItems.length)];
        document.getElementById("result").textContent = selected;
      } else {
        document.getElementById("result").textContent = "To add items hit Edit"
      }
    }
  });
}