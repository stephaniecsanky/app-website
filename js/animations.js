/* My animation file */
var $win = $(window);
var $sun = $('.sun');
var $dipper = $('.dipper');
var $ships = $('.ships img') /* Unlike other above variables, this is 4 separate imgs, a collection of images */



$('.ships-section').waypoint(function () {
	$ships.eq(0).addClass('js-ships-delay-1');
	$ships.eq(2).addClass('js-ships-delay-3');
	$ships.eq(3).addClass('js-ships-delay-2');
	$ships.addClass('js-ships-animate');
}, {offset: '60%'});




