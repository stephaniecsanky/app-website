var $placeholder = $('.placeholder');
var rand = Math.round( Math.random() * 3);
var file = 'testimonial-' + rand + '.html'; /* creates full name of the file */

$('.rand-test').load(file);

	// Automaticaly load the dino.json file as soon as the webpage loads.
var quoteData = $.ajax('testimonials.json', {
	// This tells jQuery we are loading a JSON file and to parse it properly
	dataType: 'json'
});


// Because AJAX takes time to download things off the internet, .done will be triggered after jQuery is downloaded
quoteData.done(function (data) {
	var quote = Math.round( Math.random() * data.length - 1);

	$('.user-name').html(data[quote].name);
	$('.app-quote').html(data[quote].quote);
});

