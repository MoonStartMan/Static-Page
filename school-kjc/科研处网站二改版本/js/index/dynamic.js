function addContent() {
    var outBox = document.getElementsByClassName("dynamic");
    var num = 0;
    var responseArray = [];
    $.ajax({
        type: "GET",
        url: "http://119.23.65.167:8080/demo-1.0/index/news",
        data: "data",
        dataType: "json",
        success: function (response) {
            for(let i=0; i<response.length; i++) {
                if(response[i].type == "科研动态小") {
                    num++;
                    responseArray.push(i);
                }
            }
            for(let j=0; j<outBox.length; j++) {
                outBox[j].getElementsByClassName("dynamic-content")[0].innerText = response[responseArray[j]].title;
                outBox[j].getElementsByClassName("dynamic-time")[0].innerText = response[responseArray[j]].createTime; 
            }
        }
    });
}
addContent();