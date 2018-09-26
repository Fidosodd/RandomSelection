var periodChange = 0;

window.onload = function() {
	document.getElementById("editButton").onclick = storageEditor;
  document.getElementById("saveButton").onclick = saveEdits;
}
  function storageEditor() {
    var listname = document.getElementById("listSelect").value;
    console.log('Value currently is ' + listname);
    chrome.storage.local.get(['listname'], function(data) {
          console.log('Value currently is ' + data.listname);
          document.getElementById('listContent').textContent = data.listname;
        });
    let port = chrome.extension.connect({
      name: "Load Student Names"
    });

    port.postMessage(listname);
    port.onMessage.addListener(function(msg) {
      console.log("message received");
		
      console.log(msg);
    });
  }
  function saveEdits() {
    var listitems = document.getElementById("listContent").value;
    var listname = document.getElementById("listSelect").value;
    console.log('Value currently is ' + listitems);
    console.log('Value currently is ' + listname);
    chrome.storage.local.set({'listname': listitems}, function(data) {
          console.log('Value currently is ' + data.listname);
        });
  }