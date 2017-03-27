$(function() {
    // $("img.lazy").lazyload();
    $(".navbar-nav li").click(function(){
        if(!$(".navbar-toggle").is(":hidden")){
            $(".navbar-collapse").collapse('hide');
        }
    });
});