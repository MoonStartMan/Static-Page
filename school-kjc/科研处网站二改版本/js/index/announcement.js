function addContent() {
    var outBox = document.getElementsByClassName("announcement-content-box-out");
    var num = 0;
    var responseArray = [];
    for(let i=0; i<outBox.length; i++) {
        outBox[i].getElementsByClassName("announcement-left")[0].innerText = i+1;
    }
    $.ajax({
        type: "GET",
        url: "http://119.23.65.167:8080/demo-1.0/index/news",
        data: "data",
        dataType: "json",
        success: function (response) {
            for(let i=0; i<response.length; i++) {
                if(response[i].type == "通知公告") {
                    num++;
                    responseArray.push(i);
                }
            }
            for(let j=0; j<outBox.length; j++) {
                outBox[j].getElementsByClassName("announcement-topic")[0].innerText = response[responseArray[j]].title;
                outBox[j].getElementsByClassName("announcement-time")[0].innerText = response[responseArray[j]].createTime;
                outBox[j].getElementsByClassName("announcement-text")[0].innerText = response[responseArray[j]].information;
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