var EditTodoView = Ember.TextField.extend({
	didInsertElement: function () {
		this.$().focus();
	}
});

export default EditTodoView;