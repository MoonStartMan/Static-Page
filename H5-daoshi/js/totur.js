$(document).ready(function(){
    $(".statr-btn").click(function(){
        $(".statr-btn img").attr("src","../img/totur/collect-acive.png");
        $(".success-box").css("display","block");
        setTimeout(function(){
            $(".success-box").css("display","none");
        },2000);
    })
    $(".return-btn").click(function(){
        window.location.href = "../index.html";
    })
})