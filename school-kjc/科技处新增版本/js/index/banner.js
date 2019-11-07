function addBanner(){
    var warpBox1 = document.getElementsByClassName("warp-box1")[0];
    var warpBox2 = document.getElementsByClassName("warp-box2")[0];
    var warpBox3 = document.getElementsByClassName("warp-box3")[0];
    $.ajax({
        type: "GET",
        url: "http://scatszx.cn:8080/network/index/news?type=image",
        data: "data",
        dataType: "json",
        success: function (response) {
            warpBox1.getElementsByClassName("warp-img")[0].src = response[0].listImg[0].url;
            warpBox2.getElementsByClassName("warp-img")[0].src = response[1].listImg[0].url;
            warpBox3.getElementsByClassName("warp-img")[0].src = response[2].listImg[0].url;
        }
    });
}
addBanner();

function goBanner(){
    var index = 0;
    var warp = document.getElementsByClassName("warp")[0];
    var goPreBtn = document.getElementsByClassName("left")[0];
    var goNextBtn = document.getElementsByClassName("right")[0];
    var warpBox = warp.getElementsByTagName("div");
    var aListName = ["warp-box1", "warp-box2", "warp-box3"];
    var num = 0;
    function nextPic(){
        aListName.unshift(aListName[2]);
        aListName.pop();
        for(var i=0,len = warpBox.length; i<len; i++) {
            warpBox[i].setAttribute("class", aListName[i]);
        }
        index ++;
        if(index > 2) {
            index = 0;
        }
    }
    function prePic() {
        aListName.push(aListName[0]);
        aListName.shift();
        for(var i=0,len = warpBox.length; i<len; i++) {
            warpBox[i].setAttribute("class", aListName[i]);
        }
        index --;
        if(index < 2) {
            index = 2;
        }
    }
    goNextBtn.addEventListener("click", function(e){
        if(num ==0 ) {
            nextPic();
            num = 1;
        }
        setTimeout(function(){
            num= 0;
        },3000)
        e.preventDefault();
    })
    goPreBtn.addEventListener("click", function(e){
        if(num ==0 ) {
            prePic();
            num = 1;
        }
        setTimeout(function(){
            num= 0;
        },3000)
        e.preventDefault();
        
    })
    var mytime = setInterval(nextPic,3000);
    warp.addEventListener("mouseover", function(){
        clearInterval(mytime);
    })
    warp.addEventListener("mouseout", function(){
        mytime = setInterval(nextPic,3000);
    })
}
goBanner();