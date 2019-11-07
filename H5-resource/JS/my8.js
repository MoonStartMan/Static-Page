$(document).ready(function(){
    $(".return").eq(0).click(function(){
        window.location.href = "../index.html";
    })
    $(".hide-menu-top-right").click(function(){
        $(".cover").eq(0).css("display","none");
        $(".hide-menu").eq(0).css("display","none");
    })
    $(".right-icon-box-icon2").eq(0).click(function(){
        $(".cover").eq(0).css("display","block");
        $(".hide-menu").eq(0).css("display","block");
    })
})