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
            num = this.activeIndex;//切换结束时，告诉我现在是第几个slide
            check();
        },
    }
})

//允许鼠标滑动
function disableMouse() {
    mySwiper.mousewheel.enable();
}

disableMouse();

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
        case 0: RemoveAll();addGo1(); break;
        case 1: RemoveAll();addGo2(); break;
        case 2: RemoveAll();addGo3(); break;
        case 3: RemoveAll();addGo4(); break;
        case 4: RemoveAll();addGo5(); break;
        case 5: RemoveAll();addGo6(); break;
        case 6: RemoveAll();addGo7(); break;
    }
}

swiperClick();

function RemoveAll() {
    RemoveGo1();
    RemoveGo2();
    RemoveGo3();
    RemoveGo4();
    RemoveGo5();
    RemoveGo6();
    RemoveGo7();
}

function addGo1() {
    var box = document.getElementsByClassName("warp1-box")[0];
    box.classList.add("addGo");
}

function RemoveGo1() {
    var box = document.getElementsByClassName("warp1-box")[0];
    box.classList.remove("addGo");
}

function addGo2() {
    var box = document.getElementsByClassName("warp2-box")[0];
    box.classList.add("addGo");
}

function RemoveGo2() {
    var box = document.getElementsByClassName("warp2-box")[0];
    box.classList.remove("addGo");
}

function addGo3() {
    var box = document.getElementsByClassName("warp3-box")[0];
    box.classList.add("addGo");
}

function RemoveGo3() {
    var box = document.getElementsByClassName("warp3-box")[0];
    box.classList.remove("addGo");
}

function addGo4() {
    var box = document.getElementsByClassName("warp4-box")[0];
    box.classList.add("addGo");
}

function RemoveGo4() {
    var box = document.getElementsByClassName("warp4-box")[0];
    box.classList.remove("addGo");
}

function addGo5() {
    var box = document.getElementsByClassName("warp5-box")[0];
    box.classList.add("addGo");
}

function RemoveGo5() {
    var box = document.getElementsByClassName("warp5-box")[0];
    box.classList.remove("addGo");
}

function addGo6() {
    var box = document.getElementsByClassName("warp6-box")[0];
    box.classList.add("addGo");
}

function RemoveGo6() {
    var box = document.getElementsByClassName("warp6-box")[0];
    box.classList.remove("addGo");
}

function addGo7() {
    var box = document.getElementsByClassName("warp7-box")[0];
    box.classList.add("addGo");
}

function RemoveGo7() {
    var box = document.getElementsByClassName("warp7-box")[0];
    box.classList.remove("addGo");
}