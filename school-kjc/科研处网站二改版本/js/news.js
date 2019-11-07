function changeNews() {
    var url = window.location.search;
    var length = url.length;
    var id = url.substr(9,length);
    var topic = document.getElementsByClassName("news-content-topic")[0];
    var time = document.getElementsByClassName("news-second-time")[0];
    var author = document.getElementsByClassName("news-second-author");
    var content = document.getElementsByClassName("news-content-bottom")[0];
    $.ajax({
        type: "GET",
        url: "http://119.23.65.167:8080/demo-1.0/index/news",
        data: "data",
        dataType: "json",
        success: function (response) {
            for(let j=0; j<response.length; j++) {
                if(response[j].id == id) {
                    topic.innerText = response[j].title;
                    time.innerText = response[j].createTime;
                    author.innerText = response[j].author;
                    content.innerHTML = response[j].massage;
                }
            }
        }
    });
}

changeNews();