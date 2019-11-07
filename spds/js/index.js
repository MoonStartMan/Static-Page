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
    warp1Remove();
    warp2Remove();
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
        if(num < 1) {
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
        btns[1].style.display = "block";
    } else if(num == 1 ) {
        btns[1].style.display = "none";
        btns[0].style.display = "block";
    }
    switch(num) {
        case 0: RemoveAll(); warp1Show(); break;
        case 1: RemoveAll(); warp2Show(); break;
    }
}

function warp1Show() {
    
}

function warp1Remove() {

}

function warp2Show() {

}


function warp2Remove() {

}