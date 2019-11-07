function goPage() {
    var lists = document.getElementsByClassName("content2-cantaier");
    var moreBtn = document.getElementsByClassName("announcement-btn")[0];
    var btn = document.getElementsByClassName("topic-top-btn");
    for(let i=0,len=lists.length; i<len; i++) {
        lists[i].addEventListener("click", function() {
            switch(i) {
                case 1:window.location.href = "pages/service/service.html?management"; break;
                case 2:window.location.href = "pages/service/service.html?policy"; break;
            }  
        })
    }
    moreBtn.addEventListener("click", function() {
        window.location.href = "pages/service/service.html?notice";
    })
    for(let i=0,len=btn.length; i<len; i++) {
        btn[i].addEventListener("click", function(){
            switch(i) {
                case 0: window.location.href = "pages/service/service.html?news"; break;
                case 1: window.location.href = "pages/service/service.html?technologySmall"; break;
            }
        })
    }
}


window.onload = function () {
    goPage();
}