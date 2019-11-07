function goHome() {
    $(".img-btn").eq(0).click(function() {
        window.location.href = "../pages/user.html";
    })
}

goHome();

function createItem(template) {
    var templateItem;
    for(let i=0; i<template.length; i++) {
        templateItem = template[i];
        $(".content").append(
            `
            <div class="content-warp">
                <div class="title">${templateItem.month}月</div>
            </div>
        </div>
            `
        )
    }
}

function clickGoAnthor() {
    var length = $(".content-list").length;
    for(let i=0; i<length; i++) {
        $(".content-list").eq(i).click(function() {
            window.location.href = "../pages/kehceng.html";
        })
    }
}

setTimeout(clickGoAnthor,1000);

function createContent(template) {
    var contentId = $(".content-warp .title").text().split("",1);
    var templateItem;
    for(let i=0; i<template.length; i++) {
        templateItem = template[i];
        if(templateItem.id == contentId) {
            $(".content-warp").append(
                `
                <div class="content-lists">
                    <div class="content-list">
                        <div class="list-img">
                            <img src="${templateItem.img}" alt="">
                        </div>
                        <div class="list-content">
                            <div class="list-top">${templateItem.title}</div>
                            <div class="list-bottom">
                                <div class="list-bottom-left">成功结课</div>
                                <div class="list-bottom-right">
                                    <img src="../img/查看证书.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
            )
        }
    }
}

var month = [
    {
        month: "4"
    },
    {
        month: "3"
    }
]

var data = [
    {
        id: 3,
        img: "../img/首页/demo.png",
        title: "《15分钟学会Endnote论文排版技巧》",
    },
    {
        id: 3,
        img: "../img/首页/demo.png",
        title: "《引物设计最全攻略，包你100%学会》",
    },
    {
        id: 4,
        img: "../img/首页/demo.png",
        title: "《手把手教你干扰引物设计》",
    },
    {
        id: 4,
        img: "../img/首页/demo.png",
        title: "《零基础精通小RNA技术:circRNA系列课程》",
    }
]

createItem(month);
createContent(data);