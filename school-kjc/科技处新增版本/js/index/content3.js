function goBanner(){
    var lists = document.getElementsByClassName("content3-warp"); 
    var goPreBtn = document.getElementsByClassName("content3-left-btn")[0]; 
    var goNextBtn = document.getElementsByClassName("content3-right-btn")[0];
    var points = document.getElementsByClassName("content3-point"); 

    var index = 0;
    var clearActive = function() {
        for(var i=0; i<lists.length; i++) {
            points[i].className = "content3-point";
        }
        for(var i=0; i<lists.length; i++) {
            lists[i].className = "content3-warp";
        }
    }

    var goIndex = function() {
        clearActive();
        points[index].className = "content3-point active";
        lists[index].className = "content3-warp active"
    }

    var goNext = function() {
        if (index < 3) {
            index ++;
        } else {
            index = 0;
        }
        goIndex();
    }

    var goPre = function() {
        if(index == 0) {
            index = 3;
        } else {
            index --;
        }
        goIndex();
    }

    goNextBtn.addEventListener("click", function(){
        goNext();
    })
    goPreBtn.addEventListener("click", function(){
        goPre();
    })

    for(var i=0; i<points.length; i++) {
        points[i].addEventListener("click", function(){
            var pointIndex = this.getAttribute('data-index');
            index = pointIndex;
            goIndex();
        })
    }

    var mytime = setInterval(goNext,4000);
}

function creatContent(){
    var imgBox = document.getElementsByClassName("content3-li-img");
    var topic = document.getElementsByClassName("content3-li-topic");
    var container = document.getElementsByClassName("content3-li-container");
    $.ajax({
        type: "GET",
        url: "http://scatszx.cn:8080/network/index/news?type=result",
        data: "data",
        dataType: "json",
        success: function (response) {
            for(let j=0; j<response.length; j++) {
               imgBox[j].getElementsByTagName("img")[0].src = response[j].listImg[0].url;
               topic[j].innerText = response[j].title;
               container[j].innerText = response[j].information;
            }
        }
    });
}

creatContent();
goBanner();