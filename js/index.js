$(function() {
    $(window).on("resize", function() {
        // 获取窗口的宽度
        let clientW = $(window).width();

        // 设置临界值
        let isShowBigImage = clientW >= 800;

        // 获取所有的item
        let arrItem = $('.carousel-inner .item');

        //遍历
        arrItem.each(function(index, el) {
            // 取出图片路径
            let src = isShowBigImage ? $(el).data('lg-img') : $(el).data('sm-img');
            let imgUrl = 'url("' + src + '")';
            // 设置背景
            $(el).css({
                backgroundImage: imgUrl
            });
            // 设置img标签
            if (!isShowBigImage) {
                let $img = "<img src='" + src + "'>";
                $(el).empty().append($img);
            } else {
                $(el).empty();
            }
        });
    })
    $(window).trigger('resize');

    // 工具提示
    $('[data-toggle="tooltip"]').tooltip()

    // 导航处理
    let allLis = $("#header .nav li");
    let allH = ['about', 'product', 'hot', 'hot', 'link', 'footer'];
    for (let i = 0; i < allLis.length - 1; i++) {
        $(allLis[i]).on('click', function(event) {
            $("html,body").animate({
                scrollTop: $("#" + allH[i]).offset().top
            }, 1000);
        })
    }

    // 返回顶部
    $(window).on('scroll', function() {

        let scrollH = $(window).scrollTop();
        if (scrollH > 200) {
            $("#btn-backTop").show();
        } else {
            $("#btn-backTop").hide();
        }
    });
    // 给按钮绑定一个click事件，点击按钮时，返回顶部
    $('#btn-backTop').click(function() {
        $('html ,body').animate({ scrollTop: 0 }, 300);
        return false;
    });
})