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
        case 0: RemoveAll();warp1Show(); break;
        case 1: RemoveAll();warp2Show(); break;
        case 2: RemoveAll();warp3Show(); break;
    }
}

function warp1Show() {
    var lists = [];
    var lists2 = [];
    var warp1Img = document.getElementsByClassName("warp1-img")[0].getElementsByTagName("img");
    var icons = document.getElementsByClassName("warp1-icon");
    for(let i=0; i<6; i++) {
        if(i < 4) {
            lists[i] = document.getElementsByClassName("warp1-text"+(i+1))[0];
        } else if( i == 4){
            lists[i] = document.getElementsByClassName("warp1-btn")[0];
        }
    }
    for(let i=0; i<2;i++) {
        switch(i) {
            case 0: lists2[i] = document.getElementsByClassName("warp1-img")[0]; break;
            case 1: lists2[i] = document.getElementsByClassName("warp1-circle")[0]; break;
        }
    }
    for(let i=0; i<lists.length; i++) {
        lists[i].classList.add("addWarp1-1");
    }
    for(let i=0; i<lists2.length; i++) {
        lists2[i].classList.add("addWarp1-2");
    }
    for(let i=0; i<warp1Img.length; i++) {
        warp1Img[i].classList.add("addWarp1img"+parseInt(i+1));
    }
    var warp1Circle = document.getElementsByClassName("warp1-bg")[0];
    warp1Circle.classList.add("addWarp1Circle");
    for(let i=0 ;i<icons.length; i++) {
        icons[i].classList.add("addWarp1Show"+parseInt(i+1));
    }
}

warp1Show();

function warp1Remove() {
    var lists = [];
    var lists2 = [];
    var warp1Img = document.getElementsByClassName("warp1-img")[0].getElementsByTagName("img");
    var icons = document.getElementsByClassName("warp1-icon");
    for(let i=0; i<5; i++) {
        if(i != 4) {
            lists[i] = document.getElementsByClassName("warp1-text"+(i+1))[0];
        } else {
            lists[i] = document.getElementsByClassName("warp1-btn")[0];
        }
    }
    for(let i=0; i<2;i++) {
        switch(i) {
            case 0: lists2[i] = document.getElementsByClassName("warp1-img")[0]; break;
            case 1: lists2[i] = document.getElementsByClassName("warp1-circle")[0]; break;
        }
    }
    for(let i=0; i<lists.length; i++) {
        lists[i].classList.remove("addWarp1-1");
    }
    for(let i=0; i<lists2.length; i++) {
        lists2[i].classList.remove("addWarp1-2");
    }
    for(let i=0; i<warp1Img.length; i++) {
        warp1Img[i].classList.remove("addWarp1img"+parseInt(i+1));
    }
    var warp1Circle = document.getElementsByClassName("warp1-bg")[0];
    warp1Circle.classList.remove("addWarp1Circle");
    for(let i=0 ;i<icons.length; i++) {
        icons[i].classList.remove("addWarp1Show"+parseInt(i+1));
    }
}

function warp2Show() {
    var lists = [];
    var img1 = document.getElementsByClassName("warp2-img1")[0];
    var img2 = document.getElementsByClassName("warp2-img2")[0];
    var banner = document.getElementsByClassName("warp2-bg")[0];
    for(let i=0 ;i<3; i++) {
        switch(i) {
            case 0: lists[i] = document.getElementsByClassName("warp2-text1")[0]; break;
            case 1: lists[i] = document.getElementsByClassName("warp2-text2")[0]; break;
            case 2: lists[i] = document.getElementsByClassName("warp2-btn")[0]; break;
        }
    }
    for(let i=0; i<lists.length; i++) {
        lists[i].classList.add("addWarp1-1");
    }
    img1.classList.add("addWarp1-1");
    img2.classList.add("addWarp2Show");
    banner.classList.add("addWarp2Banner");
}

