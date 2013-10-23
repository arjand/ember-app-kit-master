var Translations = {
	'todos': {
		'todos': 'todos Arr!',
		'editInstructions': 'Double-clicky them thar todo to change it matey',
		'clearCompleted': 'Send {{count}} completed off the plank',
		'all': 'All',
		'active': 'Alive',
		'completed': 'Dead',
		'itemsLeft': {
			'one': 'item left',
			'other':'items left'
		}
	}
  
};

// add translations to global object because Ember-i18n is not module ready
Em.I18n.translations = Translations;

