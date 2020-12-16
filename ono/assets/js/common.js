$(function(){

	AOS.init({
		once: 'true',
	});

	$('a[href^="#"]:not(.noscr)').click(function(){
		var windowHeight = 0;
		if ($(this).hasClass('hm-anchor')) {
			windowHeight = $(window).height();
		}
		//faq page
		if ($('.container').find('.faq-nav')||$('.container').find('.faq-con')) {
			windowHeight = $('#header').height();
		}
		
		var speed = 500;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - windowHeight;
		$("html, body").animate({scrollTop:position},{duration: "slow", easing: "linear",complete: function(){}});
		return false;
	});

	$(".pagetop").click(function () {
		$('body,html').animate({scrollTop: 0}, 500, 'swing');
		return false;
	});


});
