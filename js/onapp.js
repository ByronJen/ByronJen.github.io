var renxiaoyu = renxiaoyu || {}; //自定义作用域（变量）
(function() { //闭包 renxiaoyu 作用域

	renxiaoyu.appendFixedTips = function(){
		fixedTipsContent = 
			'<div class="tips-box tips-nopadding">'+
				'<div class="fixedtips theme1 tips-nopadding" id="bg_686871">'+
					'<div class="fixedtips-box">'+
						'<div class="tips-col-2">'+
							'<a class="fixedtips-icon" style="background-image:url(/syncott/Modile/Detailed/images/app_icon.png);"></a>'+
						'</div>'+
						'<div class="tips-col-6">'+
							'<a class="font12">更多精彩,请下载官方APP!</a>'+
						'</div>'+
						'<div class="tips-col-1">'+
							'<a class="textcenter font12 closeTopTips" id="cl_76d7c4" href="javascript:void(0)">关闭</a>'+
						'</div>'+
						'<div class="tips-col-3">'+
							'<a class="textcenter font12" id="bg_c0392b" href="/syncott/Modile/Detailed/download/index.html">免费下载</a>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="tips-box tips-nopadding">'+
				'<div class="fixedtips theme2 tips-bordertop _themeColor" id="bg_e8f8f5">'+
					'<div class="fixedtips-box textcenter">'+
						'<div class="tips-col-2_5">'+
							'<a href=""><i class="font18 rxyfont rxy-shouye0"></i><br><span class="font12"></span></a>'+
						'</div>'+
						'<div class="tips-col-2_5">'+
							'<a href=""><i class="font18 rxyfont rxy-news0"></i><br><span class="font12"></span></a>'+
						'</div>'+
						'<div class="tips-col-2_5">'+
							'<a href=""><i class="font18 rxyfont rxy-lanmu0"></i><br><span class="font12"></span></a>'+
						'</div>'+
						'<div class="tips-col-2_5">'+
							'<a href=""><i class="font18 rxyfont rxy-find0"></i><br><span class="font12"></span></a>'+
						'</div>'+
						'<div class="tips-col-2_5">'+
							'<a href=""><i class="font18 rxyfont rxy-wo0"></i><br><span class="font12"></span></a>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>';
		$("body").prepend(fixedTipsContent);
	}
	renxiaoyu.appendHeadIcon = function(){
		headContent = 
		'<meta name="apple-mobile-web-app-capable" content="yes" />'+
		'<meta name="full-screen" content="yes" />'+
		'<meta name="browsermode" content="application" />'+
		'<link rel="apple-touch-icon" sizes="57x57" href="/syncott/Modile/Detailed/images/touch-icon-57.png" />'+
		'<link rel="apple-touch-icon" sizes="72x72" href="/syncott/Modile/Detailed/images/touch-icon-72.png" />'+
		'<link rel="apple-touch-icon" sizes="114x114" href="/syncott/Modile/Detailed/images/touch-icon-114.png" />'+
		'<link rel="apple-touch-icon" sizes="144x144" href="/syncott/Modile/Detailed/images/touch-icon-144.png" />';
		$("title").after(headContent);
	}

	/**
	 * @ function	renxiaoyu.getUrlParam	获取URL中指定参数的值
	 * @ param		name		参数名称
	 * @
	 * @ author		renxiaoyu
	 **/
	renxiaoyu.getUrlParam = function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var rl = window.location.search.substr(1).match(reg);
		if (rl != null) return unescape(rl[2]); return null;
	}
	
	/**
	 * @ function	renxiaoyu.icookie			操作浏览器cookie
	 * @ param		name			cookie名
	 * @ param		value 			cookie值
	 * @ param		options			{expires:1}周期单位“天”	{path:"/"}路径目录
	 * @
	 * @ author		renxiaoyu
	 **/
	renxiaoyu.icookie = function(name, value, options) {
		if (typeof value != 'undefined') {
		  options = options || {};
		  if (value === null) {
		  value = '';
		  options = $.extend({}, options);
		  options.expires = -1;
		  }
		  var expires = '';
		  if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
		  var date;
		  if (typeof options.expires == 'number') {
		   date = new Date();
		   date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
		  } else {
		   date = options.expires;
		  }
		  expires = '; expires=' + date.toUTCString();
		  }
		  var path = options.path ? '; path=' + (options.path) : '';
		  var domain = options.domain ? '; domain=' + (options.domain) : '';
		  var secure = options.secure ? '; secure' : '';
		  document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
		} else {
		  var cookieValue = null;
		  if (document.cookie && document.cookie != '') {
		  var cookies = document.cookie.split(';');
		  for (var i = 0; i < cookies.length; i++) {
		   var cookie = jQuery.trim(cookies[i]);
		   if (cookie.substring(0, name.length + 1) == (name + '=')) {
		   cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
		   break;
		   }
		  }
		  }
		  return cookieValue;
		}
	};

	/**
	 * @ function	renxiaoyu.bindEvents	动态绑定事件
	 * @ param		main		宿主元素
	 * @ param		events		要绑定的事件	
	 * @ param		btn 		要绑定的时间名称，多个用空格隔开	
	 * @ param		current 	事件元素
	 * @ param		func 		要执行的方法
	 * @
	 * @ author		renxiaoyu
	 **/
	renxiaoyu.bindEvents = function(param){
		$(param.data).each(function(i,item){
			$(item.main).on(item.events,item.current,function(){
				eval(item.btnfunc);
			});
		});
	}

	/**
	 * @ function	renxiaoyu.vertCenter	使第二个元素在第一个元素中垂直居中
	 * @ param		Elem1		宿主元素
	 * @ param		Elem2		要绑定的事件名称，多个用空格隔开	
	 * @ param		Elem3		屏幕的几分之一	
	 * @
	 * @ author		renxiaoyu
	 **/
	renxiaoyu.vertCenter = function(Elem1,Elem2,Elem3){
		var Elem1Height = $(Elem1).height();
		var Elem2Height = $(Elem2).height();
		var Elem2Top = (Elem1Height-Elem2Height)/Elem3;//-------------------------------------------------------------这里需要结合手机键盘高度来
		$(Elem2).css("top",Elem2Top);
	}

	/**
	 * @ function	renxiaoyu.xstAlert		弹框函数，并绑定事件
	 * @ param		param.sign		符号标识（比如"!"、":)"、":("、"√"、"×"等）
	 * @ param		param.size		弹框大小（小sm 中md 大lg 全full）
	 * @ param		param.content	弹框显示的内容	
	 * @ param		param.btn1 		第一个按钮名称
	 * @ param		param.btn2 		第二个按钮名称
	 * @
	 * @ author		renxiaoyu
	 **/
	renxiaoyu.xstAlert = function(param){
		//弹框组件
		var alertBoxClass,alertBoxSign,alertBoxContent,alertBoxBtn1,alertBoxBtn2,alertBoxBtn3;
		if(param.size!=""&&param.size!=undefined){
			alertBoxClass = "tips-modal-box-"+param.size;
		}else{
			alertBoxClass = "tips-modal-box-md";
		}
		if(param.sign!=""&&param.sign!=undefined){
			alertBoxSign = "<span class='tips-sign'>"+param.sign+"</span>";
		}else{
			alertBoxSign = "";
		}
		if(param.content!=""&&param.content!=undefined){
			alertBoxContent = param.content;
		}else{
			alertBoxContent = "";
		}
		if(param.btn1!=""&&param.btn1!=undefined){
			alertBoxBtn1 = "<a href='javascript:void(0);' class='tips-modal-btn1'>"+param.btn1+"</a>";
		}else{
			alertBoxBtn1 = "";
		}
		if(param.btn2!=""&&param.btn2!=undefined){
			alertBoxBtn2 = "<a href='javascript:void(0);' class='tips-modal-btn2'>"+param.btn2+"</a>";
		}else{
			alertBoxBtn2 = "";
		}
		if(param.btn3!=""&&param.btn3!=undefined){
			alertBoxBtn3 = "<a href='javascript:void(0);' class='tips-modal-btn3'>"+param.btn3+"</a>";
		}else{
			alertBoxBtn3 = "";
		}
		//定义弹框
		var alertBox = "<div class='tips-modal'><div class='"+alertBoxClass+"'><div class='tips-modal-content'>"+alertBoxSign+alertBoxContent+"</div><div class='modal-control'>"+alertBoxBtn1+alertBoxBtn2+alertBoxBtn3+"</div></div></div>";
		//移除原弹框
		$(".tips-modal").remove();
		//显示弹框，
		$("body").append(alertBox);
	}


})();
(function() { //闭包 全局 作用域
    var something = {}; //闭包内变量
    var somefunction = function() {}; //闭包内方法

    $(window).on("load", function() {
		//检测是否带有分享标识
		var onapp = renxiaoyu.getUrlParam("onapp");
		var tips = renxiaoyu.getUrlParam("tips");
		if(onapp!="yes"){
			renxiaoyu.appendFixedTips();
			$("html").css({"padding-top":"40px","padding-bottom":"53px"});
		}
		if(tips=="yes"){
			renxiaoyu.appendHeadIcon();
		}
		
		//获取运营商编号
		var host = window.location.hostname+":"+window.location.port;
		//var host = "www.chinashadt.com:8022"
		var inturl = "http://www.chinashadt.com:8050/shadt1/appmodelinfo/get?hostname="+host+"&callback=?";
		//console.log(inturl);
		$.ajax({
			url:inturl,
			type:"post",
			dataType:"jsonp",
			jsonp:"callback",
			success:function(response){
				if(response.length>0){
					$(response).each(function(i,item){
						if(item.ordernum == i+1){
							var urladr = item.urladr;
							if(urladr==null){
								urladr = "/syncott/Modile/Detailed/download/index.html";
							}
							//console.log(urladr);
							$(".fixedtips.theme2 a:eq("+i+")").attr("href",urladr).find("span").text(item.mdtpyename);
						}
					})
				}else{
					$(".fixedtips.theme2").remove();
					console.log("请至数据库设置底部菜单链接");
					$("html").css("padding-bottom","0");
				}
			} 
		});

		//点击底部菜单，图标及颜色相应变化
        $("body").on("click",".fixedtips.theme2 a",function(){
			$(".fixedtips.theme2 a").removeClass();
			$(this).attr("class","current");
			var newsClass = $(this).find("i").attr("class");
			$(".fixedtips.theme2 a").each(function(){
				if($(this).find("i").attr("class").indexOf("0")==-1){
					$(this).find("i").attr("class",$(this).find("i").attr("class")+0);
				}
			})
			$(this).find("i").attr("class",newsClass.substr(0,newsClass.length-1));
		})

		//点击关闭按钮，移除顶部下载提示框
		$("body").on("click",".closeTopTips",function(){
			$(".fixedtips.theme1").parent().remove();
			$("html").css("padding-top","0");
		})

		//检测Safari浏览器下弹提示框，指引用户新建快捷方式。
		//renxiaoyu.icookie("tips",null);
		if(navigator.userAgent.indexOf("iPhone OS") > -1&&renxiaoyu.getUrlParam("tips")=="yes"&&renxiaoyu.icookie("tips")!="hide"){
			renxiaoyu.icookie("tips","hide",{expires:1});
			if(navigator.userAgent.indexOf("MicroMessenger") > -1||navigator.userAgent.indexOf("QQ") > -1){
				//定义并显示对话框
				renxiaoyu.xstAlert({
					sign:"",
					size:"md",
					content:"点击右上角“<i class='rxyfont rxy-sandian font24'></i>”图标，在弹出框中选择用“<i class='rxyfont rxy-safari font24' id='cl_007aff'></i>”浏览器打开",
					btn1:"我知道了",
				});
				var btn1func = '$(".tips-modal").remove();';
				//给对话框按钮绑定事件
				renxiaoyu.bindEvents({
					data:[{
						main:"body",
						events:"click",
						current:".tips-modal-btn1",
						btnfunc:btn1func,
					}]
				});
				//使对话框垂直居中
				renxiaoyu.vertCenter(".tips-modal","[class*='tips-modal-box-']",10);
			}else{
				//定义并显示对话框
				renxiaoyu.xstAlert({
					sign:"",
					size:"md",
					content:"点击浏览器底部“<i class='rxyfont rxy-chouti font24' id='cl_007aff'></i>”图标，再点“<i class='rxyfont rxy-add font24' id='cl_686871'></i>”可将应用添加到手机主屏幕。",
					btn1:"我知道了",
				});
				var btn1func = '$(".tips-modal").remove();';
				//给对话框按钮绑定事件
				renxiaoyu.bindEvents({
					data:[{
						main:"body",
						events:"click",
						current:".tips-modal-btn1",
						btnfunc:btn1func,
					}]
				});
				//使对话框垂直居中
				renxiaoyu.vertCenter(".tips-modal","[class*='tips-modal-box-']",1.15);
			}
		}

    });

    $(function() {
        //其他onload流程
        somefunction();
    });
})();
