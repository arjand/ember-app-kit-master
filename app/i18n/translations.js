var Translations = {
	'todos': {
		'todos': 'todos',
		'editInstructions': 'Double-click to edit a todo',
		'clearCompleted': 'Clear completed',
		'all': 'All',
		'active': 'Active',
		'completed': 'Completed'
	}
  
};

// add translations to global object because Ember-i18n is not module ready
Em.I18n.translations = Translations;

export default Translations;