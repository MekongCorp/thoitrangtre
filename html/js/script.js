/**
 * Created by ntatuan on 12/07/2016.
 */

var _slider2;

var thoitrangtre = window.thoitrangtre || {};

/**
 * Control in  slider
 */
thoitrangtre.Slider=(function($){

    var init = function(){

        bannerHome(".banner-home .carousel-home");
        func_loadGallerySlider();
        func_carousel3(".carousel-style-3");
        func_carousel4(".carousel-style-4");

    };

    var bannerHome=function(id){

        (function ($) {
            $(document).ready(function(){
                var banner=$(id);

                banner.owlCarousel({
                    singleItem : true,
                    items:5,
                    responsive: {
                        0:{
                            items:1, // In this configuration 1 is enabled from 0px up to 479px screen size
                            nav:true
                        },

                        480:{
                            items:2, // from 480 to 677
                            nav:true // from 480 to max
                        },

                        600:{
                            items:3, // from this breakpoint 678 to 959
                            center:false // only within 678 and next - 959
                        },

                        768:{
                            items:5, // from this breakpoint 678 to 959
                            nav:true
                            //  center:true // only within 678 and next - 959
                        }
                    },
                    navigation: true,
                    pagination:true,
                    slideSpeed : 1000,
                    callbacks:true,
                    margin: 0,
                    nav:true,
                    paginationSpeed : 500,
                    loop: true,
                    dots: false,
                    responsiveRefreshRate : 200,
                    autoplay: true,
                    autoplayTimeout: 6000,
                    autoplaySpeed: 500,
                    autoplayHoverPause: true,

                    navText: ['<i class="glyphicon glyphicon-menu-left"></i>','<i class="glyphicon glyphicon-menu-right"></i>']

                });
            });


        })(jQuery);

    };





    // carousel 3
    var func_carousel3=function(id)
    {
        (function ($) {
            $(document).ready(function(){
                $(id).owlCarousel({
                    singleItem : false,
                    items:4,

                    responsive: {
                        0:{
                            items:1, // In this configuration 1 is enabled from 0px up to 479px screen size
                            nav:true
                        },

                        480:{
                            items:2, // from 480 to 677
                            nav:true // from 480 to max
                        },

                        600:{
                            items:3, // from this breakpoint 678 to 959
                            center:false // only within 678 and next - 959
                        },

                        768:{
                            items:4, // from this breakpoint 678 to 959
                            nav:true
                            //  center:true // only within 678 and next - 959
                        }
                    },

                    navigation: true,
                    pagination:true,
                    slideSpeed : 500,
                    margin: 10,
                    nav:true,
                    paginationSpeed : 500,
                    loop: true,
                    dots: true,
                    responsiveRefreshRate : 200,

              //      navText: ['<span class=\"icon-next\"><span class=\"path1\"></span><span class=\"path2\"></span><span class="path3"></span> </span>','<i class="glyphicon glyphicon-menu-right"></i>']

                });
            });


        })(jQuery);
    }


    var func_carousel4=function(id)
    {
        (function ($) {
            $(document).ready(function(){
                $(id).owlCarousel({
                    singleItem : false,
                    items:4,
                    responsive: {
                        0:{
                            items:1, // In this configuration 1 is enabled from 0px up to 479px screen size
                            nav: true
                        },

                        480:{
                            items:2, // from 480 to 677
                            nav: true
                        },

                        600:{
                            items:3, // from this breakpoint 678 to 959
                            nav: true
                        },

                        768:{
                            items:4, // from this breakpoint 678 to 959
                            //  center:true // only within 678 and next - 959
                        }
                    },

                    navigation: true,
                    pagination:false,
                    slideSpeed : 500,
                    margin: 5,
                    nav:false,
                    paginationSpeed : 500,
                    loop: true,
                    dots: false,
                    responsiveRefreshRate : 200,

                    //      navText: ['<span class=\"icon-next\"><span class=\"path1\"></span><span class=\"path2\"></span><span class="path3"></span> </span>','<i class="glyphicon glyphicon-menu-right"></i>']

                });



                $(".content-list-designer").mCustomScrollbar({ scrollbarPosition:"inside"});

            });


        })(jQuery);
    };

    // function load Gallery Slider

    var func_loadGallerySlider=function(){

         _slider2 =  new func_gallerySlider(".carousel-2", ".thumb-carousel-2", 4000, 0, 6,6);
        _slider2.slider.loadslider();

        (function ($) {
            $(document).ready(function(){
                $(".list-category-1").mCustomScrollbar();

                var up=50, down=50;
                $(".thumb-slider-1 a").click(function(event){
                    event.preventDefault();
                    var to=$(this).attr("href").split(/#(.+)/)[1];
                    $(".list-category-1").mCustomScrollbar("scrollTo", to);

                });

            });
        })(jQuery);

    };

    var sliderStyle;
    var sliderPagerStyle;

// function  Slider gallery
    var func_gallerySlider=function(id1, id2, timer, start, min, max){

         sliderStyle = $(id1);
         sliderPagerStyle = $(id2);

        var slider = {
            loadslider: function (){
                sliderStyle.bxSlider({
                    pagerCustom: id2,
                    nextText: '<i class="glyphicon glyphicon-menu-right"></i>',
                    prevText: '<i class="glyphicon glyphicon-menu-left"></i>',
                    pager: true,
                    touchEnabled: true,
                    responsive: true,
                    adaptiveHeight: true,
                    mode: 'fade',

                    onSliderLoad: function(currentIndex){
                        var total= sliderStyle.getSlideCount() < 10 ? "0" + sliderStyle.getSlideCount(): sliderStyle.getSlideCount();
                        $(".slider-2 .view-info span").html("01" + "/" + total);
                    },

                    onSlideAfter: function($slideElement, oldIndex, newIndex)
                    {

                        sliderPagerStyle.find('li').children ("a").removeClass('active');
                        sliderPagerStyle.find('li').removeClass('active');

                        if(sliderStyle.getSlideCount() == oldIndex + 1 && newIndex == 0)
                        {

                            sliderPagerStyle.goToNextSlide();
                        }
                        else if(oldIndex==0 && (newIndex + 1) == sliderStyle.getSlideCount())
                        {
                            sliderPagerStyle.goToPrevSlide();
                        }
                        else
                            sliderPagerStyle.goToSlide(newIndex);

                        $(id2 + " li").not(".bx-clone").find($("[data-slide-index='"+ newIndex +"']")).addClass("active");
                        $(id2 + " li").not(".bx-clone").find($("[data-slide-index='"+ newIndex +"']")).parent("li").addClass("active");

                        var total= sliderStyle.getSlideCount() < 10 ? "0" + sliderStyle.getSlideCount(): sliderStyle.getSlideCount();
                        var current=newIndex + 1;
                        current= current < 10 ? "0" + current : current;
                        $(".slider-2 .view-info span").html(current + "/" + total);

                    }
                });

                sliderPagerStyle.bxSlider({
                    minSlides: min,
                    maxSlides: max,
                    slideWidth: 80,
                    slideMargin: 10,
                    moveSlides: 1,
                    pager: false,
                    nextText: '<i class="glyphicon glyphicon-menu-down"></i>',
                    prevText: '<i class="glyphicon glyphicon-menu-up"></i>',
                    mode: 'vertical'
                    //     pagerType: 'short',
                });


                $(id2 + " li").on("click",function(e){

                    e.preventDefault();
                    $(id2 + " li a").removeClass("active");
                    $(id2 + " li").removeClass("active");

                    $(this).addClass("active");
                });


            },
        };



        this.slider = slider;
        this.sliderStyle=sliderStyle;
        this.sliderPagerStyle=sliderPagerStyle;
    };

    return {"init": init, func_gallerySlider: func_gallerySlider, sliderStyle: sliderStyle};
})($);
thoitrangtre.Slider.init();


// function event
thoitrangtre.event=(function($){

    var init = function(){
        func_filter();
        function_scroll_filter();
        func_switch_slider();
        func_search();
        func_body_click();
        func_menu_click();
    };

   var func_body_click=function(e){
       (function ($) {
           $(document).ready(function(){
               $("body").not($(".search-suggest")).click(function(){
                   $(".search-suggest").slideUp(function(){
                       $(this).removeClass("active");
                   });
               });
               $("body").not($(".keyword")).click(function(){
                   $(".search-top").slideUp(function(){
                       $(this).removeClass("active");
                   });
                   $(".search ").removeClass("active");
               });

           });
       })(jQuery);
   };

    var func_filter=function(e){

        (function ($) {
            $(document).ready(function(){

                $(".box-filter .dropdown-menu  li  a").click(function(event){
                    event.preventDefault();
                    var button=$(this).parents(".dropdown-menu").prev("button.dropdown-toggle");
                    var t=$(this).html();
                    button.html(t +" <span class=\"caret\"></span>");
                });

                $(".box-filter-mobile .control-filter > li > a").click(function(event){
                    event.preventDefault();
                    var $this=$(this);
                    var $parent=$this.parent("li");
                    $(".box-filter-mobile .control-filter > li").removeClass("active")
                    $parent.addClass("active");
                    $(".control-filter").addClass("active");
                });

                $(".list-filter-mobile .btn-close").click(function(event){
                    event.preventDefault();
                    $(this).parents("li:first").removeClass("active");
                    $(".control-filter").removeClass("active");
                });


            });
        })(jQuery);
    };

    // scrollbar filter
    var function_scroll_filter=function(e){
        (function ($) {
            $(document).ready(function(){
                $(".filter-scrollbar").mCustomScrollbar({ scrollbarPosition:"inside"});
                $(".box-filter").on("click",".scroll-to > a", function(event){
                    event.preventDefault();
                    event.stopPropagation();
                    var el=$(this).parent(".dropdown-menu").children(".filter-scrollbar");
                    var to= $(this).attr("href");
                    $(el).mCustomScrollbar("scrollTo",to);
                });

            });
        })(jQuery);
    };

    // switch slider
    var func_switch_slider=function(e){
        (function ($) {
            $(document).ready(function(){

                $(".tab-switch-slider li").click(function(event){

                    var index=$(this).index();
                    var parent=$(this).parents(".tab-switch-slider");
                    parent.find("li").not($(this)).removeClass("active");
                    $(this).addClass("active");
                    $(".box-thumb-carousel .thumb-slider").not(":eq("+ index +")").removeClass("active");
                    $(".box-thumb-carousel .thumb-slider:eq("+ index +")").addClass("active");

                    $(".box-carousel .slider").not(":eq("+ index +")").removeClass("active");
                    $(".box-carousel .slider:eq("+ index +")").addClass("active");
                });


                $(".category-1 li a").click(function(event){
                    var index =  $(this).attr("data-slide-index");
                    _slider2.sliderStyle.goToSlide(index);

                    $(".tab-switch-slider li").not(1).removeClass("active");
                    $(".tab-switch-slider li:eq(1)").addClass("active");

                    $(".box-thumb-carousel .thumb-slider").not(1).removeClass("active");
                    $(".box-thumb-carousel .thumb-slider:eq(1)").addClass("active");

                    $(".box-carousel .slider").not(":eq(1)").removeClass("active");
                    $(".box-carousel .slider:eq(1)").addClass("active");

                });

            });
        })(jQuery);
    };

    var func_search=function(e){
        (function ($) {
            $(document).ready(function(){
                $(".header").on("click",".keyword", function(event){
                    event.stopPropagation();
                    $(".search-suggest").slideDown(function(){
                        $(this).addClass("active");
                    });
                });

                $(".header").on("click",".search a", function(event){
                    event.stopPropagation();
                    var parent=$(this).parents(".search")

                    if($(parent).hasClass("active"))
                    {
                        $(parent).removeClass("active");
                        $(".search-top").slideUp(function(){
                            $(this).removeClass("active");
                        });
                    }
                    else{
                        $(parent).addClass("active");
                        $(".search-top").slideDown(function(){
                            $(this).addClass("active");
                        });
                    }
                });

                $(".search-suggest").click(function(e){
                    e.stopPropagation();
                });


            });







        })(jQuery);
    };


    var func_menu_click=function(e)
    {
        (function ($) {
            $(document).ready(function(){

            // menu button click
                $(".toggleBox .navToggle").on("click", function () {
                    if($(this).hasClass("open"))
                    {
                        $(this).removeClass("open");
                        $(".navigation-top").slideUp(function(){
                            $(".navigation-top").removeClass("active");
                            $(".navigation-top").removeAttr("style");
                        });
                    }
                    else{
                        $(this).addClass("open");
                        $(".navigation-top").slideDown(function(){
                            $(".navigation-top").addClass("active");

                        });

                    }
                });

                // sub menu click
                $(".nav-top li.has-sub > a > span").click(function(event){
                    event.preventDefault();

                    var t = $(this).parents("li:first");
                    var child =$(this).parent("a");
                    if(t.hasClass("active"))
                    {
                        child.next(".nav-top .nav-sub:first").slideUp(function(){
                            t.removeClass("active");
                            $(this).removeAttr("style");
                        });
                    }
                    else
                    {
                        $(".nav-top .nav-sub").not(t).slideUp(function(){
                            $(this).parent("li").removeAttr("style");
                            $(this).parent("li").removeClass("active");
                        });
                        child.next(".nav-top .nav-sub:first").slideDown(function(){
                            $(".navigation-top.active .nav-top li").removeClass("active");
                            t.addClass("active");
                            $(this).parent("li").removeAttr("style");
                        });
                    }
                });


            });
        })(jQuery);
    };


    return {
        init: init
    }
})($);
thoitrangtre.event.init();


// function check validate
thoitrangtre.validate=(function($){

    var init = function(){

        check_validate();
    };

    var check_validate=function(e){

        (function ($) {
            $(document).ready(function(){

                $("#comment_form").validate({

                    messages: {
                        fullname: "Please input name",
                        email: "Please input email",
                        company: "Please input company name",
                        comment: "Please input comment"
                    }

                });
            });
        })(jQuery);
    };

    return {
        init: init
    }
})($);
thoitrangtre.validate.init();