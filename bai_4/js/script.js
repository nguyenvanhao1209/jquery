$(document).ready(function() {
	// $('#part-1').on('click', function(event) {
	// 	event.preventDefault();
		
	// 	$('html, body').animate({scrollTop: 1000}, 400)
	// });
	$('.menu a').click(function (e) {
		e.preventDefault();

		part = $(this).attr('href'); //lay id cua h2

		position = $(part).offset().top; //tim vi tri the h2

		//hieu ung
		$('html, body').animate({scrollTop: position}, 1000, 'easeInElastic')
	});

});