$(document).ready(function(){
var $win = $(window);

var $features = $('.feat-list img'); /* Unlike other above variables, this is separate imgs, a collection of images */


$('#features').waypoint(function(direction) {
	$features.eq(0).addClass('js-feature-delay-1');
	$features.eq(2).addClass('js-feature-delay-5');
	$features.eq(3).addClass('js-feature-delay-2');
	$features.eq(5).addClass('js-feature-delay-6');
	$features.eq(4).addClass('js-feature-delay-4');
	$features.eq(6).addClass('js-feature-delay-3');
	$features.addClass('js-feature-animate');
}, {offset: '35%'}); 


});


/* NOTE:
Play around with the page before showing him, like get a good point where it works and then refresh when he comes to check.

When I type this in the console in Chrome my animation works.

var $features = $(".feat-list img"); $features.eq(0).addClass('js-feature-delay-1');
	$features.eq(2).addClass('js-feature-delay-5');
	$features.eq(3).addClass('js-feature-delay-2');
	$features.eq(5).addClass('js-feature-delay-6');
	$features.eq(4).addClass('js-feature-delay-4');
	$features.eq(6).addClass('js-feature-delay-3');
	$features.addClass('js-feature-animate');
	
	*/




