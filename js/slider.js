var renxiaoyu = renxiaoyu || {}; //自定义作用域（变量）
(function() { //闭包 renxiaoyu 作用域
    renxiaoyu.sliderSize = function() {

        $(".slider").each(function(i) {
            $(this).html("");
            var scale = $(this).attr("scale");
            var animate = $(this).attr("theme");
            $(this).css("height", $(this).width() / scale);
            var list = [
				{ "content": "<a class='dom_imgbg' style='background-image:url(img/bing-1.jpg)' href='http://www.baidu.com'><span>称印军要么撤走要么被歼的中国外交官啥来头？</span></a>" }, 
				{ "content": "<a class='dom_imgbg' style='background-image:url(img/bing-2.jpg)' href='http://www.baidu.com'><span>61岁父亲酿酒51年！恰逢酒厂周年庆，内部用酒开放购买</span></a>" }, 
				{ "content": "<a class='dom_imgbg' style='background-image:url(img/bing-3.jpg)' href='http://www.baidu.com'><span>农村光棍娶老婆，笑坏一村人！</span></a>" }, 
				{ "content": "<a class='dom_imgbg' style='background-image:url(img/bing-4.jpg)' href='http://www.baidu.com'><span>世界500强榜单的互联网风云：苹果最赚钱，中国公司京东亏最多，阿里、腾讯首上榜</span></a>" } 
			];
            var islider = new iSlider({
                data: list,
                dom: document.getElementsByClassName("slider")[i],
                duration: 2000,
                isLooping: true,
                isAutoplay: true,
                animateType: animate, //default\rotate\flip\depth\flow\card\fade\zoomout
                fixPage: false,
                plugins: [
                    ['dot', { parentDom: document.getElementsByClassName("slider")[i] }],
					['button']
                ],
            });
        });


    }

})();
(function() { //闭包 全局 作用域
    var something = {}; //闭包内变量
    var somefunction = function() {}; //闭包内方法

    $(window).on("load resize", function() {
        renxiaoyu.sliderSize();
    });

    $(function() {
        //其他onload流程
        somefunction();
    });
})();
