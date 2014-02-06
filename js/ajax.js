var $placeholder = $('.placeholder');

$('.btn-load').on('click', function (){
	$placeholder.load('loaded-in.html');
});


var rand = Math.round( Math.random() * 2);
var file = 'veg-' + rand + '.html'; /* creates full name of the file */

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

