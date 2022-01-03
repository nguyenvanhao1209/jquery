$(document).ready(function() {
	$('ul.menu li').click(function(event) {
		var _type = $(this).attr('type');
		var _title = $(this).text(); //lay text tu the
		$('h1.title').text(_title); //them text vao the
		$('.content img').each(function() {
			if($(this).hasClass(_type)){
				$(this).removeClass('hidden')
				$(this).addClass('bounceInUp animated');
			}
			else{
				$(this).addClass('hidden')
				$(this).removeClass('bounceInUp animated');
			}
		});
	});
});