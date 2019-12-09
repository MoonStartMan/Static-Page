var num = 0;

var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    mousewheel: true,
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-btn.btn2',
        prevEl: '.swiper-btn.btn1',
        hideOnClick: true,
    },
    on: {
        slideChangeTransitionEnd: function(){
            num = this.realIndex;//切换结束时，告诉我现在是第几个slide
            check();
        },
    }
})

//允许鼠标滑动
function disableMouse() {
    mySwiper.mousewheel.enable();
}

disableMouse();

function RemoveAll() {
    warp2Remove();
    warp3Remove();
}

function swiperClick() {
    var btns = document.getElementsByClassName("swiper-btn");
    var lists = document.getElementsByClassName("swiper-slide");
    btns[0].oncClick = function() {
        if(num != 0) {
            num --;
        }
        check();
    }
    btns[1].onClick = function() {
        if(num < 3) {
            num ++;
        }
        check();
    }
    check();
}

swiperClick();

function check() {
    var btns = document.getElementsByClassName("swiper-btn");
    if(num == 0) {
        btns[0].style.display = "none";
    } else if(num == 2 ) {
        btns[1].style.display = "none";
    } else {
        for(let i=0; i<btns.length; i++) {
            btns[i].style.display = "block";
        }
    }
    switch(num) {
        case 0: RemoveAll(); break;
        case 1: RemoveAll();warp2Show(); break;
        case 2: RemoveAll();warp3Show(); break;
    }
}

function warp2Show() {
    var lists = [];
    for(let i=0; i<7; i++) {
        if(i<3) {
            lists[i] = document.getElementsByClassName("warp2-img"+parseInt(i+1))[0];
        } else if(i>=3 && i<6) {
            lists[i] = document.getElementsByClassName("warp2-text-box")[i-3];
        } else{
            lists[i] = document.getElementsByClassName("warp2-last-text")[0];
        }
    }
    for(let i=0; i<lists.length; i++) {
        lists[i].classList.add("addSlideUp");
    }
}


function warp2Remove() {
    var lists = [];
    for(let i=0; i<7; i++) {
        if(i<3) {
            lists[i] = document.getElementsByClassName("warp2-img"+parseInt(i+1))[0];
        } else if(i>=3 && i<6) {
            lists[i] = document.getElementsByClassName("warp2-text-box")[i-3];
        } else{
            lists[i] = document.getElementsByClassName("warp2-last-text")[0];
        }
    }
    for(let i=0; i<lists.length; i++) {
        lists[i].classList.remove("addSlideUp");
    }
}

function warp3Show() {
    var lists = [];
    for(let i=0; i<7; i++) {
        if(i<3) {
            lists[i] = document.getElementsByClassName("warp3-img"+parseInt(i+1))[0];
        } else if(i>=3 && i<6) {
            lists[i] = document.getElementsByClassName("warp3-text-box")[i-3];
        } else{
            lists[i] = document.getElementsByClassName("warp3-last-text")[0];
        }
    }
    for(let i=0; i<lists.length; i++) {
        lists[i].classList.add("addSlideUp");
    }
}

function warp3Remove() {
    var lists = [];
    for(let i=0; i<7; i++) {
        if(i<3) {
            lists[i] = document.getElementsByClassName("warp3-img"+parseInt(i+1))[0];
        } else if(i>=3 && i<6) {
            lists[i] = document.getElementsByClassName("warp3-text-box")[i-3];
        } else{
            lists[i] = document.getElementsByClassName("warp3-last-text")[0];
        }
    }
    for(let i=0; i<lists.length; i++) {
        lists[i].classList.remove("addSlideUp");
    }
}

function BannerGo() {
    var lists = document.getElementsByClassName("warp1-container");
    var index = 0;
    function clear() {
        for(let i=0; i<lists.length; i++) {
            lists[i].className = "warp1-container";
        }
    }
    function setActive() {
        clear();
        lists[index].className = "warp1-container active";
    }
    function go(){
        if (index < 1) {
            index ++;
        } else {
            index = 0;
        }
        setActive();
    }
    var myTime = setInterval(go,6000);
}

BannerGo();