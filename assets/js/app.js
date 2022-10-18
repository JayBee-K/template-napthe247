;(function ($) {
	'use strict';
	let windowWidth = $(window).width();

	let initSlideBanner = function () {
		if ($('#slideBanner').length > 0) {
			new Swiper('#slideBanner', {
				loop: false,
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

	let initSlidePartner = function () {
		if ($('#slidePartner').length > 0) {
			new Swiper('#slidePartner .swiper', {
				loop: false,
				speed: 450,
				spaceBetween: 30,
				navigation: {
					nextEl: '#slidePartner .slide-button-next',
					prevEl: '#slidePartner .slide-button-prev',
				},
				autoplay: {
					delay: 6000,
					disableOnInteraction: false,
				},
				breakpoints: {
					1200: {
						slidesPerView: 6,
					},
				},
			});
		}
	}

	let initScrollTop = function () {
		let windowHeight = $('body').height(),
			btnReturn = $('#scroll-top');
		$(window).scroll(function () {
			let ratioHeight = (parseInt($(document).scrollTop()) / parseInt(windowHeight) * 100);

			if (ratioHeight > 12.5) {
				btnReturn.addClass('is-show');
			} else {
				btnReturn.removeClass('is-show');
			}
		});

		btnReturn.click(function () {
			$('html').css('scroll-behavior', 'auto');
			$('html, body').animate({
				scrollTop: 0
			}, function () {
				$('html').css('scroll-behavior', 'smooth');
			});
		});
	}

	$(function () {
		initSlideBanner();
		initSlidePartner();
		initScrollTop();
	});
})(jQuery);