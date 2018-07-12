var renxiaoyu = renxiaoyu || {}; //自定义作用域（变量）
(function() { //闭包 renxiaoyu 作用域
    renxiaoyu.advSize = function() {
        $(".adv").each(function(i) {
            var width = $(".xst-box").width();
            var scale = $(this).attr("scale");
            var row = $(this).attr("row");
            var col = $(this).attr("col");
            var theme = $(this).attr("class");
            $(this).find("div").css({ "width": width / col, "height": width / scale });
            $(this).find("p").css({ "height": (width / scale - (row - 1) * 4) / row });
            $(this).find("a").each(function(){
				$(this).css("line-height",$(this).parent().css("height"));
			});
			$(this).css("height",$(this).find("p").css("height")*row + 16 +"px");
        });
    }
})();
(function() { //闭包 全局 作用域
    var something = {}; //闭包内变量
    var somefunction = function() {}; //闭包内方法

    $(window).on("load resize", function() {
        renxiaoyu.advSize();
    });

    $(function() {
        //其他onload流程
        somefunction();
    });
})();
