$(function() {
	var wh = $(window).height() //得到窗口高度
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#top').fadeIn();
		} else {
			$('#top').fadeOut();
		}
        //2.当窗口距离顶部的距离执行相应的动画
		if($(window).scrollTop()+wh>660) {
			$(".dn_right").css("animation", "am_right 2s");
			$(".dn_ui").css("animation", "am_left 2s");		
		}
		if($(window).scrollTop()+wh>740){
			$(".fd_zero").css("animation", "am_left 2s");		
		}
		
		if($(window).scrollTop()+wh>860){
			$(".fd_one_conter").css("animation", "am_right 2s");
			$(".fd_one_img").css("animation", "am_left 2s");			
		}
		if($(window).scrollTop()+wh>2700){
			$(".sy_one").css("animation", "am_left 2s");
			$(".sy_two").css("animation", "am_right 2s");			
		}
		if($(window).scrollTop()+wh>2850){
			$(".sy_three").css("animation", "am_left 2s");
			$(".sy_four").css("animation", "am_right 2s");			
		}
		if($(window).scrollTop()+wh>5000){
			$(".cm_box").css("animation", "am_h1 2s");
				
		}
		
        
        
	});

	//返回顶部
	$('#top').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	});

});