(function(doc,win){
    var doc = doc.documentElement;
    doc.addEventListener('DOMContentLoaded', Resize, false);
    // 当DOM加载后执行
    win.addEventListener('resize', Resize, false);
    // 当屏幕发生变化时执行
    function Resize(){
        doc.style.fontSize=doc.clientWidth/85 +'px'; //屏幕宽度为1360时 html font-size=16px;
        //68.3为1360/16计算得出的值，当编写浏览器发生变化时可用编写的浏览器宽度/16得出这个固定值;
    }
})(document,window)

function IEVersion() {
    var userAgent = navigator.userAgent;  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE;
    if (isEdge) {
        alert("您当前使用的是IE浏览器体验不佳,请换火狐、谷歌等其他浏览器浏览");
    }
}

IEVersion();