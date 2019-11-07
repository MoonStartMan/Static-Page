function code(){
    var btn = document.getElementsByClassName("topic-icon-box");
    var hideCode = document.getElementsByClassName("icon-hide");
    for(let i=0; i<btn.length; i++) {
        btn[i].addEventListener("mouseover", function(){
            hideCode[i].style.display = "block";
        })
        btn[i].addEventListener("mouseout", function(){
            hideCode[i].style.display = "none";
        })
    }
}

function menu(){
    var ul = document.getElementsByClassName("top-menu-ul");
    var li = document.getElementsByClassName("top-menu-li-box");
    for(let i=0 ;i<ul.length; i++) {
        ul[i].addEventListener("mouseover", function(){
            li[i].style.display = "block";
        })
    }
    for(let i=0 ;i<ul.length; i++) {
        ul[i].addEventListener("mouseout", function(){
            li[i].style.display = "none";
        })
    }
}
code();
menu();