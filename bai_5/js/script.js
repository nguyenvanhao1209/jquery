$(document).ready(function() {
	$('.btn-open').click(function (e) {
		e.preventDefault();
		$('.hop-thoai').addClass('hien-ra');
		$('.nen-mo').addClass('hien-ra');
	});
	$('.btn-closes').click(function (e) {
		e.preventDefault();
		$('.hop-thoai').removeClass('hien-ra');
		$('.nen-mo').removeClass('hien-ra');
	});
	$('.nen-mo').click(function (e) {
		e.preventDefault();
		$('.hop-thoai').removeClass('hien-ra');
		$('.nen-mo').removeClass('hien-ra');
	});
});