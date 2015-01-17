// (function(){

// 	var count = 100;

// 	var timer = setInterval(function(){
// 		if(!count){
// 			clearInterval(timer);
// 		}
// 		chrome.browserAction.setBadgeBackgroundColor({color: '#0000FF'});
// 		chrome.browserAction.setBadgeText({text: ""+count});
// 		count--;
// 	},1000);
	
// })();