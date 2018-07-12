// JavaScript Document
function a(){	
	t = parseInt(x.css('top'));
	y.css('top','24px');	
	x.animate({top: t - 24 + 'px'},'slow');	//24为每个li的高度
	if(Math.abs(t) == h-24){ //24为每个li的高度
		y.animate({top:'0px'},'slow');
		z=x;
		x=y;
		y=z;
	}
	setTimeout(a,3000);//滚动间隔时间 现在是3秒
}

var renxiaoyu = renxiaoyu || {};//自定义作用域（变量）
(function() {//闭包 renxiaoyu 作用域

	$('.theme3 .hot-box-content').each(function(){
		$(this).next().html($(this).html());
		x = $(this);
		y = $(this).next(".hot-box-copy");
		h = $(this).find('li').length * 24; //24为每个li的高度
		setTimeout(a,3000);//滚动间隔时间 现在是3秒 
	});
	

})();
(function() {//闭包 全局 作用域
	var something = {};//闭包内变量
	var somefunction = function() {};//闭包内方法
 
	$(window).on("load resize",function(){
		
		//文字淡入淡出切换   --开始
		var i=0;
		window.setInterval(function(){ 		
			var liCount = $('.theme4 .hot-box-content').find("li").size();
			$('.theme4 .hot-box-content li').css("opacity","0");
			if(i>=liCount-1){
				i=0;
			}else{
				i++;
			}
			//console.log(i);
			$('.theme4 .hot-box-content li:eq('+i+')').css("opacity","1");
		},3000); //当前间隔时间时3秒
		//文字淡入淡出切换   --结束


	});

	$(function() {
		//其他onload流程
		somefunction();
	});
})();