(function($) {
    //加载动画
    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500);
        }
    }
    //粘性页眉
    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var scrollLink = $('.scroll-top');
            if (windowpos >= 250) {
                siteHeader.addClass('fixed-header');
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('fixed-header');
                scrollLink.fadeOut(300);
            }
        }
    }
    headerStyle();
    //轮播效果
    if ($('.slider-carousel').length) {
        $('.slider-carousel').owlCarousel({
            loop: true,
            items: 1,
            margin: 0,
            smartSpeed: 1000,
            autoplay: 5000,
            navText: ['']
        });
    }
    //横向轮播效果
    if ($('.item-carousel').length) {
        $('.item-carousel').owlCarousel({
            loop: true,
            margin: 30,
            smartSpeed: 700,
            autoplay: 4000,
            navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1024: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
    }
    // 一键置顶
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            $('html').animate({
                scrollTop: $(target).offset().top
            }, 1000);
        });
    }
    // 初始化wow
    if ($('.wow').length) {
        var wow = new WOW();
        wow.init();
    }
    //启动粘性页眉
    $(window).on('scroll', function() {
        headerStyle();
    });
    //启动加载动画
    $(window).on('load', function() {
        handlePreloader();
    });
})(window.jQuery);