$(document).ready(function() {
	$('.hop-thoai').addClass('show')
	$('.background').addClass('show')

	var banner = setInterval(function(){
		$('.hop-thoai').removeClass('show')
		$('.background').removeClass('show')
		clearInterval(banner)
	},2000)
	$('#open').click(function(event) {
		/* Act on the event */
		$('.hop-thoai').addClass('show')
		$('.background').addClass('show')
	});
	$('.close').click(function(event) {
		/* Act on the event */
		$('.hop-thoai').removeClass('show')
		$('.background').removeClass('show')
	});
	$('.background').click(function(event) {
		/* Act on the event */
		$('.hop-thoai').removeClass('show')
		$('.background').removeClass('show')
	});
});