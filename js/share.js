$(function(){
	$(".share").click(function(){
		//分享按钮集合
		var shareBox = '<div class="share-box">';
			shareBox +=	'<div class="xst-col-3 share-box-app"><a href="" class="rxyfont rxy-sharewechat"></a></div>';
			shareBox += 	'<div class="xst-col-3 share-box-app"><a href="" class="rxyfont rxy-sharepyq"></a></div>';
			shareBox += 	'<div class="xst-col-3 share-box-app"><a href="" class="rxyfont rxy-shareqq"></a></div>';
			shareBox += 	'<div class="xst-col-3 share-box-app"><a href="" class="rxyfont rxy-shareqzone"></a></div>';
			shareBox += 	'<div class="xst-col-3 share-box-app"><a href="" class="rxyfont rxy-sharesina"></a></div>';
			shareBox += 	'<div class="xst-col-3 share-box-app"><a href="" class="rxyfont rxy-sharetaobao"></a></div>';
			shareBox +=	'<div class="xst-col-3 share-box-app"><a href="" class="rxyfont rxy-sharebaidu"></a></div>';
			shareBox +=	'<div class="xst-col-3 share-box-app"><a href="" class="rxyfont rxy-sharealipay"></a></div>';
			shareBox += '</div>';

		//定义并显示对话框
		xstAlert({
			sign:"",
			size:"lg",
			content:shareBox,
			btn3:"取消",
		});

		//定义两个按钮的执行事件
		var btn3func = '$(".xst-modal").remove();';

		//给对话框按钮绑定事件
		bindEvents({
			data:[{
				main:"body",
				events:"click",
				current:".xst-modal-btn3",
				btnfunc:btn3func,
			}]
		});

		//使对话框垂直居中
		vertCenter(".xst-modal","[class*='xst-modal-box-']",3);
	});
})