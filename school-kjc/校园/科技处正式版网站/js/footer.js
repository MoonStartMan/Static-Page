function hover(){
    var wechat = document.getElementsByClassName("icon-box")[1];
    var box = document.getElementsByClassName("right-img-box")[0];
    wechat.addEventListener("mouseover", function(){
        box.getElementsByTagName("img")[0].style.borderWidth = "2px";
        box.getElementsByTagName("img")[0].style.borderStyle = "solid";
        box.getElementsByTagName("img")[0].style.borderColor = "#FF8C00";
    });
    wechat.addEventListener("mouseout", function(){
        box.getElementsByTagName("img")[0].style.border = "none";
    });
}
hover();