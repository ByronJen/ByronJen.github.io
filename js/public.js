//公共变量
var wHeight = $(window).height();//屏幕高度
var wWidth = $(window).width();//屏幕宽度
var dHeight = $(document).height();//文档高度
var dWidth = $(document).width();//文档宽度
var spareNum = 0;//备用数字变量

//判断APP是IOS还是Android
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

/**
 * @ function	bindEvents	动态绑定事件
 * @ param		main		宿主元素
 * @ param		events		要绑定的事件	
 * @ param		btn 		要绑定的时间名称，多个用空格隔开	
 * @ param		current 	事件元素
 * @ param		func 		要执行的方法
 * @
 * @ author		renxiaoyu
 **/
function bindEvents(param){
	$(param.data).each(function(i,item){
		$(item.main).on(item.events,item.current,function(){
			eval(item.btnfunc);
		});
	});
}

/**
 * @ function	vertCenter	使第二个元素在第一个元素中垂直居中
 * @ param		Elem1		宿主元素
 * @ param		Elem2		要绑定的事件名称，多个用空格隔开	
 * @ param		Elem3		屏幕的几分之一	
 * @
 * @ author		renxiaoyu
 **/
function vertCenter(Elem1,Elem2,Elem3){
	var Elem1Height = $(Elem1).height();
	var Elem2Height = $(Elem2).height();
	var Elem2Top = (Elem1Height-Elem2Height)/Elem3;//-------------------------------------------------------------这里需要结合手机键盘高度来
	$(Elem2).css("top",Elem2Top);
}

/**
 * @ function	xstAlert		弹框函数，并绑定事件
 * @ param		param.sign		符号标识（比如"!"、":)"、":("、"√"、"×"等）
 * @ param		param.size		弹框大小（小sm 中md 大lg 全full）
 * @ param		param.content	弹框显示的内容	
 * @ param		param.btn1 		第一个按钮名称
 * @ param		param.btn2 		第二个按钮名称
 * @
 * @ author		renxiaoyu
 **/
function xstAlert(param){
	//弹框组件
	var alertBoxClass,alertBoxSign,alertBoxContent,alertBoxBtn1,alertBoxBtn2,alertBoxBtn3;
	if(param.size!=""&&param.size!=undefined){
		alertBoxClass = "xst-modal-box-"+param.size;
	}else{
		alertBoxClass = "xst-modal-box-md";
	}
	if(param.sign!=""&&param.sign!=undefined){
		alertBoxSign = "<span class='xst-sign'>"+param.sign+"</span>";
	}else{
		alertBoxSign = "";
	}
	if(param.content!=""&&param.content!=undefined){
		alertBoxContent = param.content;
	}else{
		alertBoxContent = "";
	}
	if(param.btn1!=""&&param.btn1!=undefined){
		alertBoxBtn1 = "<a href='javascript:void(0);' class='xst-modal-btn1'>"+param.btn1+"</a>";
	}else{
		alertBoxBtn1 = "";
	}
	if(param.btn2!=""&&param.btn2!=undefined){
		alertBoxBtn2 = "<a href='javascript:void(0);' class='xst-modal-btn2'>"+param.btn2+"</a>";
	}else{
		alertBoxBtn2 = "";
	}
	if(param.btn3!=""&&param.btn3!=undefined){
		alertBoxBtn3 = "<a href='javascript:void(0);' class='xst-modal-btn3'>"+param.btn3+"</a>";
	}else{
		alertBoxBtn3 = "";
	}
	//定义弹框
	var alertBox = "<div class='xst-modal'><div class='"+alertBoxClass+"'><div class='modal-content'>"+alertBoxSign+alertBoxContent+"</div><div class='modal-control'>"+alertBoxBtn1+alertBoxBtn2+alertBoxBtn3+"</div></div></div>";
	//移除原弹框
	$(".xst-modal").remove();
	//显示弹框，
	$("body").append(alertBox);
}

/**
 * @ function	xstTips		小提示
 * @ param		sign		符号标识（比如"!"、":)"、":("、"√"、"×"等）
 * @ param		content		提示内容
 * @ author		renxiaoyu
 **/
function xstTips(sign,content){
	$(".xst-tips").remove();
	var tipsBox = "<div class='xst-tips'><div class='xst-tips-box'><span class='xst-sign'>"+sign+"</span><span>"+content+"</span></div></div>";//移除原弹框
	//显示弹框，
	$("body").append(tipsBox);
	//3秒后自动关闭
	setTimeout('$(".xst-tips").remove()',2000);
}


//页面滑动至最顶部
function pageScroll(){ 
	//把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数） 
	window.scrollBy(0,-20);
	//延时递归调用，模拟滚动向上效果
	scrolldelay = setTimeout('pageScroll()',1);
	//获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值 
	var sTop=document.documentElement.scrollTop+document.body.scrollTop;
	//判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
	if(sTop==0) clearTimeout(scrolldelay);
}

/**
 * @ function	scrollTo	将指定容器横向滑动指定距离
 * @ param		m			当前是第几个元素
 * @ param		n			从第几个元素开始
 * @ param		box			容器
 * @ author		renxiaoyu
 **/
