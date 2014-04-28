$(document).ready(function() {
	
	// btn top

	$('.js-btntop').click(function(){
        $('.js-btntop').slideUp();
        $('.js-logo').slideDown();
        $('.js-btnbot').slideDown();
     })
     $('.js-btnbot').click(function(){
        $('.js-logo').slideUp();
        $('.js-btnbot').slideUp();
        $('.js-btntop').slideDown();
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


});