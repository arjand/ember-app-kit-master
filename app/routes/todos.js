var TodosRoute = Ember.Route.extend({
	model: function() {
		//window.alert('hi');
		//window.console.log(this.store.find('todo'));
		return this.store.find('todo');
	}	
});

export default TodosRoute;