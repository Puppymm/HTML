$(function() {
	
	var wh=$(window).height()
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#top').fadeIn();
		} else {
			$('#top').fadeOut();
		}
		//2.当窗口距离顶部的距离执行相应的动画
		if($(window).scrollTop()+wh>660) {
			$(".et_content h1").css("animation", "am_right 2s");
			$(".et_content p").css("animation", "am_right1 2s");
			
		}
		if($(window).scrollTop()+wh>750) {
			$(".et_item").css("animation", "am_heigh 2s");
		}
		
		if($(window).scrollTop()+wh>2060) {
			$(".sy_itme1").css("animation", "am_left 2s");	
		}
		
		if($(window).scrollTop()+wh>2150) {
			$(".sy_itme2").css("animation", "am_right 2s");	
		}
		
		
		if($(window).scrollTop()+wh>2350) {
			$(".sy_itme3").css("animation", "am_left 2s");	
		}
		
		if($(window).scrollTop()+wh>2410) {
			$(".sy_itme4").css("animation", "am_right 2s");	
		}
		if($(window).scrollTop()+wh>2630) {
			$(".sy_itme5").css("animation", "am_left 2s");	
		}
		
		if($(window).scrollTop()+wh>2680) {
			$(".sy_itme6").css("animation", "am_right 2s");	
		}
		if($(window).scrollTop()+wh>3600) {
			$(".cm_item_one div").css("animation", "name1 2s");	
		}
		if($(window).scrollTop()+wh>4060) {
			$(".cm_item_two div").css("animation", "name1 2s");	
		}
		if($(window).scrollTop()+wh>4800) {
			$(".tm_content>h2").css("animation", "am_left 2s");	
			$(".tm_content>p").css("animation", "am_right 2s");	
		}
	});

	//返回顶部
	$('#top').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	});
});