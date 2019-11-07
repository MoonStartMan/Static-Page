var state = 0;
var imgsState = [];
var totallState = 0;
$(document).ready(function(){
    let length = $(".collect-content").length;

    function initState() {
        for (let i=0; i<length; i++){
            imgsState.push({
                status: 0
            })
        }
    }
    initState();
    $(".right-text").click(function(){
        if(state == 0){
            $(".select-img").css("display","none");
            $(".collect-left").css("display","block");
            $(".delete-menu").css("display","block");
            $(".right-text").text("取消");
            $(".collect-right").css("width","95%");
            for (let i=0; i<length; i++){
                $(".collect-left").eq(i).click(function(){
                    if( imgsState[i].status == 0 ) {
                        $(".changeimg").eq(i).attr("src","../img/collect/yes.png");
                        imgsState[i].status = 1;
                    } else {
                        $(".changeimg").eq(i).attr("src","../img/collect/no.png");
                        imgsState[i].status = 0;
                    }
                });
                $(".btn-totall").click(function(){
                    if(totallState == 0){
                        $(".delete-left img").attr("src","../img/collect/yes.png");
                        for (let i=0; i<length; i++){
                            $(".changeimg").eq(i).attr("src","../img/collect/yes.png");
                            imgsState[i].status = 1;
                            totallState = 1;
                        }
                    }else if(totallState == 1){
                        $(".delete-left img").attr("src","../img/collect/no.png");
                        for (let i=0; i<length; i++){
                            $(".changeimg").eq(i).attr("src","../img/collect/no.png");
                            imgsState[i].status = 0;
                            totallState = 0;
                        }
                    }
                });
            }
            state = 1;
        } else if( state == 1) {
            $(".select-img").css("display","block");
            $(".collect-left").css("display","none");
            $(".delete-menu").css("display","none");
            $(".right-text").text("编辑");
            $(".collect-right").css("width","100%");
            $(".changeimg").attr("src","../img/collect/no.png");
            $(".delete-left img").attr("src","../img/collect/no.png");
            initState();
            state = 0;
        }
    });
})