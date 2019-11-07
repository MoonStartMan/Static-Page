function goBanner(){
    var lists = document.getElementsByClassName("content3-warp"); //图片
    var goPreBtn = document.getElementsByClassName("content3-left-btn")[0]; 
    var goNextBtn = document.getElementsByClassName("content3-right-btn")[0];
    var points = document.getElementsByClassName("content3-point"); //点

    var index = 0; //index表示第几张图片在展示 ---》第index张图片有active这个类名
    //第几个点在展示


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
    var num = 0;
    var responseArray = [];
    $.ajax({
        type: "GET",
        url: "http://119.23.65.167:8080/demo-1.0/index/news",
        data: "data",
        dataType: "json",
        success: function (response) {
            for(let i=0; i<response.length; i++) {
                if(response[i].type == "成果展示") {
                    num++;
                    responseArray.push(i);
                }
            }
            for(let j=0; j<response.length; j++) {
               imgBox[j].getElementsByTagName("img")[0].src = response[responseArray[j]].listImg[0].url;
               topic[j].innerText = response[responseArray[j]].title;
               container[j].innerText = response[responseArray[j]].information;
            }
        }
    });
}

creatContent();
setTimeout(goBanner, 4000);