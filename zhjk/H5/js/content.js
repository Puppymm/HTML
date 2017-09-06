 $(".A_Demo").PicCarousel("init");
			$(".B_Demo").PicCarousel({
				"width":1000,		//幻灯片的宽度
				"height":400,		//幻灯片的高度
				"posterWidth":400,	//幻灯片第一帧的宽度
				"posterHeight":580, //幻灯片第一张的高度
				"scale":0.9,		//记录显示比例关系
				"speed":1500,		//记录幻灯片滚动速度
				"autoPlay":true,	//是否开启自动播放
				"delay":1000,		//自动播放间隔
				"verticalAlign":"top"	//图片对齐位置
			});