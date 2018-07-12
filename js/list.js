var renxiaoyu = renxiaoyu || {}; //自定义作用域（变量）

(function() { //闭包 renxiaoyu 作用域
    renxiaoyu.listSize = function() {
        $(".list").each(function() {
            var scale = $(this).attr("scale");
            var theme = $(this).attr("class");
            var fullwidth = $(".xst-box").width();
            var colwidth = $(this).find("a").eq(1).width();

            $(this).find(".list-img-full").css({ "width": fullwidth, "height": fullwidth / scale + "px" });
            $(this).find(".list-img a").css({ "height": fullwidth / scale + "px" });
            $(this).find("i").css({ "line-height": fullwidth / scale + "px" });
            $(this).find(".list-title.xst-a-nowrap").css({ "line-height": fullwidth / scale + "px" });
            $(this).find(".list-img-full a").css({ "line-height": fullwidth / scale + "px" });

        });
    }
})();

(function() { //闭包 全局 作用域
    var something = {}; //闭包内变量
    var somefunction = function() {

        //音频播放暂停按钮控制
        $(".list.theme5 .list-img a").click(function() {
            var _this = $(this);
            var mediaControl = function(){
				$(".list.theme5 .list-item").each(function(i, item) {
					$(item).find("a").next()[0].pause();
					$(".list.theme5 .list-img a").children("i").attr("class", "rxyfont rxy-bofang");
				});
            }
            if (_this.children("i").attr("class").indexOf("bofang") > -1) {
                mediaControl();
                _this.next()[0].play();
                _this.children("i").attr("class", "rxyfont rxy-zanting");
            } else {
                _this.next()[0].pause();
                _this.children("i").attr("class", "rxyfont rxy-bofang");
            }
        });

    }; //闭包内方法

    $(window).on("load resize", function() {
        renxiaoyu.listSize();
    });

    $(function() {
        //其他onload流程
        somefunction();
    });
})();
