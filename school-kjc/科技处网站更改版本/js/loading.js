function check(){
    var user = document.getElementsByClassName("user")[0];
    var password = document.getElementsByClassName("password")[0];
    $.ajax({
        type: "GET",
        url: "http://scatszx.cn:8080/demo-1.0/loginadmin",
        data: "data",
        dataType: "json",
        success: function (response) {
            if(user.value == "" || password.value == "") {
                alert("账号或者密码不得为空!");
            } else if (user.value == response.userName && password.value == response.password) {
                alert("登录成功!");
                window.location.href = "../pages/update.html";
            } else if(user.value != response.userName || password.value != response.password) {
                alert("账号或密码错误,请您重新输入");
                user.value = "";
                password.value = "";
            }
        }
    });
}

document.getElementsByClassName("btn")[0].addEventListener("click", function(){
    check();
})
