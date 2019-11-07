function hide() {
    $(".inline2-btn").eq(0).click(function(){
        $(".cover2").hide();
    })
    $(".footer-list").eq(0).click(function() {
        $(".cover2").show();
    })
    $(".footer-list").eq(1).click(function() {
        $(".cover3").show();
    })
    $(".inline3-img-box .img-box").eq(0).click(function(){
        $(".cover3").hide();
    })
    $(".inline3-btn-inline").eq(0).click(function() {
        $(".cover3").hide();
    })
}

hide();