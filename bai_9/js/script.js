$(document).ready(function() {
	$('.content a').fancybox();
	TweenMax.staggerFrom(
			$('.content a'),//phan tu dc chon
			1,// thoi gian chuyen dong
			{duration: 1, rotation:360, y:100, stagger: 0.5},
			0.4 // thoi gian cach nhau giua moi hieu ung
		);
});
