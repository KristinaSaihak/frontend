// -----------------------carousel--------------------------------
(function($, Modernizr) {
    $(function() {
        $('.jcarousel').jcarousel({
            wrap: 'circular',
            transitions: Modernizr.csstransitions ? {
                transforms:   Modernizr.csstransforms,
                transforms3d: Modernizr.csstransforms3d,
                easing:       'ease'
            } : false
        });

        $('.jcarousel-control-prev').jcarouselControl({
            target: '-=1'
        });

        $('.jcarousel-control-next').jcarouselControl({
            target: '+=1'
        });
    });
})(jQuery, Modernizr);
// -----------------------checkbox--------------------------------
(function($) {
    $(function() {

      $('select, .checkbox1').styler();

  });
})(jQuery);

// -----------------------menu--------------------------------
(function($) {
    $(function() {
        var $firstLinks=$('.menu .firstLinks');
        var $secondLinks=$('.menu .secondLinks');
        var $thirdLink=$(".secondSubmenu a");

        $firstLinks.mousemove(function(e){
            var self=this;
            $firstLinks.removeClass("active");
            $(this).addClass("active");
            $(self).siblings($secondLinks).show().stop().animate({height:+180},200);
            e.preventDefault();

            $secondLinks.mousemove(function(e){
                $secondLinks.removeClass("active");
                $(this).addClass("active");
                $secondLinks.siblings('.secondSubmenu').hide();
                $(this).siblings().show();
                e.preventDefault();
            });

           $thirdLink.mousemove(function(e){
                $(".secondSubmenu a").removeClass("active");
                $(this).addClass("active");
                e.preventDefault();
            });

            $(".menu .a").mouseleave(function(e){
                $thirdLink.removeClass("active");
                $secondLinks.removeClass("active");
                $firstLinks.removeClass("active");
                $(self).siblings($secondLinks).stop().animate({height:-180}).hide();
                $secondLinks.siblings('.secondSubmenu').hide();
                e.preventDefault();
            });

        })
        
        
    });
})(jQuery);