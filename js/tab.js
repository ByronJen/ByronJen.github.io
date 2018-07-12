var renxiaoyu = renxiaoyu || {}; //自定义作用域（变量）

(function() { //闭包 renxiaoyu 作用域
	
	//将e指向的当前版块滑动至页面顶部
    renxiaoyu.scrollMove = function(t,e){
		if(e.html()!=undefined){
			var eTop = e.offset().top;//当前元素与文档顶部的距离
			var sTop = $(window).scrollTop();//滚动条与文档顶部的距离
			var tTop = t.height();//要排除的元素高度

			window.scrollBy(0,eTop-sTop-tTop);
		}else{
			console.log("要定位的区域不存在");
		}
	}

})();

(function() { //闭包 全局 作用域
    var something = {}; //闭包内变量
    var somefunction = function() {
	
		//风格一 固定切换
		$(".tab.theme1 .tab-title >li:eq(0)").attr("class","tab-title-this");
		$(".tab.theme1 .tab-content >div:eq(0)").fadeIn(100);
		$(".tab.theme1").delegate(".tab-title li","click",function(){
			$(".tab.theme1 .tab-title li").removeAttr("class");
			$(this).attr("class","tab-title-this");
			$(".tab.theme1 .tab-content>div").fadeOut(0);
			$(".tab.theme1 .tab-content > div:eq("+$(this).index()+")").fadeIn(100);

			//点击切换时选项卡头左右定位
			scrollTo($(this).index(),1,$(this).parent());
		});

		//风格二 滑动定位
		$(".tab.theme2").delegate(".tab-title li","click",function(){
			$(".tab.theme2 .tab-title li").removeAttr("class");
			//console.log($(this).index());
			$(".tab.theme2 .tab-title li:eq("+$(this).index()+")").addClass("tab-title-this");
			$(".tab.theme2 .tab-title-fixed li:eq("+$(this).index()+")").addClass("tab-title-this");
			
			renxiaoyu.scrollMove($(".tab.theme2 .tab-title"),$(".tab.theme2 .tab-content .tab-item:eq("+$(this).index()+")"));

			//点击切换时选项卡头左右定位
			scrollTo($(this).index(),1,$(".tab.theme2 .tab-title-fixed"));
		});

		//悬浮选项卡
		var tTop = $(".tab.theme2 .tab-title").offset().top;
		var lastEle = $(".tab.theme2 .tab-content").children().last();//选项卡中最后一个元素
		var eTop = lastEle.offset().top;//选项卡中最后一个元素到文档顶部的距离
		var eHeight = lastEle.height();//选项卡中最后一个元素的高度
		var eBottom = dHeight-eTop-eHeight;//元素与底部的距离
		var we = wHeight-eHeight;
		//console.log("e:"+eTop+",s:"+sTop);
		//console.log("wh:"+wHeight+",eb:"+eBottom);		
		//console.log("e:"+eTop+",s:"+sTop);	

		if(eBottom<we){
			$("body").css("padding-bottom",we-eBottom-$(".tab.theme2 .tab-title").height());
		}

		$(window).scroll(function(event){
			if($(window).scrollTop()>=tTop){
				$(".tab.theme2 .tab-title.tab-title-fixed").html($(".tab.theme2 .tab-title").html());
			}else{
				$(".tab.theme2 .tab-title.tab-title-fixed").empty();
			}
			$(".tab.theme2 .tab-content .tab-item").each(function(i,item){
				
				var sTop = $(window).scrollTop();//滚动条到文档顶部的距离
				if(sTop>=$(this).offset().top-$(".tab.theme2 .tab-title").height()){
					$(".tab.theme2 .tab-title li").removeAttr("class");
					$(".tab.theme2 .tab-title li:eq("+i+")").addClass("tab-title-this");
					$(".tab.theme2 .tab-title-fixed li:eq("+i+")").addClass("tab-title-this");
					scrollTo(i,1,$(".tab.theme2 .tab-title-fixed"));
				}
			});

		});



    }; //闭包内方法

    $(window).on("load resize", function() {
       
    });

    $(function() {
        //其他onload流程
        somefunction();
    });
})();
