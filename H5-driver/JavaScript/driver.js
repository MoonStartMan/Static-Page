let returnIndex = document.getElementsByClassName("btn")[0];
var res;
returnIndex.addEventListener("click",function(){
    window.location.href = "../index.html";
})
AMap.event.addListener(geolocation, 'complete', onComplete);


function onComplete(obj){
    var res = obj.position 
    var addRess = obj.formattedAddress
    document.getElementsByClassName("place")[0].innerHTML = addRess;
    var marker = new AMap.Marker({
        icon: "http://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
        position: res,
        offset: new AMap.Pixel(10, 20),
        draggable: true,
        cursor: 'move',
        raiseOnDrag: true
    });
    marker.setMap(mapObj);
    marker.setAnimation('AMAP_ANIMATION_BOUNCE');
    AMap.event.addListener(marker, "dragstart", function(e) {
        
    });
    AMap.event.addListener(marker, "dragging", function(e) {
        document.getElementsByClassName("place")[0].innerHTML = "检索地址中......";
    });
    AMap.event.addListener(marker, "dragend", function(e) {
        lnglatXY = [marker.getPosition().lng, marker.getPosition().lat];
        var geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: "all"
        });
        geocoder.getAddress(lnglatXY, function(status, result) {
            var url = document.location.toString();
            var arrUrl = url.split("?");
            var para = arrUrl[1];

            if (status === 'complete' && result.info === 'OK') {
                var currentX = marker.getPosition().lng;
                var currentY = marker.getPosition().lat;
                var address = result.regeocode.formattedAddress; 
                document.getElementsByClassName("place")[0].innerHTML = address;
                document.getElementsByClassName("btn-two")[0].addEventListener("click",function(){
                    $.ajax({
                        contentType: "application/json;charset=utf-8",
                        type: "POST",
                        url: "http://scatszx.cn:8080/demo-ofo-1.0/uploadAddDriver",
                        data: JSON.stringify({"driverPlace":address,"id":para}),
                        dataType: "JSON",
                        success: function() {
                            alert("上传成功!");
                        }
                    });
                })
            }
        });  
    });
}
var length = window.location.search.length;
var userId = window.location.search.substr(1,length);
var place = document.getElementsByClassName("place2")[0];
var driverNum = document.getElementsByClassName("dirver-num")[0];

$.ajax({
    contentType: "application/json;charset=utf-8",
    type: "GET",
    url: "http://scatszx.cn:8080/demo-ofo-1.0/getAllUser",
    dataType: "JSON",
    success: function(res) {
        for(let i=0; i<res.length; i++) {
            if(res[i].id == userId) {
                place.innerText = res[i].userPlace;
                driverNum.innerText = res[i].id;
            }
        }
    }
});
