function changSize() {
    var btns = document.getElementsByClassName("change-size");
    var boxText = document.getElementsByClassName("news-box-bottom")[0];
    for(let i=0; i<btns.length; i++) {
        btns[i].addEventListener("click", function(){
            switch(i) {
                case 0 :boxText.style.fontSize = "16px";break;
                case 1 :boxText.style.fontSize = "14px";break;
                case 2 :boxText.style.fontSize = "12px";break;
                default:break;
            }
        })
    }
}

function changeNews() {
    var url = window.location.search;
    var length = url.length;
    var id = url.substr(9,length);
    var topic = document.getElementsByClassName("news-box-top-topic")[0];
    var time = document.getElementsByClassName("time")[0];
    var author = document.getElementsByClassName("author")[0];
    var leftTopic = document.getElementsByClassName("container-box-left-text")[0];
    var contentBox = document.getElementsByClassName("news-box-bottom")[0];
    $.ajax({
        type: "GET",
        url: "http://119.23.65.167:8080/demo-1.0/index/news",
        data: "data",
        dataType: "json",
        success: function (response) {
            for(let j=0; j<response.length; j++) {
                if(response[j].id == id) {
                    leftTopic.innerText = response[j].type;
                    topic.innerText = response[j].title;
                    time.innerText = response[j].createTime;
                    author.innerText = response[j].author;
                    contentBox.innerHTML = response[j].massage;
                }
            }
        }
    });
}

function height(){
    var heights = document.getElementsByClassName("container-box-right")[0].clientHeight;
    var left = document.getElementsByClassName("container-box-left")[0];
    left.style.height = (heights-120) + "px";
}

changSize();
changeNews();
setTimeout(height,500);