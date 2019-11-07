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
        if(num != 2) {
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
    } else if(num == 2 ) {
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
    }
}

function warp1Add() {
    var box = document.getElementsByClassName("warp1-box")[0];
    var imgs = document.getElementsByClassName("warp1-img-box1")[0].getElementsByTagName("img");
    var circle = document.getElementsByClassName("warp1-circle")[0];
    var icon = document.getElementsByClassName("warp1-icon");
    box.classList.add("addShow");
    for(let i=0; i<imgs.length; i++) {
        imgs[i].style.opacity = 0;
        switch(i) {
            case 0 : imgs[i].classList.add("addWarp1img1"); break;
            case 1 : imgs[i].classList.add("addWarp1img2"); break;
            case 2 : imgs[i].classList.add("addWarp1img3"); break;
        }
    }
    for(let i=0; i<icon.length; i++) {
        icon[i].classList.add("addWarp1Show"+parseInt(i+1));
    }
    circle.classList.add("addWarp1Circle");
}

function warp1Remove() {
    var box = document.getElementsByClassName("warp1-box")[0];
    var imgs = document.getElementsByClassName("warp1-img-box1")[0].getElementsByTagName("img");
    var circle = document.getElementsByClassName("warp1-circle")[0];
    var icon = document.getElementsByClassName("warp1-icon");
    box.classList.remove("addShow");
    for(let i=0; i<imgs.length; i++) {
        imgs[i].style.opacity = 0;
        switch(i) {
            case 0 : imgs[i].classList.remove("addWarp1img1"); break;
            case 1 : imgs[i].classList.remove("addWarp1img2"); break;
            case 2 : imgs[i].classList.remove("addWarp1img3"); break;
        }
    }
    for(let i=0; i<icon.length; i++) {
        icon[i].classList.remove("addWarp1Show"+parseInt(i+1));
    }
    circle.classList.remove("addWarp1Circle");
}

function warp2Add() {
    var box = document.getElementsByClassName("warp2-box")[0];
    box.classList.add("addShow");
}

function warp2Remove() {
    var box = document.getElementsByClassName("warp2-box")[0];
    box.classList.remove("addShow");
}

function warp3Add() {
    var box = document.getElementsByClassName("warp3-box")[0];
    box.classList.add("addShow");
    var img4 = document.getElementsByClassName("warp3-img4")[0];
    img4.classList.add("addWarp3Click");
    var text1 = document.getElementsByClassName("warp3-text1")[0];
    text1.classList.add("addWarp3Change");
    var img2 = document.getElementsByClassName("warp3-img2")[0];
    img2.classList.add("addWarp3Loop");
    var img2Hide = document.getElementsByClassName("warp3-img2hide")[0];
    setTimeout(function(){
        img2Hide.style.opacity = 1;
    },3000);
}

function warp3Remove() {
    var box = document.getElementsByClassName("warp3-box")[0];
    box.classList.remove("addShow");
    var img4 = document.getElementsByClassName("warp3-img4")[0];
    img4.classList.remove("addWarp3Click");
    var text1 = document.getElementsByClassName("warp3-text1")[0];
    text1.classList.remove("addWarp3Change");
    var img2 = document.getElementsByClassName("warp3-img2")[0];
    img2.classList.remove("addWarp3Loop");
    var img2Hide = document.getElementsByClassName("warp3-img2hide")[0];
    img2Hide.style.opacity = 0;
}

function RemoveAll() {
    warp1Remove();
    warp2Remove();
    warp3Remove();
}

indexSwiper();
swiperClick();