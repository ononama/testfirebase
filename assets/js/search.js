$(function(){


	$('.search-con-list-box').each(function(i){
		
		if(i>2){
			$(this).addClass('hide');
			
			//$('.firstV').height(firstHeight);
		}
		resizeCon($(this));
	});

	$(".searchBtn").click(function () {
		$('.search-nav-bottom').slideToggle();
		$(this).toggleClass('open');
		$(this).find('p').text('詳細検索を閉じる');
	});

	$(".listBtn").click(function () {
		$(this).fadeOut();
		$('.search-con-list-box').removeClass('hide');
	});
	$('.mordalBtn').on('click',function(){
		title=$(this).text();
		links=$(this).next().html();

		$('.input-wrap-title').html(title);
		$('.input-wrap-box').html(links);
		$('.input-mordal').addClass('open');
	});
	$('.input-mordal .reset-button').on('click',function(){
		$('.input-mordal').removeClass('open');
	});
});

var firstHeight = 0;

function resizeCon(item){
	
	if(768>$(window).width()){
		item.find('.spec').after(item.find('.txt'));
	}else{
		item.find('.spec').before(item.find('.txt'));
	}
}
