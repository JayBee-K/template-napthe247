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
									<div class="form-theme_item--input form-theme_item--group">
										<input type="text" placeholder="Mã seri">
										<button type="button"
												class="copy-value button-theme button-theme_icon theme-gradient theme-gradient_hover">
											<i class="fas fa-paste"></i>
										</button>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-sm-6 col-12">
								<div class="form-theme_item">
									<div class="form-theme_item--input form-theme_item--group">
										<input type="text" placeholder="Mã thẻ">
										<button type="button"
												class="copy-value button-theme button-theme_icon theme-gradient theme-gradient_hover">
											<i class="far fa-paste"></i>
										</button>
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

	$(function () {
		initSlideBanner();
		initSlidePartner();
		initScrollTop();
		initCloneForm();

		$(document).on('click', '.copy-value', function () {
			if ($(this).attr('data-value') != undefined) {
				initClipboardCopy($(this).attr('data-value'));
			} else {
				initClipboardCopy($(this).parent().find('input').val());
			}
		});

	});
})(jQuery);