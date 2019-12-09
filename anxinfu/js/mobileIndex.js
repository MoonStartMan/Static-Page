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
        if(num != 3) {
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
    } else if(num == 3 ) {
        btns[1].style.display = "none";
    } else {
        for(let i=0; i<btns.length; i++) {
            btns[i].style.display = "block";
        }
    }
    switch(num) {
        case 0: RemoveAll();warp1Add(); break;
        case 1: RemoveAll();warp2Add(); break;
        case 2: RemoveAll();warp3Add(); break;
        case 3: RemoveAll();warp4Add(); break;
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

function warp3Add() {
    var box =document.getElementsByClassName("warp3-box")[0];
    box.classList.add("addShow");
}

function warp3Remove() {
    var box =document.getElementsByClassName("warp3-box")[0];
    box.classList.remove("addShow");
}

function warp4Add() {
    var box =document.getElementsByClassName("warp4-box")[0];
    box.classList.add("addShow");
}

function warp4Remove() {
    var box =document.getElementsByClassName("warp4-box")[0];
    box.classList.remove("addShow");
}

function RemoveAll() {
    warp1Remove();
    warp2Remove();
    warp3Remove();
    warp4Remove();
}

indexSwiper();
swiperClick();

function warp3Swiper() {
    var Swiper3 = new Swiper ('.warp3-swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: "auto",
        centeredSlides:true,
        spaceBetween: 60,
    })
}

warp3Swiper();

function warp4Swiper() {
    var Swiper4 = new Swiper ('.warp4-swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: "auto",
        centeredSlides:true,
        spaceBetween: 60,
    })
}

warp4Swiper();