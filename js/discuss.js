var renxiaoyu = renxiaoyu || {}; //自定义作用域（变量）

(function() { //闭包 renxiaoyu 作用域
    renxiaoyu.discussSize = function() {
        $(".discuss").each(function() {
            var colwidth = $(this).find(".discuss-item-middle-imgs a").eq(1).width();
			$(this).find(".discuss-item-middle-imgs a").css("height",colwidth);
        });
    }

	renxiaoyu.goComment = function(text){	
		//隐藏底部悬浮框
		$(".comment").css("display","none");
		
		if(text==""||text==undefined){
			text = "说点什么..."
		}else{
			text = "回复"+text+":"
		}

		//定义并显示对话框
		xstAlert({
			sign:"",
			size:"lg",
			content:"<textarea type='text' id='comment_content' class='xst-form-control' placeholder='"+text+"' rows='3'></textarea>",
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
	}

})();

(function() { //闭包 全局 作用域
    var something = {}; //闭包内变量
    var somefunction = function() {

		$(".discuss-item-middle-text").each(function(){
			if($(this).height()>108){
				$(this).attr("class","discuss-item-middle-text-part");
				$(this).after('<span class="discuss-item-middle-more _themeColor" id="cl_a04000">全文</span>')
			}
		});
        $(".discuss").on("click",".discuss-item-middle-more",function(){
			$(this).prev().attr("class","discuss-item-middle-text-more");
			$(this).attr("class","discuss-item-middle-part _themeColor");
		});
		$(".discuss").on("click",".discuss-item-middle-part",function(){
			$(this).prev().attr("class","discuss-item-middle-text-part");
			$(this).attr("class","discuss-item-middle-more _themeColor");
		});
		$(".discuss").on("click",".discuss-item-middle-imgs a",function(){
			if($(this).attr("href")==""||$(this).attr("href")==undefined){
				//通过动态绑定事件获取该组中所有的图片地址，以画廊轮播图片的形式展示出来
				viewGallery($(this).parent().parent(),"a");
			}
		});
		$(".discuss").on("click",".discuss-reply-item",function(){
			//获取要回复的用户名，并显示在输入框中
			renxiaoyu.goComment($(this).find("span").eq(0).text());
		})
		$(".discuss").on("click",".rxy-duihua",function(){
			renxiaoyu.goComment();
		})


    }; //闭包内方法

    $(window).on("load resize", function() {
        renxiaoyu.discussSize();
    });

    $(function(){
        //其他onload流程
        somefunction();
    });
})();
