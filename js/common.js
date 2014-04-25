$(document).ready(function() {
	console.log($('body').html());
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

});