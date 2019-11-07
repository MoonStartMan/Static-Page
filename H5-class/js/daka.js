function menuClick() {
    var state =0;
    $(".menu-left").eq(0).click(function(){
        if(state == 0) {
            $(".menu-lists").eq(0).show();
            state = 1;
        } else {
            $(".menu-lists").eq(0).hide();
            state = 0;
        }
    })
}

function clickHide() {
    $(".img-box").eq(0).click(function() {
        $(".cover").eq(0).hide();
    })
    $(".img-btn").eq(0).click(function() {
        $(".cover").eq(0).hide();
    })
}

menuClick();
clickHide();

function createItem(template) {
    var templateItem;
    for(let i=0; i<template.length; i++) {
        templateItem = template[i];
        $(".content").append(
            `
            <div class="content-list">
                <div class="list-top">${templateItem.title}</div>
                <div class="list-bottom">
                    <div class="list-bottom-left">
                        已学习<a class="list-color">${templateItem.day}天</a>
                    </div>
                    <div class="list-bottom-right">
                        <span>${templateItem.text}</span>
                        <div class="img-box">${templateItem.imgtext}</div>
                    </div>
                </div>
            </div>
            `
        )
    }
}

var data = [
    {
        title: "《15分钟学会Endnote论文排版技巧》",
        day: "6",
        text: "剩余<a class='list-color'>4</a>天",
        imgtext:"马上学习"
    },
    {
        title: "《引物设计最全攻略，包你100%学会》",
        day: "6",
        text: "剩余<a class='list-color'>4</a>天",
        imgtext:"马上学习"
    },
    {
        title: "《手把手教你干扰引物设计！》",
        day: "6",
        text: "剩余<a class='list-color'>4</a>天",
        imgtext:"马上学习"
    },
    {
        title: "《手把手教你干扰引物设计！》",
        day: "6",
        text: "剩余<a class='list-color'>4</a>天",
        imgtext:"领取奖品"
    },
    {
        title: "《15分钟学会Endnote论文排版技巧》",
        day: "6",
        text: "剩余<a class='list-color'>4</a>天",
        imgtext:"马上学习"
    },
    {
        title: "《引物设计最全攻略，包你100%学会》",
        day: "6",
        text: "剩余<a class='list-color'>4</a>天",
        imgtext:"马上学习"
    },
    {
        title: "《手把手教你干扰引物设计！》",
        day: "6",
        text: "剩余<a class='list-color'>4</a>天",
        imgtext:"马上学习"
    },
    {
        title: "《手把手教你干扰引物设计！》",
        day: "6",
        text: "剩余<a class='list-color'>4</a>天",
        imgtext:"领取奖品"
    }
]

createItem(data);