var TodosIndexRoute = Ember.Route.extend({
	model: function() {
		// model for this route is the same model for TodosRoute
		return this.modelFor('todos');
	}
});

export default TodosIndexRoute;