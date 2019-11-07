function add() {
    var formData = new FormData();
    var select = document.getElementsByClassName("right-title")[0].innerHTML;
    var topic = document.getElementById("topic").value;
    var author = document.getElementById("author").value;
    var message = document.getElementById("message").value;
    var img = document.getElementById("img");
    var file2 = document.getElementById("file");
    for(let i=0 ; i<img.files.length; i ++) {
        var file = img;
        if(img.files[i]) {
            formData.append("file", file.files[i]);
        }
    }
    for(let i=0 ; i<file2.files.length; i ++) {
        var file = file2;
        if(file2.files[i]) {
            formData.append("file2", file.files[i]);
        }
    }

    switch (select) {
        case "科研政策" : select = "policy"; break;
        case "通知公告" : select = "notice"; break;
        case "新闻" : select = "news"; break;
        case "科研动态" : select = "technologyBig"; break;
        case "成果展示" : select = "result"; break;
        case "轮播图" : select = "image"; break;
    }

    console.log(select);
    
    formData.append("type",select);
    formData.append("title",topic);
    formData.append("author",author);
    formData.append("massage",message);
    if(select == "" || topic == "" || message == "") {
        alert("类型、标题、主要内容三者为必填项，不得为空!");
    } else if(select != "" && topic != "" && message != ""){
        $.ajax({
            contentType: "application/json;charset=utf-8",
            url: "http://scatszx.cn:8080/network/news/addnew",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function() {
                alert("上传成功!");
                window.location.reload(true);
            },
            error:function(){
                alert("上传失败!");
            }
        });
    }
}

document.getElementsByClassName("sumbit")[0].addEventListener("click", function(){
    add();
})


function changeTitle() {
    var btns = document.getElementsByClassName("list");
    var title = document.getElementsByClassName("right-title")[0];
    for(let i=0; i<btns.length; i++) {
        btns[i].addEventListener("click", function(e) {
            title.innerText = btns[i].innerHTML;
            e.preventDefault();
        },false)
    }
}

changeTitle();