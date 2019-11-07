function contentHash() {
    var url = window.location.search;
    var length = url.length;
    var message = url.substr(1,length);
    var contentArray = ["项目管理","科研政策","通知公告","新闻","科研动态","成果展示","轮播图"];
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
    } else if (message == "result") {
        leftTopic.innerText = contentArray[5];
        rightText.innerText = contentArray[5];
    } else if (message == "image") {
        leftTopic.innerText = contentArray[6];
        rightText.innerText = contentArray[6];
    }
}

function clickChange() {
    var leftTopic = document.getElementsByClassName("news-box-left-topic")[0];
    var rightText = document.getElementsByClassName("title-hover-text")[0];
    var lists = document.getElementsByClassName("news-box-left-list");
    var contentArray = ["项目管理","科研政策","通知公告","新闻","科研动态","成果展示","轮播图"];

    function clear() {
        for(let i=0,len=lists.length; i<len; i++) {
            lists[i].className = "news-box-left-list";
        }
    }

    for(let i=0,len=lists.length; i<len; i++) {
        lists[i].onclick = function(){
            leftTopic.innerText = contentArray[i];
            rightText.innerText = contentArray[i];
            clear();
            lists[i].className = "news-box-left-list active";
            setTimeout(showCover,500);
            return false;
        }
    }
}

function showCover(){
    var btns = window.frames["delect-box"].document.getElementsByClassName("list-btn");
    var cover = document.getElementsByClassName("cover")[0];
    var btns2 = document.getElementsByClassName("cover-btn");
    var lists = window.frames["delect-box"].document.getElementsByClassName("list");
    var num = 0;
    for(let i=0; i<btns.length; i++) {
        btns[i].onclick = function(e) {
            cover.style.display = "block";
            num = i;
            e.preventDefault();
        }
    }
    btns2[0].onclick = function(e) {
        cover.style.display = "none";
        checkId(num);
        e.preventDefault();
    }
    btns2[1].onclick = function() {
        cover.style.display = "none";
    }
}

function checkId(num) {
    var listOut = window.frames["delect-box"].document.getElementsByClassName("list-out")[0];
    var lists2 = listOut.getElementsByTagName("div");
    var listBox = [];
    var j =0;
    for(let i=0;i<lists2.length;i++) {
        if(lists2[i].getAttribute("class") == "list") {
            listBox[j] = lists2[i];
            j++;
        }
    }
    var id = listBox[num].getElementsByClassName("list-id")[0].textContent;
    console.log(id);
    $.ajax({
        type: "GET",
        url: "http://scatszx.cn:8080/network/project/remove?id=" + id,
        data: "data",
        success: () => {
            alert("删除成功!");
            window.location.reload(true);
            return false;
        },
        error:() => {
            alert("删除失败!");
            window.location.reload(true);
            return false;
        }
    });
}

function router() {
    var lists = document.getElementsByClassName("news-box-left-list");
    var iframe = document.getElementsByTagName("iframe")[0];
    for (let i=0,len=lists.length; i<len; i++) {
        lists[i].addEventListener("click", function() {
            switch(i) {
                case 0: iframe.src = "../../pages/delete/delect-conten.html?"+"management"; break;
                case 1: iframe.src = "../../pages/delete/delect-conten.html?"+"policy"; break;
                case 2: iframe.src = "../../pages/delete/delect-conten.html?"+"notice"; break;
                case 3: iframe.src = "../../pages/delete/delect-conten.html?"+"news"; break;
                case 4: iframe.src = "../../pages/delete/delect-conten.html?"+"technologySmall"; break;
                case 5: iframe.src = "../../pages/delete/delect-conten.html?"+"result"; break;
                case 6: iframe.src = "../../pages/delete/delect-conten.html?"+"image"; break;
            }
        })
    }
}

function search() {
    var iframe = document.getElementsByTagName("iframe")[0];
    var url = window.location.search;
    var length = url.length;
    var messageType = url.substr(1,length);
    iframe.src = "../../pages/delete/delect-conten.html?" + messageType;
}

window.onload = function() {
    clickChange();
    contentHash();
    router();
    search();
}