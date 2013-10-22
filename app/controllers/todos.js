var TodosController = Ember.ArrayController.extend({
	
	actions: {		
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
		},
		clearCompleted: function(){
			var completed = this.filterProperty('isCompleted', true);
			completed.invoke('deleteRecord');
			completed.invoke('save');
		}
	},
	allAreDone: function(key,value){
		if (value === undefined) { // getter
			return !!this.get('length') && this.everyBy('isCompleted', true);	
		} else {  // setter
			this.setEach('isCompleted', value);
			this.invoke('save');
			return value;
		}		
	}.property('@each.isCompleted'),
	
	hasCompleted: function(){
		return this.get('completed') > 0;
	}.property('completed'),

	completed: function(){
		return this.filterProperty('isCompleted', true).get('length');
	}.property('@each.isCompleted'),

	remaining: function() {
		return this.filterBy('isCompleted', false).get('length');
	}.property('@each.isCompleted'),

	inflection: function () {
		var remaining = this.get('remaining');
		return remaining === 1 ? 'item' : 'items';
	}.property('remaining')

});

export default TodosController;