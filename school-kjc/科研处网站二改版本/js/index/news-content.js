function addContent() {
    var outBox = document.getElementsByClassName("news-content");
    var num = 0;
    var responseArray = [];
    $.ajax({
        type: "GET",
        url: "http://119.23.65.167:8080/demo-1.0/index/news",
        data: "data",
        dataType: "json",
        success: function (response) {
            for(let i=0; i<response.length; i++) {
                if(response[i].type == "新闻") {
                    num++;
                    responseArray.push(i);
                }
            }
            for(let j=0; j<outBox.length; j++) {
                outBox[j].getElementsByClassName("news-img")[0].getElementsByTagName("img")[0].src = response[responseArray[j]].listImg[0].url;
                outBox[j].getElementsByClassName("news-topic")[0].innerText = response[responseArray[j]].title;
                outBox[j].getElementsByClassName("news-time")[0].innerText = response[responseArray[j]].createTime;
                outBox[j].getElementsByClassName("news-container")[0].innerText = response[responseArray[j]].information;
            }
        }
    });
}

function goBanner() {
    var lists = document.getElementsByClassName("news-content");
    var goPreBtn = document.getElementsByClassName("news-btn-left")[0];
    var goNextBtn = document.getElementsByClassName("news-btn-right")[0];
    var index = 0;

    var clearActive = function() {
        for(let i=0; i<lists.length; i++) {
            lists[i].className = "news-content";
        }
    }

    var goIndex = function() {
        clearActive();
        lists[index].className = "news-content active";
    }
    
    var goNext = function() {
        if(index < 4) {
            index ++;
        } else {
            index = 0;
        }
        goIndex();
    }

    var goPre = function() {
        if (index == 0) {
            index = 4;
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
addContent();
setTimeout(goBanner, 2000);