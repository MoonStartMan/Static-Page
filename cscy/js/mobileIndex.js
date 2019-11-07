var num = 0;

function warp2Add() {
    var  lists = [];
    for(let i=0; i<3; i++) {
        lists[i] = document.getElementsByClassName("warp2-box-list"+(i+1))[0];
        lists[i].classList.add("addGo"+parseInt(i+1));
    }
}

warp2Add();

function warp2Remove() {
    var  lists = [];
    for(let i=0; i<3; i++) {
        lists[i] = document.getElementsByClassName("warp2-box-list"+(i+1))[0];
        lists[i].classList.remove("addGo"+parseInt(i+1));
    }
}

function warp3Add() {
    var lists = document.getElementsByClassName("warp3-list");
    for(let i=0 ;i<lists.length; i++) {
        lists[i].classList.add("addGo"+parseInt(i+1));
    }
}

function warp3Remove() {
    var lists = document.getElementsByClassName("warp3-list");
    for(let i=0 ;i<lists.length; i++) {
        lists[i].classList.remove("addGo"+parseInt(i+1));
    }
}

function warp4Add() {
    var lists = document.getElementsByClassName("warp4-box-list");
    for(let i=0 ;i<lists.length; i++) {
        lists[i].classList.add("addGo"+parseInt(i+1));
    }
}

function warp4Remove() {
    var lists = document.getElementsByClassName("warp4-box-list");
    for(let i=0 ;i<lists.length; i++) {
        lists[i].classList.remove("addGo"+parseInt(i+1));
    }
}

function warp5Add() {
    var lists = document.getElementsByClassName("warp5-box-list");
    for(let i=0 ;i<lists.length; i++) {
        lists[i].classList.add("addGo"+parseInt(i+1));
    }
}

function warp5Remove() {
    var lists = document.getElementsByClassName("warp5-box-list");
    for(let i=0 ;i<lists.length; i++) {
        lists[i].classList.remove("addGo"+parseInt(i+1));
    }
}

function warp6Add() {
    var lists = document.getElementsByClassName("warp6-list");
    for(let i=0 ;i<lists.length; i++) {
        lists[i].classList.add("addGo"+parseInt(i+1));
    }
}

function warp6Remove() {
    var lists = document.getElementsByClassName("warp6-list");
    for(let i=0 ;i<lists.length; i++) {
        lists[i].classList.remove("addGo"+parseInt(i+1));
    }
}

function RemoveAll() {
    warp2Remove();
    warp3Remove();
    warp4Remove();
    warp5Remove();
    warp6Remove();
}

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
        if(num != 6) {
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
    } else if(num == 6 ) {
        btns[1].style.display = "none";
    } else {
        for(let i=0; i<btns.length; i++) {
            btns[i].style.display = "block";
        }
    }
    switch(num) {
        case 1: RemoveAll();warp2Add(); break;
        case 2: RemoveAll();warp3Add(); break;
        case 3: RemoveAll();warp4Add(); break;
        case 4: RemoveAll();warp5Add(); break;
        case 5: RemoveAll();warp6Add(); break;
    }
}

swiperClick();

function warp1Swiper() {
    var Swiper1 = new Swiper ('.warp1-swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: "auto",
        centeredSlides:true,
        spaceBetween: 20,
    })
}

warp1Swiper();

function warp7Swiper() {
    var Swiper1 = new Swiper ('.warp7-swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: "auto",
        centeredSlides:true,
        spaceBetween: 20,
    })
}

warp7Swiper();