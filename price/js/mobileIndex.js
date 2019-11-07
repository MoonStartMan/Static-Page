var num = 0;

var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 水平切换选项
    mousewheel: true,
    on: {
        slideChangeTransitionEnd: function(){
            num = this.realIndex;//切换结束时，告诉我现在是第几个slide
            clear();
            add(num);
        },
    }
})


var btns = document.getElementsByClassName("menu-list");
var bgImg = document.getElementsByClassName("menu-list-img");
var text = document.getElementsByClassName("menu-list-text");

function clear() {
    for(let i=0; i<bgImg.length; i++) {
        bgImg[i].src = "../image/box.png";
    }
    for(let i=0; i<text.length; i++) {
        text[i].className = "menu-list-text";
    }
}

function add(index) {
    bgImg[index].src = "../image/box-active.png";
    text[index].className = "menu-list-text active";
}

function menuClick() {
    for(let i=0; i<btns.length; i++) {
        btns[i].onclick = function() {
            mySwiper.slideTo(i);
        }
    }
}

menuClick();