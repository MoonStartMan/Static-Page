$(document).ready(function(){
    let state = 0;
    $(".return").click(function(){
        window.location.href = "../index.html";
    })
    $(".menu-icon1").eq(0).click(function(){
        if(state == 0) {
            $(".btn1").eq(0).attr("src","../IMG/my/my4/已收藏.png");
            state = 1;
        } else if(state == 1) {
            $(".btn1").eq(0).attr("src","../IMG/my/my4/收藏.png");
            state = 0;
        }
    })
})