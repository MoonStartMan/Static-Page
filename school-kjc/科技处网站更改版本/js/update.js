function add() {
    var formData = new FormData();
    var select = document.getElementsByClassName("select")[0].value;
    var topic = document.getElementById("topic").value;
    var author = document.getElementById("author").value;
    var message = document.getElementById("message").value;
    var address = document.getElementById("address").value;
    var organizer = document.getElementById("organizer").value;
    var time = document.getElementById("time").value;
    var img = document.getElementById("img");
    for(let i=0 ; i<img.files.length; i ++) {
        var file = img;
        if(img.files[i]) {
            formData.append("file", file.files[i]);
        }
    }
    formData.append("type",select);
    formData.append("title",topic);
    formData.append("author",author);
    formData.append("massage",message);
    formData.append("address",address),
    formData.append("organizer",organizer);
    formData.append("time",time);
    if(select == "" || topic == "" || message == "") {
        alert("类型、标题、主要内容三者为必填项，不得为空!");
    } else if(select != "" && topic != "" && message != ""){
        $.ajax({
            contentType: "application/json;charset=utf-8",
            url: "http://scatszx.cn:8080/demo-1.0/news/addnew",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function() {
                alert("上传成功!");
            },
            error:function(){
                alert("上传失败!");
            }
        });
    }
}

document.getElementsByClassName("btn")[0].addEventListener("click", function(){
    add();
})