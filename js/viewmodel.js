var viewModel = {
	items: ko.observableArray(reloader.getPatterns()),
	pattern: ko.observable(""),
	name: ko.observable(""),
	add: function(){
		viewModel.items.push({name:viewModel.name(), pattern: viewModel.pattern()});
		reloader.setPatterns(viewModel.items());
		viewModel.clear();
	},
	remove: function(e){
		viewModel.items.pop(e);
		reloader.setPatterns(viewModel.items());
	},
	reload: function(model){
		reloader.reload(model.pattern);
	},
	clear:function(){
		viewModel.pattern("");
		viewModel.name("");
	}
};

ko.applyBindings(viewModel);