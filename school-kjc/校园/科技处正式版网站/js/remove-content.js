function getMessage() {
    var url = window.location.search;
    var length = url.length;
    var messageType = url.substr(1,length);
    var page = document.getElementsByClassName("page-number")[0];
    var box = document.getElementsByClassName("page-list-box")[0];
    $.ajax({
        type: "GET",
        url: "http://scatszx.cn:8080/network/project/getProjects?type=" + messageType,
        data: "data",
        dataType: "json",
        success: function (response) {
            createTem(response.list.length,response.list);
            page.innerText = Math.ceil(response.list.length/pageSize);
            var listTitle = document.getElementsByClassName("list-title");
            for(let i=0, len=listTitle.length; i<len; i++) {
                listTitle[i].addEventListener("click", function(){
                    window.open("../../pages/news.html?news_id=" + response.list[i].id); 
                })
            }
            for(let i=0,len=Math.ceil(response.list.length/pageSize);i<len;i++) {
                var numberBtn = [];
                numberBtn[i]= document.createElement("div");
                numberBtn[i].innerHTML = i+1;
                numberBtn[i].className = "page-list";
                box.appendChild(numberBtn[i]);
            }
            document.getElementsByClassName("page-first")[0].addEventListener("click", function(){
                $.ajax({
                    type: "GET",
                    url: "http://scatszx.cn:8080/network/project/getProjects?type=" + messageType,
                    data: "data",
                    dataType: "json",
                    success: function (response) {
                        pageNo = 0;
                        createTem(response.list.length,response.list,response.id);
                    }
                });
            }) 
            document.getElementsByClassName("page-last")[0].addEventListener("click", function(){
                $.ajax({
                    type: "GET",
                    url: "http://scatszx.cn:8080/network/project/getProjects?type=" + messageType,
                    data: "data",
                    dataType: "json",
                    success: function (response) {
                        var len2 =  Math.ceil(response.list.length/pageSize);
                        if(len2 !=1){
                            pageNo = len2;
                        } else{
                            pageNo = 0;
                        }
                        createTem(response.list.length,response.list,response.id);
                    }
                });
            })
            var length = Math.ceil(response.list.length/pageSize);
        
            for(let i=0; i<length; i++) {
                document.getElementsByClassName("page-list")[i].addEventListener("click", function(e){
                    $.ajax({
                        type: "GET",
                        url: "http://scatszx.cn:8080/network/project/getProjects?type=" + messageType,
                        data: "data",
                        dataType: "json",
                        success: function (response) {
                            pageNo = i;
                            createTem(response.list.length,response.list,response.id);
                            e.preventDefault();
                        }
                    });
                })
            }        
        }
    });

}

var pageSize =15;
var pageNo = 0;

function createTem(len,template) {
    var totalPage =Math.ceil((len/pageSize));
    var totallSize= len;
    $(".list-out").empty();
    for(let i=(pageSize*pageNo);i<totallSize-(totalPage-pageNo-1)*pageSize; i++) {
        const templateItem = template[i];
        $(".list-out").eq(0).append(
            `
            <div class="list">
                <div class="list-title">${templateItem.title}</div>
                <div class="list-time">${templateItem.createTime}</div>
                <div class="list-btn">删除</div>
                <div class="list-id">${templateItem.id}</div>
            </div>
            `
        )
    }
}

window.onload = function () {
    getMessage();
}