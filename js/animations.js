var $feature = $('.feat-list img') /* Unlike other above variables, this is 4 separate imgs, a collection of images */


$('.features').waypoint(function () {
	$feature.eq(0).addClass('js-feature-delay-1');
	$feature.eq(2).addClass('js-feature-delay-3');
	$feature.eq(3).addClass('js-feature-delay-2');
	$feature.eq(5).addClass('js-feature-delay-6');
	$feature.eq(4).addClass('js-feature-delay-4');
	$feature.eq(6).addClass('js-feature-delay-5');
	$feature.addClass('js-feature-animate');
}, {offset: '60%'});

