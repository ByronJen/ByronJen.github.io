var renxiaoyu = renxiaoyu || {}; //自定义作用域（变量）
(function() { //闭包 renxiaoyu 作用域
    renxiaoyu.sliderNav = function() {
		$("#sliderNav > ul").remove();
		var animate = $("#sliderNav").attr("theme");
		var list = [{
			"content": "<div class='xst-col-3'><a class='iconnav-item' href='' style='background-image: url(img/5.png);'><span>首页</span></a></div><div class='xst-col-3'><a class='iconnav-item' href='' style='background-image: url(img/6.png);'><span>新闻</span></a></div><div class='xst-col-3'><a class='iconnav-item' href='' style='background-image: url(img/7.png);'><span>动态</span></a></div><div class='xst-col-3'><a class='iconnav-item' href='http://wap.baidu.com' style='background-image: url(img/8.png);'><span>概况</span></a></div><div class='xst-col-3'><a class='iconnav-item' href='' style='background-image: url(img/5.png);'><span>首页</span></a></div><div class='xst-col-3'><a class='iconnav-item' href='' style='background-image: url(img/6.png);'><span>新闻</span></a></div><div class='xst-col-3'><a class='iconnav-item' href='http://wap.baidu.com' style='background-image: url(img/7.png);'><span>动态</span></a></div><div class='xst-col-3'><a class='iconnav-item' href='' style='background-image: url(img/8.png);'><span>概况</span></a></div>"
		},
		{
			"content": "<div class='xst-col-3'><a class='iconnav-item' href='' style='background-image: url(img/5.png);'><span>首页</span></a></div><div class='xst-col-3'><a class='iconnav-item' href='' style='background-image: url(img/6.png);'><span>新闻</span></a></div><div class='xst-col-3'><a class='iconnav-item' href='' style='background-image: url(img/7.png);'><span>动态</span></a></div><div class='xst-col-3'><a class='iconnav-item' href='http://wap.baidu.com' style='background-image: url(img/8.png);'><span>概况</span></a></div><div class='xst-col-3'><a class='iconnav-item' href='' style='background-image: url(img/5.png);'><span>首页</span></a></div><div class='xst-col-3'><a class='iconnav-item' href='' style='background-image: url(img/6.png);'><span>新闻</span></a></div><div class='xst-col-3'><a class='iconnav-item' href='http://wap.baidu.com' style='background-image: url(img/7.png);'><span>动态</span></a></div><div class='xst-col-3'><a class='iconnav-item' href='' style='background-image: url(img/8.png);'><span>概况</span></a></div>"
		},
		{
			"content": "<div class='xst-col-3'><a class='iconnav-item' href='' style='background-image: url(img/5.png);'><span>首页</span></a></div><div class='xst-col-3'><a class='iconnav-item' href='' style='background-image: url(img/6.png);'><span>新闻</span></a></div><div class='xst-col-3'><a class='iconnav-item' href='' style='background-image: url(img/7.png);'><span>动态</span></a></div><div class='xst-col-3'><a class='iconnav-item' href='http://wap.baidu.com' style='background-image: url(img/8.png);'><span>概况</span></a></div><div class='xst-col-3'><a class='iconnav-item' href='' style='background-image: url(img/5.png);'><span>首页</span></a></div><div class='xst-col-3'><a class='iconnav-item' href='' style='background-image: url(img/6.png);'><span>新闻</span></a></div><div class='xst-col-3'><a class='iconnav-item' href='http://wap.baidu.com' style='background-image: url(img/7.png);'><span>动态</span></a></div><div class='xst-col-3'><a class='iconnav-item' href='' style='background-image: url(img/8.png);'><span>概况</span></a></div>"
		}];
		var islider = new iSlider({
			data: list,
			dom: document.getElementById("sliderNav"),
			duration: 2000,
			isLooping: false,
			isAutoplay: false,
			animateType: animate, //default\rotate\flip\depth\flow\card\fade\zoomout
			fixPage: false,
			plugins: [
				['dot', { parentDom: document.getElementById("sliderNav")}]
			],
		});
		//有多少行排
		var row = $("#sliderNav").attr("row");
		//每一行排的高度*行排数+16
		var lineHeight = $("#sliderNav .slider-container [class*='xst-col-']").height()*$("#sliderNav").attr("row")+16;
		//设置最终高度
		$("#sliderNav").css({ "height":lineHeight+"px"});
    }

})();
(function() { //闭包 全局 作用域
    var something = {}; //闭包内变量
    var somefunction = function() {}; //闭包内方法

    $(window).on("load resize", function() {
        renxiaoyu.sliderNav();
		//设置风格七左右两侧菜单的高度最大为屏幕的高度
		$(".nav.theme7 > div > div").css("max-height",wHeight);
		
		$(".nav .nav-box-sideBar").on("click",".iconnav-item",function(){
			$(".nav.theme7 .nav-box-sideBar .iconnav-item").attr("class","iconnav-item");
			$(this).attr("class","iconnav-item current");
		})
    });

    $(function() {
        //其他onload流程
        somefunction();
    });
})();
