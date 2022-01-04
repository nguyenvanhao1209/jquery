$(document).ready(function() {
	TweenMax.to($('.khoi-1'),1,{x:200,opacity:0});
	TweenMax.from($('.khoi-2'),2,{scale:2,opacity:0.5,delay:1});
	TweenMax.fromTo($('.khoi-3'),2,{y:200,opacity:0.3},{y:-200,opacity:1});
	TweenMax.staggerTo($('.khoi-4'),1,{y:150,opacity:0},0.2);
	TweenMax.staggerFrom($('.khoi-5'),2,{y:150,opacity:0,ease:Bounce.easeOut},0.5);
});