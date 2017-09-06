$(function() {
		var liw = $(".tm_items li").outerWidth(true);
		var len = $(".tm_items li").length;
		$(".tm_items").css("width", liw * len + "px");
		var timer;
		timer = setInterval(function() {
			lb();
		}, 3000);

		$(".tm_left").click(function() {
				$(".tm_items").stop().animate({
				marginLeft: 0 + "px"
			}, 500, function() {
                $(".tm_items").prepend($(".tm_items li").eq(len-1))
				$(".tm_items").css("marginLeft", -liw+"px");
			});
			
		})

		$(".tm_right").click(function() {
			lb();
		})

		$(".tm_banner").hover(function() {
			clearInterval(timer)
		}, function() {
			timer = setInterval(function() {
				lb();
			}, 3000);
		})

		function lb() {
			$(".tm_items").stop().animate({
				marginLeft: -liw + "px"
			}, 500, function() {
				$(".tm_items li").eq(0).appendTo($(".tm_items"));
				$(".tm_items").css("marginLeft", "0px");
			});
		}
	})