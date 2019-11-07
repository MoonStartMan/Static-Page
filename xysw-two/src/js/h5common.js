function listActive() {
    var tabLists = $(".list-tab .list .tag");
    for(let i=0; i<tabLists.length; i++) {
        $(".list-tab .list .tag").eq(i).click(function(){
            $(".list .tag").removeClass("active");
            $(".list-tab .list .tag").removeClass("active");
            $(".list-tab .list .tag").eq(i).addClass("active");
        })
    }
}

function clickChange() {
    var state = 0;
    $(".menu-box img").click(function(e){
        if(state == 0) {
            $(".menu-box img").attr("src","../images/mobile/delete.png");
            $(".header").css({"overflow": "visible","max-height": "auto"});
            $(".list-tab").fadeIn();
            state = 1;
            e.stopPropagation();
        } else {
            $(".menu-box img").attr("src","../images/mobile/menu.png");
            $(".list-tab").fadeOut();
            state = 0;
            e.stopPropagation();
        }
    })
}

var textData = [
    {
        text : "联系电话：136 0823 2630"
    },
    {
        text : " 座机电话:000852-311 588 12"
    },
    {
        text : "传真：00852-311 588 01"
    },
    {
        text : "地址：香港湾仔骆克道53-55号恒泽商业大厦15楼1501室"
    },
    {
        text : "香港鑫悦明珠家居有限公司 ©版权所有 网站备案号：蜀ICP备18036107号-1"
    }
]

function createText(template){
    for(let i=0; i<template.length; i++) {
        const templateItem = template[i];
        $(".footer").append(`
        <div class="list">${templateItem.text}</div>
        `)
    }
}

clickChange();
listActive();
createText(textData);