function warp2Remove() {
    var lists = [];
    var img1 = document.getElementsByClassName("warp2-img1")[0];
    var img2 = document.getElementsByClassName("warp2-img2")[0];
    var banner = document.getElementsByClassName("warp2-bg")[0];
    for(let i=0 ;i<3; i++) {
        switch(i) {
            case 0: lists[i] = document.getElementsByClassName("warp2-text1")[0]; break;
            case 1: lists[i] = document.getElementsByClassName("warp2-text2")[0]; break;
            case 2: lists[i] = document.getElementsByClassName("warp2-btn")[0]; break;
        }
    }
    for(let i=0; i<lists.length; i++) {
        lists[i].classList.remove("addWarp1-1");
    }
    img1.classList.remove("addWarp1-1");
    img2.classList.remove("addWarp2Show");
    banner.classList.remove("addWarp2Banner");
}

function warp3Show() {
    var lists = [];
    var lists2 = [];
    var text = document.getElementsByClassName("warp3-text5")[0];
    var imgClick = document.getElementsByClassName("warp3-img4")[0];
    var imgLoop = document.getElementsByClassName("warp3-img2")[0];
    var hide = document.getElementsByClassName("warp3-img2hide")[0];
    for(let i=0; i<5; i++) {
        switch(i) {
            case 0: lists[i] = document.getElementsByClassName("warp3-text1")[0]; break;
            case 1: lists[i] = document.getElementsByClassName("warp3-text2")[0]; break;
            case 2: lists[i] = document.getElementsByClassName("warp3-text3")[0]; break;
            case 3: lists[i] = document.getElementsByClassName("warp3-text4")[0]; break;
            case 4: lists[i] = document.getElementsByClassName("warp3-btn")[0]; break;
        }
    }
    for(let i=0; i<3; i++) {
        lists2[i] = document.getElementsByClassName("warp3-img"+parseInt(i+1))[0];
    }
    for(let i=0; i<lists.length; i++) {
        lists[i].classList.add("addWarp1-1");
    }
    for(let i=0; i<lists2.length; i++) {
        lists2[i].classList.add("addWarp1-2");
    }
    text.classList.add("addWarp1-2");
    imgClick.classList.add("addWarp3Click");
    function change() {
        text.classList.remove("addWarp1-2");
        text.style.opacity = 1;
        text.classList.add("addWarp3Change");
    }
    function change2() {
        imgLoop.classList.remove("addWarp1-2");
        imgLoop.style.opacity = 1;
        imgLoop.classList.add("addWarp3Loop");
        setTimeout(function(){
            hide.style.opacity = 1;
        },3000);
    }
    setTimeout(change,1000);
    setTimeout(change2,2000);
}

function warp3Remove() {
    var lists = [];
    var lists2 = [];
    var text = document.getElementsByClassName("warp3-text5")[0];
    var imgClick = document.getElementsByClassName("warp3-img4")[0];
    var imgLoop = document.getElementsByClassName("warp3-img2")[0];
    var hide = document.getElementsByClassName("warp3-img2hide")[0];
    for(let i=0; i<5; i++) {
        switch(i) {
            case 0: lists[i] = document.getElementsByClassName("warp3-text1")[0]; break;
            case 1: lists[i] = document.getElementsByClassName("warp3-text2")[0]; break;
            case 2: lists[i] = document.getElementsByClassName("warp3-text3")[0]; break;
            case 3: lists[i] = document.getElementsByClassName("warp3-text4")[0]; break;
            case 4: lists[i] = document.getElementsByClassName("warp3-btn")[0]; break;
        }
    }
    for(let i=0; i<3; i++) {
        lists2[i] = document.getElementsByClassName("warp3-img"+parseInt(i+1))[0];
    }
    for(let i=0; i<lists.length; i++) {
        lists[i].classList.remove("addWarp1-1");
    }
    for(let i=0; i<lists2.length; i++) {
        lists2[i].classList.remove("addWarp1-2");
    }
    imgClick.classList.remove("addWarp3Click");
    text.style.opacity = 0;
    text.classList.remove("addWarp3Change");
    imgLoop.style.opacity = 0;
    imgLoop.classList.remove("addWarp3Loop");
    hide.style.opacity = 0;
}