$(document).ready(function() {
	$('.noi-dung').slideUp();

	$('.khoi h3').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.noi-dung').slideUp();
		$(this).next().slideToggle();
		// $(this).offset().top lay vi tri cua phan tu this
		$('html, body').animate({scrollTop: $(this).offset().top},100);
	});

	$('#btn-top').click(function(event) {
		/* Act on the event */
		$('html, body').animate({scrollTop: 0},100);
	});
});