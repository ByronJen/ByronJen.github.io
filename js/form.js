var renxiaoyu = renxiaoyu || {};//自定义作用域（变量）

(function() {//闭包 renxiaoyu 作用域

	/**
	 * @ function	changeBgColor	背景颜色切换
	 * @ param		ele				宿主元素
	 * @ param		clA				默认背景色	
	 * @ param		clB 			要切换的颜色	
	 * @ param		one 			是否唯一   1是   0否
	 * @
	 * @ author		renxiaoyu
	 **/
	renxiaoyu.changeBgColor = function(ele,clA,clB,one){
		if(one==1){
			$("[name='"+ele.attr("name")+"']").css("background-color",clA);
		}
		var bgCl = ele.css("background-color");
		if(bgCl.indexOf(clA)>-1){
			ele.css("background-color",clB);
		}else{
			ele.css("background-color",clA);
		}	
	}

	

})();

(function() {//闭包 全局 作用域
	var something = {};//闭包内变量
	var somefunction = function(){

		// 单选按钮点击事件
		$('input[type="radio"]').click(function(){
			renxiaoyu.changeBgColor($(this),"rgb(255, 255, 255)","rgb(24, 180, 237)",1);
		});
		
		// 复选按钮点击事件
		$('input[type="checkbox"]').click(function(){
			renxiaoyu.changeBgColor($(this),"rgb(255, 255, 255)","rgb(242, 94, 94)",0);
		});

		// 输入框实时监听
		$("input[_rule]").bind('input','onpropertychange blur', function(){
			regVerify($(this),$(this).attr("_rule"));
		});

		//提交显示错误信息
		$(".xst-form-btn").click(function(){
			var message="";
			$("input[_rule]").each(function(){
				if($(this).val()==""||$(this).attr("_error")!=undefined){
					message += $(this).attr("_name")+",";
				}
			});
			xstTips(":)",message);	
		});

	};//闭包内方法

	$(window).on("load resize",function(){

	});
	
	$(function() {
		//其他onload流程
		somefunction();
	});
})();