function scrollTo(m,n,box){ 
	//console.log("m:"+m+"--n:"+n);
	var distance = 0;
	if(m>n){
		box.children().each(function(i,item){
			//console.log(i+"++"+m);
			if(i<m&&i>0){
				distance += $(this).width()+16;
				//console.log(distance);
			}
		})
		box.scrollLeft(distance);
	}else{
		box.scrollLeft(distance);
	}
}
/**
 * @ function	getUrlParam	获取URL中指定参数的值
 * @ param		name		参数名称
 * @
 * @ author		renxiaoyu
 **/
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var rl = window.location.search.substr(1).match(reg);
	if (rl != null) return unescape(rl[2]); return null;
}


/**
 * @ function	viewGallery	获取图片url集转换成全屏轮播效果
 * @ param		parent		父级节点
 * @ param		thisEle		要查找的节点（图片所属节点）
 * @ author		renxiaoyu
 **/
function viewGallery(parent,thisEle){
	var sliderData = [];
	parent.find("ul").remove();
	var img = new Image();
	parent.find(thisEle).each(function(i,item){
		var picUrl = $(this).css("background-image").split("\"")[1] ;
		img.src = picUrl;
		var picOldWidth = img.width;//图片原始宽度
		var picOldHeight = img.height;//图片原始高度
		var picWidth = "";//图片最终宽度
		var picHeight = "";//图片最终高度
		/*7种图片尺寸，分5种情况*/
		if(picOldWidth>wWidth&&picOldHeight<=wHeight){//原始宽度大于屏幕宽度、原始高度小于等于屏幕高度
			picWidth = wWidth;
			picHeight = wWidth/picOldWidth*picOldHeight;
		}else if(picOldWidth<=wWidth&&picOldHeight>wHeight){//原始宽度小于等于屏幕宽度、原始高度大于屏幕高度
			picHeight = wHeight;
			picWidth = wHeight/picOldHeight*picOldWidth;
		}else if(picOldWidth>wWidth&&picOldHeight>wHeight){//原始宽度大于屏幕宽度、原始高度大于屏幕高度	
			if(picOldWidth>=picOldHeight){//原始宽度大于屏幕宽度、原始高度大于屏幕高度、原始宽度大于等于原始高度
				picWidth = wWidth;
				picHeight = wWidth/picOldWidth*picOldHeight;
			}else{//原始宽度大于屏幕宽度、原始高度大于屏幕高度、原始宽度小于原始高度
				picHeight = wHeight;
				picWidth = wHeight/picOldHeight*picOldWidth;
			}
		}else{	//原始宽度小于等于屏幕宽度、原始高度小于等于屏幕高度
			picWidth = picOldWidth;
			picHeight = picOldHeight;
		}

		var top = "";
		if(wHeight>picHeight){
			top = (wHeight-picHeight)/2
		}else{
			top = 0;
		}

		sliderData[i] = {content:'<img src='+picUrl+' style="width:'+picWidth+'px;height:'+picHeight+'px;top:'+top+'px;position: relative;">'};
	});
	//console.log(JSON.stringify(sliderData));
	$("body").append('<div id="slider-gallery"><div class="rxyfont rxy-close xst-box-close"></div></div>');
	var S = new iSlider(document.getElementById('slider-gallery'), sliderData, {
        isAutoplay: 0,
        isLooping: 1,
        isOverspread: 1
    });
	$("#slider-gallery").on("click",".xst-box-close",function(){
		$("#slider-gallery").remove();
	})
}

/**
 * @ function	表单正则验证	单选复选框背景颜色切换
 * @ param		ele				宿主元素
 * @ param		rule 			规则说明
 * @
 * @ author		renxiaoyu
 **/
function regVerify(ele,rule){
	var _rNumberFloat = /^[0-9.-]+$/;
	var _rNumberInt = /^[0-9-]+$/;
	var _rLetter = /^[a-z]+$/i;
	var _rDate = /^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|1[0-9]|2[0-8]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/;
	var _rNumLet = /^[0-9a-z]+$/i;
	var _rPhone = /^(1)[0-9]{10}$/;
	var _rCall = /^[0-9-]{6,13}$/;
	var _rEmail = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
	var _rQQ = /^[0-9]{5,20}$/;
	var _rURL = /^http:\/\//;
	var _rPostcode = /^[0-9]{6}$/;
	var varName = "var _rule = _r" + rule;
	eval(varName);
	var testValue = _rule.test(ele.val());
	if(!testValue){
		ele.attr("_error",true);
	}else{
		ele.removeAttr("_error");
	}
}


/**
 * @ function	icookie			操作浏览器cookie
 * @ param		name			cookie名
 * @ param		value 			cookie值
 * @ param		options			{expires:1}1分钟为周期	{path:"/"}路径目录
 * @
 * @ author		renxiaoyu
 **/
function icookie(name, value, options) {
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
	   date.setTime(date.getTime() + (options.expires * 60 * 1000));
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
 * @ function	bubbleEffect	冒泡特效
 * @ param		box				容器盒子
 * @ param		content 		冒泡显示的内容
 * @ param		color			内容颜色
 * @
 * @ author		renxiaoyu
 **/
 function bubbleEffect(e,box,content,color){
	var $i = $("<span/>").text(content[spareNum]); 
	spareNum = (spareNum + 1) % content.length; 
	var x = e.pageX, 
	y = e.pageY; 
	$i.css({ 
		"z-index": 9999999999999, 
		"top": y - 20, 
		"left": x, 
		"position": "absolute", 
		"font-weight": "bold", 
		"color": color /*颜色代码*/
	}); 
	box.append($i); 
	$i.animate({ 
		"top": y - 180, 
		"opacity": 0 
	}, 
	1500, 
	function(){
		$i.remove(); 
	});
 }