function changeNews() {
    var url = window.location.search;
    var length = url.length;
    var id = url.substr(9,length);
    var topic = document.getElementsByClassName("news-content-topic")[0];
    var time = document.getElementsByClassName("news-second-time")[0];
    var author = document.getElementsByClassName("news-second-author")[0];
    var content = document.getElementsByClassName("news-content-bottom")[0];
    var a = document.getElementsByClassName("files")[0];
    $.ajax({
        type: "GET",
        url: "http://scatszx.cn:8080/network/news/getNew?news_id=" + id,
        data: "data",
        dataType: "json",
        success: function (response) {
            topic.innerText = response.title;
            time.innerText = response.createTime;
            author.innerText = response.author;
            content.innerHTML = response.massage;
            if(response.listFile.length ==0) {
                a.innerHTML = " ";  
            } else{
                a.innerText = response.listFile[0].name;
                a.href = "http://scatszx.cn:8080/network/file/download?fileID="+ response.listFile[0].id;
            }
        }
    });
}

function AutoSize(Img, maxWidth, maxHeight) {
    var image = new Image();
    image.src = Img.src;  
    if (image.width < maxWidth&& image.height < maxHeight) {
        Img.width = image.width;
        Img.height = image.height;
    }
    else
    {
        if (maxWidth/ maxHeight  <= image.width / image.height)
        {
            Img.width = maxWidth;
            Img.height = maxWidth* (image.height / image.width);
        } 
        else {
            Img.width = maxHeight  * (image.width / image.height);
            Img.height = maxHeight  ;
        }
    }
}

function changeImage() {
    var img = document.getElementsByClassName("news-box-bottom-img");
    for(let i=0, len=img.length; i<len; i++) {
        AutoSize(img[i].getElementsByTagName("img")[0],"60%","20rem");
    }
}

window.onload = function() {
    changeNews();
    setTimeout(changeImage,1000);
}