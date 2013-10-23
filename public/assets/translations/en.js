var Translations = {
	'todos': {
		'todos': 'todos',
		'editInstructions': 'Double-click the todo to edit it ',
		'clearCompleted': 'Delete {{count}} completed ',
		'all': 'All',
		'active': 'Active',
		'completed': 'Completed',
		'itemsLeft': {
			'one': 'item left',
			'other':'items left'
		}
	}
  
};

// add translations to global object because Ember-i18n is not module ready
Em.I18n.translations = Translations;