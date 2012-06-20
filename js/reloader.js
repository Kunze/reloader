var reloader = {
	reload:function(pattern)
	{
		chrome.tabs.getAllInWindow(null, function(tabs){
			tabs.forEach(function(tab){
				if (tab.url.indexOf(pattern) > -1)
					chrome.tabs.reload(tab.id);
			});
		});
	},
	getPatterns: function(){
		return localStorage.getItem("patterns") === null ? [] : JSON.parse(localStorage.getItem("patterns"));
	},
	setPatterns: function(patterns){
		localStorage.setItem("patterns", JSON.stringify(patterns));
	}
};