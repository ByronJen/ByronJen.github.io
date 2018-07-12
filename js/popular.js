var renxiaoyu = renxiaoyu || {};//自定义作用域（变量）
(function() {//闭包 renxiaoyu 作用域
	
	
	renxiaoyu.popularSize = function(){
		$(".popular").each(function(){
			var scale="",theme="",fullwidth="",colheight="";
			scale = $(this).attr("scale");
			theme = $(this).attr("class");
			fullwidth = $(".xst-box").width();
			colheight = fullwidth/scale;
						
			$(this).find(".popular-img-full").css({"width":fullwidth+"px","height":fullwidth/(scale-0.66)+"px"});
			$(this).find(".popular-img").css({"height":colheight+"px"});
			$(this).find(".popular-img a").css({"height":colheight+"px"});

			//console.log($(this).attr("class")+"---"+$(this).find(".popular-img a").css("height"));
		});
	} 
	
	
	renxiaoyu.sliderPopular = function() {
		$("#sliderPopular > ul").remove();
		renxiaoyu.popularSize();
		var animate = $("#sliderPopular").attr("theme");
		var content1 = "",content2 = "";
		$("#sliderPopular .popular-item").each(function(i,item){
			if(i<4){
				content1 += item.outerHTML;
			}else{
				content2 += item.outerHTML;
			}
		})
		var list = [{
			content:content1
		},{
			content:content2
		}];
		var islider = new iSlider(document.getElementById('sliderPopular'),list, {
			duration: 5000,
			isLooping: false,
			isAutoplay: false,
			animateType: animate, //default\rotate\flip\depth\flow\card\fade\zoomout
			//fixPage: false,
			plugins: [
				['dot', { parentDom: document.getElementById("sliderPopular")}]
			],
		});
		$("#sliderPopular").css("height",$("#sliderPopular .popular-img").height()+58+"px");
    }
	
})();
(function() {//闭包 全局 作用域
	var something = {};//闭包内变量
	var somefunction = function() {};//闭包内方法
 
	$(window).on("load resize",function(){
        renxiaoyu.sliderPopular();
		renxiaoyu.popularSize();
	});
	
	$(function() {
		//其他onload流程
		somefunction();
	});
})();;