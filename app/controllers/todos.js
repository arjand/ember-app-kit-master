var TodosController = Ember.ArrayController.extend({
	boo: '',
	actions: {
		oh: function() {
			// great
			
		},
		createTodo: function() {
			// Get teh todo title seb y the "new Todo" text field
			var title = this.get('newTitle');
			if(!title.trim()) { return; }

			// Create the new Todo model
			var todo = this.store.createRecord('todo', {
				title: title,
				isCompleted: false
			});

			// Clear the "New Todo" text field
			this.set('newTitle', '');

			// save the model
			todo.save();
		}
	},
	arjanProp: {
		"yes": 1
	}

});

export default TodosController;