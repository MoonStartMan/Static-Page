(function(doc,win){
    var doc = doc.documentElement;
    window.onload = function() {
        Resize();
        animation();
    }
    // 当DOM加载后执行
    win.addEventListener('resize', Resize, false);
    // 当屏幕发生变化时执行
    function Resize(){
        doc.style.fontSize=doc.clientWidth/45 +'px'; 
        //45为720/16计算得出的值，当编写浏览器发生变化时可用编写的浏览器宽度/16得出这个固定值;
    }
})(document,window)

function animation() {
    var box = document.getElementsByClassName("animation-box")[0];
    box.style.display = "none";
    addAnimation();
}

function addAnimation() {
    var contanier = document.getElementsByClassName("contanier")[0];
    contanier.classList.add("addShow");
}