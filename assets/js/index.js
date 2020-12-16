$(function() {

	$('#sec-index-main-pc .ttl').stop().animate({
		top: "45%",
		opacity: 1
	},{
		duration:1000,
		easing:'easeInBack',
		complete:function(){
			setTimeout(function() {
				$('#sec-index-main-pc .ttl').animate({
						opacity: 0,
					},{
						duration: 500,
					},
				);
				$('#sec-index-main-pc .cover').animate({
						opacity: 0,
					},{
						duration: 500,
					}
				);
			}, 1500)
			$('#sec-index-main-pc #index-main-search-pc').delay(2000).fadeIn(500);
			$('#sec-index-main-pc #index-main-btn-scloll').delay(2000).fadeIn(500);
		}
	});


	var mySwiperIndexMainPC = new Swiper('.swiper-container#index-main-pc', {
		effect: 'fade',
		simulateTouch: false,
		slidesPerView: 1,
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 4500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	})

	var mySwiperIndexMainSP = new Swiper('.swiper-container#index-main-sp', {
		effect: 'fade',
		simulateTouch: false,
		slidesPerView: 1,
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	})

	var mySwiperIndexPointSP = new Swiper('.swiper-container#index-point-sp', {
		effect: 'slide',
		simulateTouch: false,
		spaceBetween: 0,
		centeredSlides: true,
		slidesPerView: 1.1,
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		breakpoints: {
			768: {
			slidesPerView: 3.1,
			}
		}
	})

	var mySwiperIndexPointPC = new Swiper('.swiper-container#index-point-pc', {
		effect: 'fade',
		simulateTouch: false,
		spaceBetween: 0,
		centeredSlides: true,
		slidesPerView: 1,
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next-arrow',
		},
	})


	var mySwiperIndexSceneSP = new Swiper('.swiper-container#index-scene-sp', {
		effect: 'fade',
		simulateTouch: false,
		spaceBetween: 0,
		centeredSlides: true,
		slidesPerView: 1,
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.swiper-button-next-arrow',
			prevEl: '.swiper-button-prev-arrow',
		},
	})


});