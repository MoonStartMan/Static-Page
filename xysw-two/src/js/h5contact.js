var data = [
    {
        img: "../images/commit/1.png",
        text:"手机：13608232630"
    },
    {
        img: "../images/commit/2.png",
        text:"座机：000852-311 588 12"
    },
    {
        img: "../images/commit/3.png",
        text:"地址：香港湾仔骆克道53-55号恒泽商业大厦15楼1501室"
    },
    {
        img: "../images/commit/4.png",
        text:"邮箱：386280045@qq.com"
    },
]

function createText(template){
    for(let i=0; i<template.length; i++) {
        const templateItem = template[i];
        $(".main").append(`
        <div class="tab">
            <div class="img-box"><img src=${templateItem.img} alt=""></div>
            <div class="text">${templateItem.text}</div>
        </div>
        `)
    }
}

createText(data);

var map = new AMap.Map('map-box', {
    resizeEnable: true,
    center: [114.175773,22.275674],
    zoom: 16
});

var marker = new AMap.Marker({
    position: map.getCenter(),
    icon: new AMap.Icon({            
        image: "../images/commit/icon.png",
        size: new AMap.Size(64, 64),  //图标大小
        imageSize: new AMap.Size(32,32)
    }),        
    // 设置是否可拖拽
    draggable: false,
    cursor: 'move'
});

marker.setMap(map);

// 设置点标记的动画效果，此处为弹跳效果
marker.setAnimation('AMAP_ANIMATION_BOUNCE');