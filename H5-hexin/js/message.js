$(document).ready(function(){
    $(".fixed-left").eq(0).click(function(){
        $(".cover").eq(0).show();
        $(".hide").eq(0).show();
        $(".fixed-box").eq(0).hide();
        $("textarea").focus();
        top = $(window).scrollTop();
        $('body').css("top",-top + "px");
        $('body').addClass('add');
    });
    $(".hide-left-btn").eq(0).click(function(){
        $(".cover").eq(0).hide();
        $(".hide").eq(0).hide();
        $(".fixed-box").eq(0).show();
        $('body').removeClass('add');
        $(window).scrollTop(top);
    })
})