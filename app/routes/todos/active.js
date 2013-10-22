var TodosActiveRoute = Ember.Route.extend({
	model: function() {
		return this.store.filter('todo', function(todo) {
			return !todo.get('isCompleted');
		});
	},
	renderTemplate: function(controller) {
		// we want to reuse the existing todos/index template even though route is changing
		this.render('todos/index', {controller: controller});
	}
});

export default TodosActiveRoute;