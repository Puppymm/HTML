$(function() {
	var lw = $(".tc_item li").outerWidth(true);
	var len = $(".tc_item li").length;
	var timer;
	$(".tc_item").css("width", lw * len + "px")
	timer = setInterval(function() {
		$(".tc_item").animate({
			marginLeft: -lw + "px"
		}, 2000, function() {
			$(".tc_item li").eq(0).appendTo($(".tc_item"));
			$(".tc_item").css("marginLeft", "0px");
		});
	}, 3000);

	$(".tc_item").hover(function() {
		clearInterval(timer)
	}, function() {
		timer = setInterval(function() {
			$(".tc_item").animate({
				marginLeft: -lw + "px"
			}, 2000, function() {
				$(".tc_item li").eq(0).appendTo($(".tc_item"));
				$(".tc_item").css("marginLeft", "0px");
			});
		}, 3000);
	})

	if($(window).scrollTop() >= 0 && $(window).scrollTop() < 900) {
		$(".banner").fadeIn(1500);
		$(".definition").fadeIn(1500)
	}
	$(window).scroll(function() {
		if($(window).scrollTop() >= 0 && $(window).scrollTop() < 900) {
			$(".banner").fadeIn(1500);
			$(".definition").fadeIn(1500);
		}
		if ($(window).scrollTop()>=500 && $(window).scrollTop()<2510) {
			$(".fd_content").fadeIn(1500)
		}
	});

})