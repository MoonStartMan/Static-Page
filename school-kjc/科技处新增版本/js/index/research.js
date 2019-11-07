function addContent() {
    var outBox = document.getElementsByClassName("research");
    $.ajax({
        type: "GET",
        url: "http://scatszx.cn:8080/network/index/news?type=technologyBig",
        data: "data",
        dataType: "json",
        success: function (response) {
            for(let j=0; j<outBox.length; j++) {
                outBox[j].getElementsByClassName("research-topic")[0].innerText = response[j].title;
                outBox[j].getElementsByClassName("research-time")[0].innerText = response[j].createTime;
                outBox[j].getElementsByClassName("research-container")[0].innerText = response[j].information;
            }
        }
    });
}

addContent();