$(window).on("load", function () {
    $("#smallArea").height(($("#smallImg").height() / $("#bigImg").height()) * $(
        "#bigArea").height());
    $("#smallArea").width(($("#smallImg").width() / $("#bigImg").width()) * $(
        "#bigArea").width());

    var scale = $("#bigArea").height() / $("#smallArea").height()
    var scaleWidth = $("#bigArea").width() / $("#smallArea").width()
    $("#smallImg").on("mouseenter", function (e) {
        $("#smallArea").show();
        $("#bigArea").show();
        $(this).on("mousemove", function (e) {

            var mX = e.pageX - $(this).offset().left - $("#smallArea")
                .width() / 2;
            var mY = e.pageY - $(this).offset().top - $("#smallArea")
                .width() / 2

            if (mX <= 0) {
                mX = 0;
            }
            if (mY <= 0) {
                mY = 0;
            }

            if (mX >= ($("#smallImg").width() - $("#smallArea")
                .width())) {
                mX = ($("#smallImg").width() - $("#smallArea").width())
            }
            if (mY >= ($("#smallImg").height() - $("#smallArea")
                .height())) {
                mY = ($("#smallImg").height() - $("#smallArea")
                    .height())
            }

            $("#smallArea").css({
                left: mX,
                top: mY
            })

            $('#bigImg').css({
                left: -mX * scaleWidth,
                top: -mY * scale
            })

        })

    }).on("mouseleave", function () {
        $("#smallArea").hide();
        $("#bigArea").hide();
    })




    $("#imgcheck>li").on("click", function () {
        //小区域切换
        let src = $(this).find("img").attr("src");
        $("#smallImg>img").attr("src", src);
        $("#bigImg").attr("src", src);
    });


    //右边购物车
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

$(function () {
    $(".shopnavwrap ul li").on("mouseenter", function () {
        $(this).css("background", "#a90a0a");
    }).on("mouseleave", function () {
        $(this).css("background", "#CF1B1B");
    });
});

//tab切换
$(function () {
    $("#shopInfo .left .top ul").find("li").on("click", function () {
        //点击切换样式
        //下边tab切换
        $(this).addClass("touch").siblings("li").removeClass("touch");
        let index = $(this).index();
        if (index == 0) {
            $("#shopInfo .left .top .tab").eq(0).css("display", "block").siblings(
                ".tab")
                .css("display", "none");

        } else if (index == 2) {
            $("#shopInfo .left .top .tab").eq(1).css("display", "block").siblings(
                ".tab")
                .css("display", "none");
        } else if (index == 4) {
            $("#shopInfo .left .top .tab").eq(2).css("display", "block").siblings(
                ".tab")
                .css("display", "none");
        } else if (index == 6) {
            $("#shopInfo .left .top .tab").eq(3).css("display", "block").siblings(
                ".tab")
                .css("display", "none");
        }
    });
});

//遮罩层和选择框

$(function () {

    $("#addCar").on("click", function () {

        $("#j_mask").show();
        $("#check").slideDown();
    });
    $("#close").on("click", function () {

        $("#j_mask").hide();
        $("#check").slideUp();
    });

    $("#check .fl").on("click", function () {
        console.log($(this));
        $(this).toggleClass("flImg");
    });

    //加减
    $("#jia").click(function () {
        $("#numText").val($("#numText").val() - 0 + 1);
    });
    $("#jian").click(function () {
        if ($("#numText").val() == 0) {
            alert("到0了还减!!!!");
            return;
        }
        $("#numText").val($("#numText").val() - 1);
    });
});