window.onload = function() {
	document.getElementById("editButton").onclick = storageEditor;
  document.getElementById("saveButton").onclick = saveEdits;
}
  function storageEditor() {
    var listname = document.getElementById("listSelect").value;
    console.log('Value currently is ' + listname);
    chrome.storage.local.get(['listname'], function(result) {
          console.log('Value currently is ' + result.listname);
        });
    document.getElementById('listContent').textcontent = (splitString[result.listname]);
  }
  function saveEdits() {
    var listitems = document.getElementById("listContent").value;
    var listname = document.getElementById("listSelect").value;
    console.log('Value currently is ' + listitems);
    console.log('Value currently is ' + listname);
    chrome.storage.local.set({listname: listitems}, function(result) {
          console.log('Value currently is ' + result.listname);
        });
  }