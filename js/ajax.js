var $placeholder = $('.placeholder');

$('.btn-load').on('click', function (){   // Button for loading an html page, not really needed for the testimonials section, it needs to trigger when you scroll 
	$placeholder.load('loaded-in.html');	  // there and maybe have an option to scroll through.
});


var rand = Math.round( Math.random() * 3);
var file = 'testimonial-' + rand + '.html'; /* creates full name of the file */

$('.rand-veg').load(file);

	// Automaticaly load the dino.json file as soon as the webpage loads.
var dinoData = $.ajax('dino.json', {
	// This tells jQuery we are loading a JSON file and to parse it properly
	dataType: 'json'
});


// Because AJAX takes time to download things off the internet, .done will be triggered after jQuery is downloaded
dinoData.done(function (data) {
	var dino = Math.round( Math.random() * data.length - 1);

	$('.dino-name').html(data[dino].name);
	$('.dino-period').html(data[dino].period);
	$('.dino-diet').html(data[dino].diet);
});

