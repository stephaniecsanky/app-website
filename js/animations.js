/* My animation file */
var $win = $(window);

var $features = $('.feat-list img'); /* Unlike other above variables, this is separate imgs, a collection of images */



$('.features-section').waypoint(function () {

	$features.addClass('js-feature-animate');
}, {offset: '60%'});







