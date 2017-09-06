
$(function() {
			
			var wh=$(window).height()//得到窗口高度
			
			//返回顶部
			$('#top').click(function() {
				$('body,html').animate({
					scrollTop: 0
				}, 500);
			});
			//1.窗口滚动执行
			
			
			$(window).scroll(
				
				function() {
					//1.如果滚动条距离上面的距离不等于0，则显示，否则隐藏
					if($(this).scrollTop() != 0) {
						$('#top').fadeIn();
					} else {
						$('#top').fadeOut();
					}
					//2.当窗口距离顶部的距离执行相应的动画
					if($(window).scrollTop()+wh>660) {
						$(".cs_box1 h1").css("animation", "am_left 2s");						
					}
					if($(window).scrollTop()+wh>750) {
						$(".cs_text1").css("animation", "am_leftone 3s");						
					}
					if($(window).scrollTop()+wh>1100) {	
						$(".ptb_one").css("animation", "am_lefttwo 2s");
						$(".ptb_four").css("animation", "am_leftthree 2s");
					}
					if($(window).scrollTop()+wh>1300) {	
						$(".ptb_two").css("animation", "am_lefttwo 2s");
						$(".ptb_five").css("animation", "am_leftthree 2s");
					}
					if($(window).scrollTop()+wh>1600) {	
						$(".ptb_three").css("animation", "am_lefttwo 2s");
						$(".ptb_six").css("animation", "am_leftthree 2s");
					}
					if($(window).scrollTop()+wh>2300) {	
						$(".sc_stage").css("animation", "am_topone 2s");
					}
					if($(window).scrollTop()+wh>2900) {	
						$(".sc_content").css("animation", "am_leftfour 2s");
					}
					
					
				

			})
})			