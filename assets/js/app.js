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

    $(function () {
        initSlideBanner();
        initSlidePartner();
        initScrollTop();

        $(document).on('click', '.copy-value', function () {
            if ($(this).attr('data-value') != undefined) {
                initClipboardCopy($(this).attr('data-value'));
            } else {
                initClipboardCopy($(this).parent().find('input').val());
            }
        });

    });
})(jQuery);