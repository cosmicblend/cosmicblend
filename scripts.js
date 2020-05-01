(function ($) {
    "use strict";
    
    $(window).on('load', function () {
        $('body').addClass('loaded');
    });
	
    $(window).load(function() {
        $('.loading_box').fadeOut(1000)
        $('.loading_view').addClass('load_hide').delay(1000).fadeOut(1000);
    });
	
    /* *** Header *** */
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#baz-overlay').toggleClass('open');
        $('.baz-header-section').toggleClass('baz-menu-active');
    });
    
     // Menu  on click runction
    $(document).ready(function(){
        $(".baz-hamburger-menu a").click(function(){
            $(".baz-overlay").fadeToggle(200);
           $(this).toggleClass('baz-overlay.open').toggleClass('baz-overlay.close');
        });
    });
    $('.overlay').on('click', function(){
        $(".baz-overlay").fadeToggle(200);   
        $(".baz-hamburger-menu a").toggleClass('baz-overlay.open').toggleClass('baz-overlay.close');
        open = false;
    });

    /* *** Isotope Active *** */
    $('.baz-portfolio-items').imagesLoaded(function () {
        
        // Add isotope on click function
        $('.baz-portfolio-filter li').on('click', function () {
            $(".baz-portfolio-filter li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".baz-portfolio-items").isotope({
                filter: selector
                , animationOptions: {
                    duration: 750
                    , easing: 'linear'
                    , queue: false
                , }
            });
            return false;
        });
        $(".baz-portfolio-items").isotope({
            itemSelector: '.single-item'
            , layoutMode: 'masonry'
        , });
    });
    
    /* *** Testimonial Carousel *** */
    $('#testimonial-carousel').owlCarousel({
        loop: true
        , autoplay: true
        , smartSpeed: 500
        , items: 1
        , nav: false
    });
    
     /* *** Button *** */
    var buttons = document.querySelectorAll(".baz-btn .baz-btn2 .baz-logo");
    for(var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      button.addEventListener("click", function() {
        if(!button.classList.contains("active"))
          button.classList.add("active");
        else
          button.classList.remove("active");
      });
    }
    
})(jQuery);