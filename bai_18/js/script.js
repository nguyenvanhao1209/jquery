$(window).on('load', function(event) {
	event.preventDefault();
	$('body').removeClass('preloading');
	$('.load').delay(1000).fadeOut('fast');
});