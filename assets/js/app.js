;(function ($) {
	'use strict';
	let windowWidth = $(window).width();

	let initSlideBanner = function () {
		if ($('#slideBanner').length > 0) {
			new Swiper('#slideBanner', {
				loop: false,
				simulateTouch: false,
				speed: 450,
				navigation: {
					nextEl: '#slideBanner .slide-button-next',
					prevEl: '#slideBanner .slide-button-prev',
				},
				autoplay: {
					delay: 10000,
					disableOnInteraction: false,
				},
			});
		}
	}

	$(function () {
		initSlideBanner();
	});
})(jQuery);