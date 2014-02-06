/* My animation file */
var $win = $(window);
var $sun = $('.sun');
var $dipper = $('.dipper');
var $ships = $('.ships img') /* Unlike other above variables, this is 4 separate imgs, a collection of images */

$win.on('scroll', function () {
	// console.log($win.scrollTop() );
	$sun.css('transform', 'rotate(' +  $win.scrollTop() / 4  + 'deg)');
});

$('.dipper-section').waypoint(function () {
	$dipper.addClass('js-dipper-animate');
}, {offset: '60%'});

$('.ships-section').waypoint(function () {
	$ships.eq(0).addClass('js-ships-feature-1');
	$ships.eq(2).addClass('js-ships-delay-3');
	$ships.eq(3).addClass('js-ships-delay-2');
	$ships.addClass('js-ships-animate');
}, {offset: '60%'});




