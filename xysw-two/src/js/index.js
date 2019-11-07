
// 轮播图
function indexSwiper() {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
        }
    })        
}

function imgHover() {
    // var ctn2 = document.getElementsByClassName("container2")[0];
    var ctn4 = document.getElementsByClassName("container4")[0];
    // for(let i=0; i<6; i++) {
    //     ctn2.getElementsByClassName("img-box")[i].addEventListener("mouseenter",function(e){
    //         ctn2.getElementsByClassName("img-box")[i].getElementsByClassName("show")[0].style.left = "100%";
    //         ctn2.getElementsByClassName("img-box")[i].getElementsByClassName("hide")[0].style.left = "0";
    //         e.preventDefault();
    //     });
    //     ctn2.getElementsByClassName("img-box")[i].addEventListener("mouseleave",function(e){
    //         ctn2.getElementsByClassName("img-box")[i].getElementsByClassName("show")[0].style.left = "0";
    //         ctn2.getElementsByClassName("img-box")[i].getElementsByClassName("hide")[0].style.left = "-100%";
    //         e.preventDefault();
    //     });
    // }
    for(let i=0; i<5; i++) {
        ctn4.getElementsByClassName("img-box")[i].addEventListener("mouseenter",function(e){
            ctn4.getElementsByClassName("img-box")[i].getElementsByClassName("show")[0].style.top = "100%";
            ctn4.getElementsByClassName("img-box")[i].getElementsByClassName("hide")[0].style.top = "0";
            e.preventDefault();
        });
        ctn4.getElementsByClassName("img-box")[i].addEventListener("mouseleave",function(e){
            ctn4.getElementsByClassName("img-box")[i].getElementsByClassName("show")[0].style.top = "0";
            ctn4.getElementsByClassName("img-box")[i].getElementsByClassName("hide")[0].style.top = "-100%";
            e.preventDefault();
        });
    }
}

indexSwiper();
imgHover();