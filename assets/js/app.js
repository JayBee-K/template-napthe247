;(function ($) {
	'use strict';
	let windowWidth = $(window).width();

	let initNavigationMobile = function () {
		if (windowWidth < 992) {
			$('#header .header-navigation').css('--header-height', $('#header').height() + 'px');

			if ($("#header .header-navigation > ul > li > ul").length) {
				$("#header .header-navigation").attr('id', 'hasMenu');
				$("#header .header-navigation > ul > li > ul").each(function (index) {
					$(this).prev().attr({
						"href": "#subMenu" + index,
						"data-bs-toggle": "collapse"
					});
					$(this).attr({
						"id": "subMenu" + index,
						"class": "list-unstyled mb-0 theme-gradient_before collapse",
						"data-bs-parent": "#hasMenu"
					});
				})
			}

			$('#call-navigation, #header-overlay').click(function () {
				if (!$('body').hasClass('is-navigation')) {
					$('body').addClass('is-navigation');
				} else {
					$("#header .header-navigation > ul > li > ul").collapse('hide');
					$('body').removeClass('is-navigation');
				}
			});
		}
	}

	let initSlideBanner = function () {
		if ($('#slideBanner').length > 0) {
			new Swiper('#slideBanner', {
				loop: false,
				speed: 450,
				navigation: {
					nextEl: '#slideBanner .slide-button-next',
					prevEl: '#slideBanner .slide-button-prev',
				}, autoplay: {
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
				spaceBetween: 15,
				navigation: {
					nextEl: '#slidePartner .slide-button-next',
					prevEl: '#slidePartner .slide-button-prev',
				}, autoplay: {
					delay: 6000,
					disableOnInteraction: false,
				}, breakpoints: {
					1200: {
						spaceBetween: 30,
						slidesPerView: 6,
					},
					991: {
						slidesPerView: 4.5,
					},
					600: {
						slidesPerView: 3.5,
					},
					375: {
						slidesPerView: 2.5,
					},
					320: {
						slidesPerView: 1,
					},
				},
			});
		}
	}

	let initScrollTop = function () {
		let windowHeight = $('body').height(), btnReturn = $('#scroll-top');
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
	let initClipboardCopy = function (value) {
		let createTextarea = document.createElement('textarea');
		createTextarea.style.cssText = 'position: absolute; left: -99999px';
		createTextarea.setAttribute("id", "textareaCopy");
		document.body.appendChild(createTextarea);
		let textareaElm = document.getElementById('textareaCopy');
		textareaElm.value = value;
		textareaElm.select();
		textareaElm.setSelectionRange(0, 99999);
		document.execCommand("copy");
		textareaElm.remove();
	}

	let initCloneForm = function () {
		let elmWrapper = $('#createRow');
		$('#createRow').on('click', '.addRow', function () {
			let theCaoSelect = $(this).closest('.row-item').find('#theCao'),
				theCaoIndexSelected = theCaoSelect.find('option:selected').attr('data-index'),
				theCaoRender = $(this).closest('.row-item').find('#theCao').clone();

			theCaoRender.find('option').attr('selected', false);
			theCaoRender.find('option[data-index=' + theCaoIndexSelected + ']').attr('selected', true);

			let menhGiaSelect = $(this).closest('.row-item').find('#menhGia'),
				menhGiaIndexSelected = menhGiaSelect.find('option:selected').attr('data-index'),
				menhGiaRender = $(this).closest('.row-item').find('#menhGia').clone();

			menhGiaRender.find('option').attr('selected', false);
			menhGiaRender.find('option[data-index=' + menhGiaIndexSelected + ']').attr('selected', true);

			let rowRender = `<div class="row-item row g-4 mt-0">
                            <div class="col-lg-3 col-sm-12 col-12">
							    ${theCaoRender[0].innerHTML}
							 </div>
							 <div class="col-lg-3 col-sm-6 col-12">
								<div class="form-theme_item">
									<div class="form-theme_item--input">
										<input type="text" placeholder="Mã seri">
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-sm-6 col-12">
								<div class="form-theme_item">
									<div class="form-theme_item--input">
										<input type="text" placeholder="Mã thẻ">
									</div>
								</div>
							</div>
							<div class="col-lg-2 col-sm-10 col-9">
							    ${menhGiaRender[0].innerHTML}
							</div>
							<div class="col-lg-1 col-sm-2 col-3 text-right">
								<button type="button" class="button-theme button-theme_danger w-100 deleteRow">
									<i class="fas fa-trash-alt"></i>
									Xóa
								</button>
							</div>
						</div>`;
			elmWrapper.append(rowRender);
		}).on('click', '.deleteRow', function () {
			$(this).closest('.row-item').remove();
		});
	}

	let initCardCloneTab = function () {
		$('.card-cloneTab').on('click', function (e) {
			e.preventDefault();
			$('.card-cloneTab').removeClass('active');
			$('[id*=option]').removeClass('active show').hide();
			let id = $(this).attr('href');
			$(this).addClass('active');
			$(id).fadeIn(200, function () {
				$(id).addClass('active show');
			});
		});
	}
	let initHeaderScroll = function () {
		if ($('body').height() / $(window).height() > 1.3) {
			$(window).scroll(function () {
				if ($(document).scrollTop() > 0) {
					$('#header').addClass('is-scroll');
				} else {
					$('#header').removeClass('is-scroll');
				}
			});
		}
	}
	$(function () {
		initNavigationMobile();
		initSlideBanner();
		initSlidePartner();
		initScrollTop();
		initCloneForm();
		initCardCloneTab();
		initHeaderScroll();

		$(document).on('click', '.copy-value', function () {
			if ($(this).attr('data-value') != undefined) {
				initClipboardCopy($(this).attr('data-value'));
			} else {
				initClipboardCopy($(this).parent().find('input').val());
			}
		});

	});
})(jQuery);