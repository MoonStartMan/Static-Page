function addContent() {
    var outBox = document.getElementsByClassName("dynamic");
    $.ajax({
        type: "GET",
        url: "http://scatszx.cn:8080/network/index/news?type=news",
        data: "data",
        dataType: "json",
        success: function (response) {
            for(let j=0; j<outBox.length; j++) {
                outBox[j].getElementsByClassName("dynamic-content")[0].innerText = response[j+2].title;
                outBox[j].getElementsByClassName("dynamic-time")[0].innerText = response[j+2].createTime; 
            }
        }
    });
}
addContent();