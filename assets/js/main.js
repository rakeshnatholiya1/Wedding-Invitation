(function($) {
    "use strict";

    // Preloader 
    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(350).fadeOut("slow");
    });

    /*----------------------------
     2. Mobile Menu Activation
    -----------------------------*/
    jQuery('.mobile-menu nav').meanmenu({
        meanScreenWidth: "768",
    });


    /*--------------------------
     3. Sticky Menu 
    ---------------------------- */
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 900) {
            $('#sticky').addClass('sticky');
        } else {
            $('#sticky').removeClass('sticky');
        }
    });

    //Single page scroll js for main menu

    $('.menu_scroll ul li a').on('click', function(e) {
        $('.menu_scroll ul li').removeClass('active');
        $(this).parent().addClass('active');
        var target = $('[section-scroll=' + $(this).attr('href') + ']');
        e.preventDefault();
        var targetHeight = target.offset().top - parseInt('80');
        $('html, body').animate({
            scrollTop: targetHeight
        }, 1000);
    });

    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        var target = $('.menu_scroll ul li');
        if (windscroll >= 0) {
            $('[section-scroll]').each(function(i) {
                if ($(this).position().top <= windscroll + 95) {
                    target.removeClass('active');
                    target.eq(i).addClass('active');
                }
            });
        } else {
            target.removeClass('active');
            $('.menu_scroll ul li:first').addClass('active');
        }

    });

    /*----------------------------
    4. wow js active
    ------------------------------ */
    new WOW().init();

    /*----------------------------
    5. owl active
    ------------------------------ */

    //Gift registry Slider
    $(".registry_slider").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: true,
        navigation: false,
        items: 3,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [992, 3],
        itemsTablet: [768, 2],
        itemsMobile: [480, 1],
    });

    //testimonial slider
    $(".testimonial-slider").owlCarousel({
        autoPlay: true,
        slideSpeed: 2000,
        pagination: false,
        navigation: false,
        items: 1,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [992, 1],
        itemsTablet: [768, 1],
        itemsMobile: [480, 1],
    });

    //Family slider
    $(".familyslider").owlCarousel({
        autoPlay: true,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 4,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [992, 3],
        itemsTablet: [768, 2],
        itemsMobile: [480, 1],
    });
    /*--------------------------
    6. jarallax active
    ---------------------------- */
    $('.jarallax').jarallax({
        speed: 0.5
    });


    /*----------------------------
    7. magnific Popup active
    ------------------------------ */
    $('#gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function(item) {
                return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });
    /*--------------------------
    9. bxslider active
    ---------------------------- */
    //Home slider     
    $('.sliders').bxSlider({
        mode: 'fade',
        speed: 2000,
        auto: true
    });
    /*--------------------------
    10. masonry active
    ---------------------------- */
    $('#gallery').masonry({
        itemSelector: '.m-item'
    });

    /*--------------------------
    11. scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fas fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    // Contact Form Submition


})(jQuery);