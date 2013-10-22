/**
 * Looks up the locale in the URL and then asynchronously loads the JSON file
 * with the correct translations. 
 * Currently locale is stored in the url like: http://mysite.com/en
 */

var language = "en",
		supported_languages = [
			'pirate',
			'fr'
		];

supported_languages.forEach(function(element, index, array) {
	if(window.location.href.indexOf('/' + element ) > -1) {
		language = element;
		return false; // stop loop
	}
});

$.ajax({
	url: "/assets/translations/" + language + ".js"
});

export default {};