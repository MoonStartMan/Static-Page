function contentHash() {
    var url = window.location.search;
    var length = url.length;
    var message = url.substr(1,length);
    var contentArray = ["项目管理","科研政策","通知公告","新闻","科研动态"];
    var leftTopic = document.getElementsByClassName("news-box-left-topic")[0];
    var rightText = document.getElementsByClassName("title-hover-text")[0];
    if(message == "management") {
        leftTopic.innerText = contentArray[0];
        rightText.innerText = contentArray[0];
    } else if (message == "policy") {
        leftTopic.innerText = contentArray[1];
        rightText.innerText = contentArray[1];
    } else if (message == "notice") {
        leftTopic.innerText = contentArray[2];
        rightText.innerText = contentArray[2];
    } else if (message == "news") {
        leftTopic.innerText = contentArray[3];
        rightText.innerText = contentArray[3];
    } else if (message == "technologySmall") {
        leftTopic.innerText = contentArray[4];
        rightText.innerText = contentArray[4];
    }
}

function clickChange() {
    var leftTopic = document.getElementsByClassName("news-box-left-topic")[0];
    var rightText = document.getElementsByClassName("title-hover-text")[0];
    var lists = document.getElementsByClassName("news-box-left-list");
    var contentArray = ["项目管理","科研政策","通知公告","新闻","科研动态"];
    function clear() {
        for(let i=0,len=lists.length; i<len; i++) {
            lists[i].className = "news-box-left-list";
        }
    }
    for(let i=0,len=lists.length; i<len; i++) {
        lists[i].addEventListener("click", function(){
            leftTopic.innerText = contentArray[i];
            rightText.innerText = contentArray[i];
            clear();
            lists[i].className = "news-box-left-list active";
        })
    }
}


function router() {
    var lists = document.getElementsByClassName("news-box-left-list");
    var iframe = document.getElementsByTagName("iframe")[0];
    for (let i=0,len=lists.length; i<len; i++) {
        lists[i].addEventListener("click", function() {
            switch(i) {
                case 0: iframe.src = "../../pages/service/service-content.html?"+"management"; break;
                case 1: iframe.src = "../../pages/service/service-content.html?"+"policy"; break;
                case 2: iframe.src = "../../pages/service/service-content.html?"+"notice"; break;
                case 3: iframe.src = "../../pages/service/service-content.html?"+"news"; break;
                case 4: iframe.src = "../../pages/service/service-content.html?"+"technologySmall"; break;
            }
        })
    }
}

function search() {
    var iframe = document.getElementsByTagName("iframe")[0];
    var url = window.location.search;
    var length = url.length;
    var messageType = url.substr(1,length);
    iframe.src = "../../pages/service/service-content.html?" + messageType;
}

window.onload = function() {
    clickChange();
    contentHash();
    router();
    search();
}