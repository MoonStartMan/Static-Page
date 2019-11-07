function searchWidth() {
    var width = document.body.clientWidth;
    if(width <= 400){
        document.getElementsByTagName("html")[0].style.fontSize = "3px";
    } else if(width > 400 && width <=500) {
        document.getElementsByTagName("html")[0].style.fontSize = "4px";
    } else if(width > 500 && width <= 700) {
        document.getElementsByTagName("html")[0].style.fontSize = "5px";
    } else if (width > 700 && width <= 1024) {
        document.getElementsByTagName("html")[0].style.fontSize = "10px";
    } else {
        document.getElementsByTagName("html")[0].style.fontSize = "16px";
    }
}
setInterval(searchWidth,1000);

function IEVersion() {
    var userAgent = navigator.userAgent;  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE;
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1
    if (isEdge || isIE11) {
        alert("您当前使用的是IE浏览器体验不佳,请换火狐、谷歌等其他浏览器浏览");
    }
}

IEVersion();