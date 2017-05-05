$(function () {
    // $("img.lazy").lazyload();
    $(".navbar-nav li").click(function () {
        if (!$(".navbar-toggle").is(":hidden")) {
            $(".navbar-collapse").collapse('hide');
        }
    });
    if ($(".products-body").length === 1) {
        countWH();
        window.onload = function () {
            setTimeout(function () {
                countWH();
            }, 1000);
        };
        $(window).resize(function () {
            countWH();
        });
    }
    var timeId = "";
    // setTimeout(function(){
    //     $("#carousel-example-generic").carousel('pause');
    // },1000);
    var player = videojs('video-index');
    player.on('play', function () {
        $("#carousel-example-generic").carousel('pause');
        if(timeId){
            window.clearTimeout(timeId);
        }
    });
    player.on('pause', function () {
        timeId=setTimeout(function () {
            $("#carousel-example-generic").carousel('cycle');
        },3000);
    });
});

function countWH() {
    var width = $(".section-1 img").width(),
        height = $(".section-1 img").height(),
        sectionW = $(".section-1").width(),
        sectionH = $(".section-1").height();
    var item1P = countP([176, 158]),
        item2P = countP([727, 95]),
        item3P = countP([293, 545]),
        item4P = countP([821, 499]);
    var item1L = (sectionW - width) / 2 + item1P[0] - 91,
        item1T = (sectionH - height) / 2 + item1P[1] - 98,
        item2R = (sectionW - width) / 2 + (width - item2P[0]) - 138,
        item2T = (sectionH - height) / 2 + item2P[1] - 38,
        item3L = (sectionW - width) / 2 + item3P[0] - 148,
        item3B = (sectionH - height) / 2 + (height - item3P[1]) - 38,
        item4R = (sectionW - width) / 2 + (width - item4P[0]) - 105,
        item4B = (sectionH - height) / 2 + (height - item4P[1]) - 54;
    $(".item1").css({
        left: item1L,
        top: item1T
    });
    $(".item2").css({
        right: item2R,
        top: item2T
    });
    $(".item3").css({
        left: item3L,
        bottom: item3B
    });
    $(".item4").css({
        right: item4R,
        bottom: item4B
    });
    function countP(arr) {
        arr[0] = arr[0] * width / 1000;
        arr[1] = arr[1] * height / 700;
        return arr;
    }
}
