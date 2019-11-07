function addBanner(){
    var warpBox = document.getElementsByClassName("warp-box");
    var num = 0;
    var responseArray = [];
    $.ajax({
        type: "GET",
        url: "http://119.23.65.167:8080/demo-1.0/index/news",
        data: "data",
        dataType: "json",
        success: function (response) {
            for(let i=0; i<response.length; i++) {
                if(response[i].type == "轮播图") {
                    num++;
                    responseArray.push(i);
                }
            }
            for(let j=0; j<warpBox.length; j++) {
                warpBox[j].getElementsByClassName("warp-img")[0].src = response[responseArray[j]].listImg[0].url;
            }
        }
    });
}
addBanner();

function goBanner() {
    var lists = document.getElementsByClassName("warp-box");
    var goPreBtn = document.getElementsByClassName("left")[0];
    var goNextBtn = document.getElementsByClassName("right")[0];
    var index = 0;

    var clearActive = function() {
        for(let i=0; i<lists.length; i++) {
            lists[i].className = "warp-box";
        }
    }

    var goIndex = function() {
        clearActive();
        lists[index].className = "warp-box active";
    }
    
    var goNext = function() {
        if(index < 2) {
            index ++;
        } else {
            index = 0;
        }
        goIndex();
    }

    var goPre = function() {
        if (index == 0) {
            index = 2;
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
    setInterval(goNext,2000);
}

goBanner();