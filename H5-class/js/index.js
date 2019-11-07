function createItem(template) {
    var templateItem;
    for(let i=0; i<template.length; i++) {
        templateItem = template[i];
        $(".content-lists").append(
            `
                <div class="content-list">
                    <div class="list-img">
                        <img src="${templateItem.img}" alt="">
                    </div>
                    <div class="list-content">
                        <div class="list-top">${templateItem.title}</div>
                        <div class="list-bottom">
                            <div class="list-bottom-left">${templateItem.price}</div>
                            <div class="list-bottom-right">
                                <span>${templateItem.num}次学习</span>
                                <img src="./img/首页/购买须知.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            `
        )
    }
}

function indexSwiper() {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: true,
        speed: 500,
        pagination: {
          el: '.swiper-pagination',
        }
    })        
}

indexSwiper();

var data = [
    {
        img: "./img/首页/demo.png",
        title: "《15分钟学会Endnote论文排版技巧》",
        price: "￥19.9",
        num: "999"
    },
    {
        img: "./img/首页/demo.png",
        title: "《引物设计最全攻略，包你100%学会》",
        price: "￥19.9",
        num: "999"
    },
    {
        img: "./img/首页/demo.png",
        title: "《手把手教你干扰引物设计》",
        price: "￥19.9",
        num: "999"
    },
    {
        img: "./img/首页/demo.png",
        title: "《零基础精通小RNA技术:circRNA系列课程》",
        price: "￥19.9",
        num: "999"
    }
]

createItem(data);