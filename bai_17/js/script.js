$(document).ready(function() {
	timeline = new TimelineMax();
	timeline.to($('.khoi'),1,{x:300}).to($('.khoi'),1,{y:300}).to($('.khoi'),2,{x:-300},"+=1");
	$('#dung').click(function(event) {
		timeline.stop();
	});
	$('#chay').click(function(event) {
		timeline.play();
	});
	$('#quay-lai').click(function(event) {
		timeline.reverse();
	});
});