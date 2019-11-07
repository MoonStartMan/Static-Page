var num = 0;

function indexSwiper() {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical', // 垂直切换选项
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-btn.btn2',
            prevEl: '.swiper-btn.btn1',
            hideOnClick: true,
        },
        on: {
            slideChangeTransitionEnd: function(){
                num = this.activeIndex;//切换结束时，告诉我现在是第几个slide
                check();
            },
        }
    })
}

function swiperClick() {
    var btns = document.getElementsByClassName("swiper-btn");
    var lists = document.getElementsByClassName("swiper-slide");
    btns[0].addEventListener("click", function() {
        if(num != 0) {
            num --;
        }
        check();
    })
    btns[1].addEventListener("click", function() {
        if(num != 1) {
            num ++;
        }
        check();
    })
    check();
}

function check() {
    var btns = document.getElementsByClassName("swiper-btn");
    if(num == 0) {
        btns[0].style.display = "none";
        btns[1].style.display = "block";
    } else if(num == 1 ) {
        btns[0].style.display = "block";
        btns[1].style.display = "none";
    }
    switch(num) {
        case 0: RemoveAll();warp1Add(); break;
        case 1: RemoveAll();warp2Add(); break;
    }
}

function warp1Add() {
    var box =document.getElementsByClassName("warp1-box")[0];
    box.classList.add("addShow");
}

function warp1Remove() {
    var box =document.getElementsByClassName("warp1-box")[0];
    box.classList.remove("addShow");
}

function warp2Add() {
    var box =document.getElementsByClassName("warp2-box")[0];
    box.classList.add("addShow");
}

function warp2Remove() {
    var box =document.getElementsByClassName("warp2-box")[0];
    box.classList.remove("addShow");
}

function RemoveAll() {
    warp1Remove();
    warp2Remove();
}

indexSwiper();
swiperClick();