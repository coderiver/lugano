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
    })

    function announcer() {
      $(".js-announcer").slideToggle();
    }
    setTimeout(announcer, 3000);

        
    $("#datepicker").datepicker({
        // showOn: "button",
        // buttonImage: "img/icons/data-pic.png",
        // buttonImageOnly: true
    });


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
                $(this).parents(".js-tab-group").find("."+index).show();
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
                $(this).parent().parent().parent().parent(".js-tab-group").find("."+index).show();
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
          $(".js-menu").show("slide", { direction: "right" }, 1000);
        }
        setTimeout(slidemenu, 2000);
    });
