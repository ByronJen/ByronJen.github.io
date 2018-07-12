$(function(){
	$(".comment_go").click(function(){		
		//隐藏底部悬浮框
		$(".comment").css("display","none");

		//定义并显示对话框
		xstAlert({
			sign:"",
			size:"lg",
			content:"<textarea type='text' id='comment_content' class='xst-form-control' placeholder='说点什么' rows='3'></textarea>",
			btn1:"提交",
			btn2:"清空",
			btn3:"取消",
		});

		//输入框获取焦点
		$("#comment_content").focus();

		//定义两个按钮的执行事件
		var btn1func = 'console.log("yes");$(".xst-modal").remove();$(".comment").css("display","block");';
		var btn2func = '$("#comment_content").val("");';
		var btn3func = '$(".xst-modal").remove();$(".comment").css("display","block");';

		//给对话框按钮绑定事件
		bindEvents({
			data:[{
				main:"body",
				events:"click",
				current:".xst-modal-btn1",
				btnfunc:btn1func,
			},{
				main:"body",
				events:"click",
				current:".xst-modal-btn2",
				btnfunc:btn2func,
			},{
				main:"body",
				events:"click",
				current:".xst-modal-btn3",
				btnfunc:btn3func,
			}]
		});

		//使对话框垂直居中
		vertCenter(".xst-modal","[class*='xst-modal-box-']",4);
	});
	
	$("body").click(function(e) {
		var content = "我离天空最近的一次，是你把我高高地举过了你的肩头。"; 
		bubbleEffect(e,$(this),content,"blue");
	}); 
})