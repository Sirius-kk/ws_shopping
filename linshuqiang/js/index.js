// $("#my_menu")
// .mouseenter(function(){
// 	$(".inter").css("display","block")
// })
// .mouseleave(function(){
// 	$(".inter").css("display","none")
// })

$(function(){
	// 页面导航栏滚动事件
	// 获取要定位元素距离浏览器顶部的距离
	var navH=$(".page_nav").offset().top;
	// 滚动条事件
	$(window).scroll(function(){
		// 获取滚动条的滑动距离
		var scroH=$(this).scrollTop();
		// 做判断：
		// 如果滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定
		if(scroH>=navH){
			$(".page_nav").css({"position":"fixed","top":0,"zIndex":9999});
		}else{//否则，就不固定
			$(".page_nav").css("position","static")
		}
		
	})
	// 首页侧边栏滚动事件
	// 查找触发事件的元素，当滚动条滚动时触发事件
	var navH1=$(".lift_nav").offset().top;
	// 滚动条事件
	$(window).scroll(function(){
		var scroH1=$(this).scrollTop();
		// 当滚动条滚动到一定的位置时，侧边栏隐藏
		if(scroH1>=navH1){
			$(".lift_nav").css("display","block")
		}else{
			$(".lift_nav").css("display","none")
		}
		
		scrollTop=document.body.scrollTop||document.documentElement.scrollTop
	})
	// 点击返回顶部按钮，返回到页面顶部
	// 获得页面上方滚动超出的距离
	
	var scrollTop=0;
	$(".re_top").click(function(e){
		e.preventDefault();
		// 总距离
		var dist=scrollTop;
		// 总步数
		var steps=100;
		// 总时间
		var dura=500;
		// 每步走多长
		var step=dist/steps;
		// 每步间隔多长时间
		var interval=dura/steps;
		// 设置执行定时器
		var timer=setInterval(function(){
			window.scrollBy(0,-step);
			steps--;
			if(steps==0){
				clearInterval(timer)
				steps=100;
			}
		})
	})
})

