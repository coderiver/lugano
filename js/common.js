$(document).ready(function() {
	console.log($('body').html());
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
});