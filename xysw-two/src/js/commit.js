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