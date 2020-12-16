$(function(){
	$(".faq-con-cat-title").click(function () {
		$(this).toggleClass('open');
		$(this).next().slideToggle();
	});

	$(".qTxt").click(function () {
		$(this).toggleClass('open');
		$(this).next().slideToggle();
	});

});

