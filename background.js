chrome.extension.onConnect.addListener(function(port) {
	
	console.log("Connected... ")

	port.onMessage.addListener(function(msg) {
		console.log("message received " + Array.isArray(msg));
		
		
		if (Array.isArray(msg)){
			
			let test = msg[0];
			
			switch(test){
				
				case "list1":
					msg.shift();
					console.log(msg);
					chrome.storage.local.set({"list1": msg}, function(){
						console.log(msg);
					});
					break;
				case "list2":
					msg.shift();
					console.log(msg);
					chrome.storage.local.set({"list2": msg}, function(){
						console.log(msg);
					});
					break;
					
				case "list3":
					msg.shift();
					console.log(msg);
					chrome.storage.local.set({"list3": msg}, function(){
						console.log(msg);
					});
					break;
					
				case "list4":
					msg.shift();
					console.log(msg);
					chrome.storage.local.set({"list4": msg}, function(){
						console.log(msg);
					});
					break;
					
				case "list5":
					msg.shift();
					console.log(msg);
					chrome.storage.local.set({"list5": msg}, function(){
						console.log(msg);
					});
					break;
				
				case "list6":
					msg.shift();
					console.log(msg);
					chrome.storage.local.set({"list6": msg}, function(){
						console.log(msg);
					});
					break;
					
				case "list7":
					msg.shift();
					console.log(msg);
					chrome.storage.local.set({"list7": msg}, function(){
						console.log(msg);
					});
					break;
					
				case "list8":
					msg.shift();
					console.log(msg);
					chrome.storage.local.set({"list8": msg}, function(){
						console.log(msg);
					});
					break;
				
			}
			
		} else {
		
			switch (msg){
		
				case "list1":
					chrome.storage.local.get({"list1": []}, function(data){
						console.log(data.list1);
						port.postMessage(data.list1);
					});
					break;
				case "list2":
					chrome.storage.local.get({"list2": []}, function(data){
						console.log(data.list2);
						port.postMessage(data.list2);
					});
					break;
				case "list3":
					chrome.storage.local.get({"list3": []}, function(data){
						console.log(data.list3);
						port.postMessage(data.list3);
					});
					break;
				case "list4":
					chrome.storage.local.get({"list4": []}, function(data){
						console.log(data.list4);
						port.postMessage(data.list4);
					});
					break;
				case "list5":
					chrome.storage.local.get({"list5": []}, function(data){
						console.log(data.list5);
						port.postMessage(data.list5);
					});
					break;
				case "list6":
					chrome.storage.local.get({"list6": []}, function(data){
						console.log(data.list6);
						port.postMessage(data.list6);
					});
					break;
				case "list7":
					chrome.storage.local.get({"list7": []}, function(data){
						console.log(data.list7);
						port.postMessage(data.list7);
					});
					break;
				case "list8":
					chrome.storage.local.get({"list8": []}, function(data){
						console.log(data.list8);
						port.postMessage(data.list8);
					});
					break;
			}
		}
		
		
	});
});

