$(document).ready(function() {
	
	// btn top
    $('.js-btntop').click(function(){
        $('.js-logo').slideToggle();
        $('.js-btntop').toggleClass('is-active');
        return false;
     })

    $('.js-dev').click(function(){
        $('.js-footer').slideToggle();
        $('.js-bg').toggleClass('is-active');
        return false;
     })
    
    var form_trigger = $('.js-form-trigger');
    
    form_trigger.on('click', function(){
        $(this).toggleClass('is-active');
        $(this).next().slideToggle();
    });

    form_trigger.parent().click(function (e) {
        e.preventDefault();
        return false;
    });

    $(document).on('click', function(){
        form_trigger.next().slideUp();
        $('.js-technology').removeClass('is-active');
        $('.js-technology').addClass('is-hide');
        $('.js-close').removeClass('is-active');
        $('.js-tech-block').hide();
        $('.js-tech-block').removeClass('is-active');  
        $('.js-index').show("slow");  
    });
    
    // flashMovie = null;
    // function announcer__object() {
    //     flashMovie = $('.js-announcer');

    //     flashMovie.flash(
    //         {
    //             swf: 'video55-160х200.swf',
    //             width: 481,
    //             height: 86,
    //             play: false,
    //             flashvars: {
    //                 message: 'I come from Flash.'
    //             },
    //         }
    //     );
    // }

    // function announcer__object() {
    //     $('.announcer__object').addClass('is-object');
    //     $('.is-object').flash('img/video55-160х200.swf');
    //     $('.is-object').stop();
    //     // $('.is-object').pause(); 
    //     // $('.is-object').StopPlay();
    // }
    // setTimeout(announcer__object, 5500);

    // $('.is-object').mouseenter(function() {
    //     play: true
    // });

    // $('.is-object').mouseleave(function() {
    //     play: false
    // });

    // GetDocumentObjectID("FLVPlayer").StopPlay();

    function announcer() {
      $(".js-announcer").slideToggle();
    }
    setTimeout(announcer, 5000);


    $('.js-tech-btn').click(function(){
        var el = $('.js-tech-block');
        if (el.hasClass('is-active')) {
            var element = $('.scrollblock').jScrollPane({});
            var api = element.data('jsp');
            api.destroy();
            el.slideUp();
            el.removeClass('is-active');
        }
        else{
            el.slideDown(function(){
                if($(this).is(":visible")) {
                    $('.scrollblock').jScrollPane({
                        hideFocus: true
                    });
                }
            });
            el.addClass('is-active');
        }
        $('.js-technology').toggleClass('is-active');
        $('.js-tech-btn').toggleClass('is-active');
        $('.js-close').toggleClass('is-active');
        $('.js-technology').removeClass('is-hide');
        $('.js-index').slideToggle();
        return false;
     })
   
    $('.js-close').click(function(){
        $('.js-technology').removeClass('is-active');
        $('.js-index').slideToggle();
     })

    $('.js-close').click(function(){
        var el = $('.js-tech-block');
        if (el.hasClass('is-active')) {
            var element = $('.scrollblock').jScrollPane({});
            var api = element.data('jsp');
            api.destroy();
            el.slideUp();
            el.removeClass('is-active');
        }
        else{
            el.slideDown(function(){
                if($(this).is(":visible")) {
                    $('.scrollblock').jScrollPane({
                        hideFocus: true
                    });
                }
            });
            el.addClass('is-active');
        }

        $('.js-close').toggleClass('is-active');
        return false;
     })

    var dp = $('#datepicker');
    dp.datepicker({
        onSelect: function(date) {
            dp.prev().val(date);
            dp.fadeOut();
        }
    });
    dp.prev().focus(function(){
        dp.fadeIn();
    });

    $(".js-marc").each(function(){

        $(this).mouseenter(function() {
            $(this).parents('.js-index').addClass('is-active');
        });

        $(this).mouseleave(function() {
            $(this).parents('.js-index').removeClass('is-active');
        });

    });

    $('.js-datepicker-trigger').click(function(){
        $('.js-datepicker').slideToggle();
        return false;
     })

    $(".phone").mask("+7(999) 999-99-99");

	// tabs
    function tab() {
       $(".js-tab").each(function(){
         var tab_link = $(this).find("a");
         var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
         tab_cont.hide();
         $(this).parents(".js-tab-group").find(".js-tab1").show();
            tab_link.on("click", function() {
                var index = $(this).attr("href");
                tab_link.removeClass("is-active");
                tab_link.parent().removeClass("is-active");
                $(this).addClass("is-active");
                $(this).parent().addClass("is-active");
                tab_cont.hide();
                $(this).parents(".js-tab-group").find("."+index).show("slide", { direction: "right" }, 500);
                return false;
            });
        });
    }

    function tab2() {
       $(".js-tab_2").each(function(){
         var tab_link = $(this).find("a");
         var tab_cont = $(this).parent().parent(".js-tab-group").find(".js-tab-cont");
         tab_cont.hide();
         $(this).parents(".js-tab-group").find(".js-tab1").show();
            tab_link.on("click", function() {
                var index = $(this).attr("href");
                tab_link.removeClass("is-active");
                tab_link.parent().removeClass("is-active");
                $(this).addClass("is-active");
                $(this).parent().addClass("is-active");
                tab_cont.hide();
                $(this).parent().parent().parent().parent(".js-tab-group").find("."+index).show("slide", { direction: "right" }, 500);
                return false;
            });
        });
    }
   
   $(".tabs").each(function(){
   		$(this).tabs();
   }); 

    if ($(".js-tab-group").length) {
        tab();
        tab2();
    };

    // $('.ui-corner-top').click(function(){
    //     $('.ui-corner-bottom').show("slide", { direction: "right" }, 500);
    // })

    // $(".ui-corner-top").each(function(){
    //     $(this).click(function() {
    //        $(".ui-corner-bottom").hide("slide", { direction: "right" }, 500); 
    //        $(".ui-corner-bottom").show("slide", { direction: "left" }, 500); 
    //     });
    // });

    // toggle reserve popup

    $(".reserve").hide();
    $(".js-reserve-btn").on('click', function(){
    	$(".js-reserve").show();
    });
    $(".js-reserve-close").on('click', function(){
    	$(".js-reserve").hide();
    });

    // slider initialize
    
    if ($(".gallery__slider").length) {
    	function gallery(){
    		var preview = $(".gallery-preview img");

    		$(".js-gallery").hide();

    		$(".js-gallery-close").on('click', function(){
    			$(".js-gallery").hide();
    		});

    		$(".gallery__slider").cycle({
        		fx: "scrollHorz",
        		next: '.gallery__next',
        		prev: '.gallery__prev',
        		timeout: 0
    		});
    		
    		$(".gallery__slider").on( 'cycle-before', function(event, opts){
				var num = opts.nextSlide;
				var num = num + 1;
				$(".gallery-preview img").removeClass('is-active');
				$(".gallery-preview img:nth-child("+num+")").addClass('is-active');
    		});
    		
    		preview.on('click', function(){
    			var index = $(this).index();

    			preview.removeClass('is-active');	
    			$(this).addClass('is-active');

    			$(".gallery__slider").cycle('goto', index);

    			$(".js-gallery").show();
    		});


    		 


    	}
    	gallery();
    }
     


});

    // preloader
    $('.site-wrap').addClass('is-loading');

    $(window).load(function() {
        $('.site-wrap').removeClass('is-loading');
        $('.loader').hide().remove();
    });

    $('.out').addClass('is-loading');

    $(window).load(function() {
        $('.out').removeClass('is-loading');
        $('.loader').hide().remove();

        function slidenav() {
          $(".js-nav").addClass('is-show');
        }
        setTimeout(slidenav, 1000);
        function slidemenu() {
          $(".js-menu").slideToggle({ direction: "right" }, 1000);
          $(".js-menu").addClass('is-show');
        }
        setTimeout(slidemenu, 1800);
        function index() {
          $(".js-index").show("slide", { direction: "right" }, 500);
        }
        setTimeout(index, 500);
    });

    $('.js-article').addClass('jspScrollable');
    $('.js-article').show(function(){
        if($(this).is(":visible")) {
            $('.scrollblock').jScrollPane({
                hideFocus: true
            });
        }
    });