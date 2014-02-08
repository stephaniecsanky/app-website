var $placeholder = $('.placeholder');

var rand = Math.round( Math.random() * 3);
var file = 'testimonial-' + rand + '.html'; /* creates full name of the file */

$('.rand-test').load(file);

$.get('testimonials.json', function(data){
	var quote = Math.round( Math.random() * data.length - 1);

	$('.user-name').html(data[testimonials].name);
	$('.app-quote').html(data[testimonials].quote);
});