import Resolver from 'resolver';
import registerComponents from 'appkit/utils/register_components';
import editTodoView from 'appkit/views/edit_todo';
import Translations from 'appkit/i18n/translations';

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver
});

App.initializer({
  name: 'Register Components',
  initialize: function(container, application) {
    registerComponents(container);
  }
});

Ember.Handlebars.helper('edit-todo', editTodoView);

// add translations to text fields. Any attribute with a name that ends in "Translation" will be translated.
Ember.TextField.reopen(Em.I18n.TranslateableAttributes);

export default App;
