//This script reads then writes to the chrome storage
//Thanks (https://github.com/MilanDonhowe) for your amazing code!

var listSave = 0;

window.onload = function() {
  document.getElementById("saveButton").addEventListener("click", saveEdits);
  
  chrome.storage.local.get(['key'], function(value) {
          console.log('Value currently is ' + value.key);
  let list = value.key;
  
  listSave = list;
	
  let port = chrome.extension.connect({
    name: "Load List Items"
  });
  port.postMessage(list);
  
  port.onMessage.addListener(function(msg) {
    console.log("message received");
    console.log(msg);
    let listDisplay = msg;
    document.getElementById('listContent').value = listDisplay.join('\n');;
  });
        });
}
let saveEdits = () => {
	
  let textdata = document.getElementById('listContent').value;
	
  let stripped = textdata.split('\n');
	
  let listItems = stripped.filter(slimDown);
	
  function slimDown(value){
      return value != "" && value != undefined
  }
  listItems.unshift(listSave);
	
  let port = chrome.extension.connect({
    name: "Save List Items"
  });
  port.postMessage(listItems);
}