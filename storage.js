//This script reads then writes to the chrome storage
//Thanks (https://github.com/MilanDonhowe) for your amazing code!

window.onload = function() {
  document.getElementById("saveButton").addEventListener("click", saveEdits);
  
  let port = chrome.extension.connect({
    name: "Load List Items"
  });
  console.log('listSelection');
  port.postMessage('listSelection');
  
  port.onMessage.addListener(function(msg) {
    console.log("message received");
    console.log(msg);
    let list = msg;
    document.getElementById('listEdit').value = list;
    
    port.postMessage(list);
  
    port.onMessage.addListener(function(msg) {
    console.log("message received");
    console.log(msg);
    let listDisplay = msg;
    document.getElementById('listContent').value = listDisplay.join(', ');;
  });
  });
}
let saveEdits = () => {
	
  if (listChange == 0) {
      listChange = document.getElementById("listSelect").value;
  }
  let textdata = document.getElementById('listContent').value;
	
  let stripped = textdata.split(', ');
	
  let listItems = stripped.filter(slimDown);
	
  function slimDown(value){
      return value != "" && value != undefined
  }
  listItems.unshift(listChange);
	
  let port = chrome.extension.connect({
    name: "Save List Items"
  });
  port.postMessage(listItems);
}