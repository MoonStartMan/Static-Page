function addContent() {
    var outBox = document.getElementsByClassName("announcement-content-box-out");
    for(let i=0; i<outBox.length; i++) {
        outBox[i].getElementsByClassName("announcement-left")[0].innerText = i+1;
    }
    $.ajax({
        type: "GET",
        url: "http://scatszx.cn:8080/network/index/news?type=notice",
        data: "data",
        dataType: "json",
        success: function (response) {
            for(let j=0; j<outBox.length; j++) {
                outBox[j].getElementsByClassName("announcement-topic")[0].innerText = response[j].title;
                outBox[j].getElementsByClassName("announcement-time")[0].innerText = response[j].createTime;
                outBox[j].getElementsByClassName("announcement-text")[0].innerText = response[j].information;
            }
        }
    });
}

function hover(){
    var outBox = document.getElementsByClassName("announcement-content-box-out");
    for(let i=0; i<outBox.length; i++) {
        outBox[i].addEventListener("mouseover", function(){
            outBox[i].getElementsByClassName("announcement-text")[0].style.display = "block";
        })
        outBox[i].addEventListener("mouseout", function(){
            outBox[i].getElementsByClassName("announcement-text")[0].style.display = "none";
        })
    } 
}

addContent();
setTimeout(hover,2000);