var num = 0;

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
            console.log(num);
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
        case 6: RemoveAll();warp7Add(); break;
    }
}

swiperClick();

function warp2Add() {
    var lists = [document.getElementsByClassName("warp2-list1")[0],document.getElementsByClassName("warp2-list2")[0],document.getElementsByClassName("warp2-list2")[1]];
    for(let i=0; i<lists.length; i++) {
        lists[i].classList.add("addWarp2-"+parseInt(i+1));
    }
}

function warp2Remove() {
    var lists = [document.getElementsByClassName("warp2-list1")[0],document.getElementsByClassName("warp2-list2")[0],document.getElementsByClassName("warp2-list2")[1]];
    for(let i=0; i<lists.length; i++) {
        lists[i].classList.remove("addWarp2-"+parseInt(i+1));
    }
}

function warp3Add() {
    var box =document.getElementsByClassName("warp3-box")[0];
    box.classList.add("addWarp2-1");
}

function warp3Remove() {
    var box =document.getElementsByClassName("warp3-box")[0];
    box.classList.remove("addWarp2-1");
}

function warp4Add() {
    var box =document.getElementsByClassName("warp4-box")[0];
    box.classList.add("addWarp2-1");
}

function warp4Remove() {
    var box =document.getElementsByClassName("warp4-box")[0];
    box.classList.remove("addWarp2-1");
}

function warp5Add() {
    var lists = [document.getElementsByClassName("warp5-box-list1")[0],document.getElementsByClassName("warp5-box-list2")[0],document.getElementsByClassName("warp5-box-list3")[0]];
    for(let i=0; i<lists.length; i++) {
        lists[i].classList.add("addWarp2-"+parseInt(i+1));
    }
}

function warp5Remove() {
    var lists = [document.getElementsByClassName("warp5-box-list1")[0],document.getElementsByClassName("warp5-box-list2")[0],document.getElementsByClassName("warp5-box-list3")[0]];
    for(let i=0; i<lists.length; i++) {
        lists[i].classList.remove("addWarp2-"+parseInt(i+1));
    }
}

function warp6Add() {
    var lists = document.getElementsByClassName("warp6-box-list");
    for(let i=0; i<lists.length;i++) {
        lists[i].classList.add("addWarp2-"+parseInt(i+1));
    }
}

function warp6Remove() {
    var lists = document.getElementsByClassName("warp6-box-list");
    for(let i=0; i<lists.length;i++) {
        lists[i].classList.remove("addWarp2-"+parseInt(i+1));
    }
}

function warp7Add() {
    var lists = document.getElementsByClassName("warp7-box-list");
    var icons = document.getElementsByClassName("wrap7-box-icon");
    var box = document.getElementsByClassName("warp7-box")[0];
    for(let i=0; i<lists.length;i++) {
        lists[i].classList.add("addWarp2-"+parseInt(i+1));
    }
    for(let i=0; i<icons.length; i++) {
        icons[i].classList.add("addWarp2-"+parseInt(i+1));
    }
    box.classList.add("addWarp2-1");
}

function warp7Remove() {
    var lists = document.getElementsByClassName("warp7-box-list");
    var icons = document.getElementsByClassName("wrap7-box-icon");
    var box = document.getElementsByClassName("warp7-box")[0];
    for(let i=0; i<lists.length;i++) {
        lists[i].classList.remove("addWarp2-"+parseInt(i+1));
    }
    for(let i=0; i<icons.length; i++) {
        icons[i].classList.remove("addWarp2-"+parseInt(i+1));
    }
    box.classList.remove("addWarp2-1");
}

function RemoveAll() {
    warp2Remove();
    warp3Remove();
    warp4Remove();
    warp5Remove();
    warp6Remove();
    warp7Remove();
}

function menuClick() {
    var state = 0;
    var btn = document.getElementsByClassName("menu-btn")[0];
    var box = document.getElementsByClassName("menu")[0];
    btn.addEventListener("click", function() {
        if(state == 0) {
            box.classList.remove("active");
            btn.innerHTML = "展开"
            state = 1;
        } else {
            box.classList.add("active");
            btn.innerHTML = "收起"
            state = 0;
        }
    })
}

menuClick();