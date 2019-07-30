//左下导航条
$(function () {
    $(".testtest").on("click", () => {
        console.log("单独测试压缩支持es6");
    });

    $(".right_left li").eq(0).on("mouseenter", function () {
        $(this).find(".bg1").text("");
        $(this).addClass("li1Hover");
    }).on("mouseleave", function () {
        $(this).find(".bg1").text("返回首页");
        $(this).removeClass("li1Hover");
    });
    //首页喵链接
    $(".right_left li").eq(0).on("click", function () {
        console.log($(window).scrollTop());
        $("html").animate({
            scrollTop: "0"
        });
    });


    $(".right_left li").eq(1).on("mouseenter", function () {
        $(this).find(".bg2").text("");
        $(this).addClass("li2Hover");
    }).on("mouseleave", function () {
        $(this).find(".bg2").text("HOT");
        $(this).removeClass("li2Hover");
    });

    //热卖喵链接
    $(".right_left li").eq(1).on("click", function () {

        $("html").animate({
            scrollTop: $(".hot").offset().top
        });
    });

    $(".right_left li").eq(2).on("mouseenter", function () {
        $(this).find("a").removeClass();
        $(this).addClass("li3Hover");
    }).on("mouseleave", function () {
        $(this).removeClass("li3Hover");
        $(this).find("a").addClass("bg3");
    });

    //女装喵链接
    $(".right_left li").eq(2).on("click", function () {

        $("html").animate({
            scrollTop: $(".woman").offset().top
        });
    });

    $(".right_left li").eq(3).on("mouseenter", function () {
        $(this).find("a").removeClass();
        $(this).addClass("li4Hover");
    }).on("mouseleave", function () {
        $(this).removeClass();
        $(this).find("a").addClass("bg4");
    });

    //男装喵链接
    $(".right_left li").eq(3).on("click", function () {

        $("html").animate({
            scrollTop: $(".man").offset().top
        }, 500);
    });
    $(".right_left li").eq(4).on("mouseenter", function () {
        $(this).find("a").removeClass();
        $(this).addClass("li5Hover");
    }).on("mouseleave", function () {
        $(this).removeClass();
        $(this).find("a").addClass("bg5");
    });
    $(".right_left li").eq(5).on("mouseenter", function () {
        $(this).find("a").removeClass();
        $(this).addClass("li6Hover");
    }).on("mouseleave", function () {
        $(this).removeClass();
        $(this).find("a").addClass("bg6");
    });

    $(".right_left li").eq(6).on("mouseenter", function () {
        $(this).find("a").removeClass();
        $(this).addClass("li7Hover");
    }).on("mouseleave", function () {
        $(this).removeClass();
        $(this).find("a").addClass("bg7");
    });


    //返回顶部喵链接
    $(".right_left li").eq(7).on("click", function () {
        $("html").animate({
            scrollTop: 0
        }, 500);
    });

    $(".right_left li").eq(7).on("mouseenter", function () {
        $(this).find("a").removeClass();
        $(this).addClass("li8Hover");
    }).on("mouseleave", function () {
        $(this).removeClass();
        $(this).find("a").addClass("bg8");
    });


    //右边购物车
    $(function () {

        $(".left_fiexd").on("click", ".left_car", function () {

            let right = parseInt($(".left_fiexd").css("right"));
            console.log(right);
            if (right != 0) {
                $(".left_fiexd").animate({
                    right: 0
                }, 100);

            } else {
                $(".left_fiexd").animate({
                    right: -265
                }, 100);
            }

        });

    })


    //头部一级导航
    $(function () {
        $("#qk_login dl, #mybutao dl, #follow dl").hover(
            function () {
                $(this).find("dt b").addClass("hover");
                $(this).find("dd").stop().slideDown();
            },
            function () {
                $(this).find("dt b").removeClass("hover");
                $(this).find("dd").stop().slideUp();
            }
        )
        $("#qk_login dl dd li , #mybutao dl dd li, #follow dl dd li").hover(function () {
            $(this).css("background", "pink");
        }, function () {
            $(this).css("background", "");
        });

    });

    //一级导航
    $(function () {
        $(".shopnavwrap ul li").on("mouseenter", function () {
            $(this).css("background", "#a90a0a");
        }).on("mouseleave", function () {
            $(this).css("background", "#CF1B1B");
        });
    });







});

//轮播图
$(window).on("load", function () {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: 1000,
        pagination: '.pagination',
        paginationClickable: true,
        paginationAsRange: true
    });
});
