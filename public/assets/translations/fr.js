var Translations = {
	'todos': {
		'todos': 'todos (french)',
		'editInstructions': 'Double-clicky them thar todo to change it matey(french)',
		'clearCompleted': 'Send {{count}} completed off the plank(french)',
		'all': 'All(french)',
		'active': 'Alive(french)',
		'completed': 'Dead(french)'
	}
  
};

// add translations to global object because Ember-i18n is not module ready
Em.I18n.translations = Translations;

