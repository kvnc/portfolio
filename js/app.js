$(document).ready(function(){
	$('.carousel').carousel({
		interval:false
	});

	setHeight();

	$(window).resize(function(){
		setHeight();
	});
});

setHeight = function() {
	$('.portfolio .carousel .item img').css('max-height','auto');
	var height = $(window).height() - 130;
	$('.portfolio .carousel .item img').css('max-height',height);
}
