// Code for potentially opening a new tab and sending it data.
		
		 var newURL = "chatpage.html";
		
		chrome.tabs.create({ url: newURL }, function(tab){
		  chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(){});
	});



