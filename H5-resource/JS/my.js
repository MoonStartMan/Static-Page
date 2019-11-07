var imgsState = [];
$(document).ready(function(){
    let imgLength = $(".content-text-box-left").length;
    console.log(imgLength);
    function initState() {
        for (let i=0; i<imgLength; i++){
            imgsState.push({
                status: 0
            })
        }
    }
    initState();
    let state = 0;
    $(".top-right-text").eq(0).click(function(){
        if(state == 0) {
            $(".hide-menu-out").eq(0).css("display","block");
            $(".top-right-text").eq(0).text("完成");
            $(".content-text-box-left-out").css("display","block");
            $(".first-icon1-right").css("display","none");
            $(".content-text-box-right").css("width","22rem");
            for (let i=0; i<imgLength; i++){
                $(".content-text-box-left-out").eq(i).click(function(){
                    if( imgsState[i].status == 0 ) {
                        $(".content-text-box-left img").eq(i).attr("src","../IMG/我的资料/勾选-已同意.png");
                        imgsState[i].status = 1;
                    } else {
                        $(".content-text-box-left img").eq(i).attr("src","../IMG/我的资料/未勾选.png");
                        imgsState[i].status = 0;
                    }
                });
                $(".hide-menu-left").click(function(){
                    let totallState = 0;
                    if(totallState == 0){
                        $(".content-text-box-left img").attr("src","../IMG/我的资料/勾选-已同意.png");
                        for (let i=0; i<imgLength; i++){
                            $(".hide-menu-left img").eq(i).attr("src","../IMG/我的资料/勾选-已同意.png");
                            imgsState[i].status = 1;
                            totallState = 1;
                        }
                    }else if(totallState == 1){
                        $(".content-text-box-left img").attr("src","../IMG/我的资料/未勾选.png");
                        for (let i=0; i<imgLength; i++){
                            $(".hide-menu-left img").eq(i).attr("src","../IMG/我的资料/未勾选.png");
                            imgsState[i].status = 0;
                            totallState = 0;
                        }
                    }
                });
            }
            state = 1;
        } else if(state ==1) {
            $(".hide-menu-out").eq(0).css("display","none");
            $(".top-right-text").eq(0).text("编辑");
            $(".content-text-box-left-out").css("display","none");
            $(".first-icon1-right").css("display","block");
            $(".content-text-box-right").css("width","23rem");
            $(".content-text-box-left img").attr("src","../IMG/我的资料/未勾选.png");
            $(".hide-menu-left img").attr("src","../IMG/我的资料/未勾选.png");
            state = 0;
            initState();
        }
    })
})