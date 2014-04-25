$(document).ready(function() {
	
	// btn top

	$('.js-btntop').click(function(){
	 	$('.js-btntop').hide();
	 	$('.js-logo').show();
	 	$('.js-btnbot').show();
	 })
	 $('.js-btnbot').click(function(){
	 	$('.js-logo').hide();
	 	$('.js-btnbot').hide();
	 	$('.js-btntop').show();
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
       $(".js-tab2").each(function(){
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
    
    function tab3() {
       $(".js-tab3").each(function(){
         var tab_link = $(this).find("a");
         var tab_cont = $(this).parent(".js-tab-group").find(".js-tab-cont");
         tab_cont.hide();
         $(this).parent(".js-tab-group").find(".js-tab1").show();
            tab_link.on("click", function() {
                var index = $(this).attr("href");
                tab_link.removeClass("is-active");
                tab_link.parent().removeClass("is-active");
                $(this).addClass("is-active");
                $(this).parent().addClass("is-active");
                tab_cont.hide();
                $(this).parent().parent().parent(".js-tab-group").find("."+index).show();
                return false;
            });
        });
    }

    if ($(".js-tab-group").length) {
        tab();
        tab2();
        tab3();
    };


});