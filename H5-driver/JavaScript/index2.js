let load = document.getElementsByClassName("btn1")[0];
let zhuce1 = document.getElementsByClassName("btn1")[1];
let zhuce2 = document.getElementsByClassName("btn2")[0];
let quxiao = document.getElementsByClassName("btn2")[1];
let cover = document.getElementsByClassName("cover")[0];
let zhuceBox = document.getElementsByClassName("zhuce-out")[0];
let checkName = document.getElementsByClassName("radio2");
let userName = document.getElementsByClassName("radio");
let state = Number;
let outBtn = document.getElementsByClassName("btn-check-box")[0];
let outBox = document.getElementsByClassName("register")[0];

zhuce1.addEventListener("click", function(){
    cover.style.display = "block";
    zhuceBox.style.display = "block";
    outBox.style.display = "none";
});

outBtn.addEventListener("click", function(){
    outBox.style.display = "block";
    cover.style.display = "block";
})

quxiao.addEventListener("click", function(){
    cover.style.display = "none";
    zhuceBox.style.display = "none";
    outBox.style.display = "none";
    document.getElementsByClassName("user-input")[0].value = null;
    document.getElementsByClassName("password-input")[0].value = null;
    document.getElementsByClassName("zhuce-user-input")[0].value = null;
    document.getElementsByClassName("zhuce-password-input")[0].value = null;
    document.getElementsByClassName("zhuce-password-input")[1].value = null;
    for(let i=0; i<checkName.length; i++) {
        checkName[i].checked = false;
        userName[i].checked = false;
    }
});


load.addEventListener("click",function(){
    let user = document.getElementsByClassName("user-input")[0].value;
    let password = document.getElementsByClassName("password-input")[0].value;
    for(let i=0; i<checkName.length; i++) {
        if(checkName[i].checked) {
            state = checkName[i].value;
        }
    }
    if(user == "" || password == ""){
        alert("输入为空,请重新输入!");
        document.getElementsByClassName("user-input")[0].value = null;
        document.getElementsByClassName("password-input")[0].value = null;
    } else if(checkName[0].checked == false && checkName[1].checked == false) {
        alert("请选择是司机还是乘客进行登录!");
        document.getElementsByClassName("user-input")[0].value = null;
        document.getElementsByClassName("password-input")[0].value = null;
    } else {
        if (state == 0 )
        {
            $.ajax({
                type: 'GET',
                url: 'http://scatszx.cn:8080/demo-ofo-1.0/getAllUser',
                dataType: 'json',
                success: function(res){
                    let j;
                    for(let i=0; i<res.length; i++) {
                        if(user == res[i].userName) {
                            j = i;
                            if(password != res[j].password){
                                alert("密码错误请重新输入");
                                document.getElementsByClassName("password-input")[0].value = null;
                            } else if(password == res[j].password) {
                                window.location.href ="pages/user.html?"+res[j].id;
                            }
                        }
                    }
                }
            });
        } else if (state == 1){
            $.ajax({
                type: 'GET',
                url: 'http://scatszx.cn:8080/demo-ofo-1.0/getAllDriver',
                dataType: 'json',
                success: function(res){
                    let j;
                    for(let i=0; i<res.length; i++) {
                        if(user == res[i].userName) {
                            j = i;
                            if(password != res[j].password){
                                alert("密码错误请重新输入");
                                document.getElementsByClassName("password-input")[0].value = null;
                            } else if(password == res[j].password) {
                                window.location.href ="pages/driver.html?" + res[j].id;
                            }
                        }
                    }
                }
            });
        }
    }
});

zhuce2.addEventListener("click",function(){
    let zhengze = new RegExp(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/);
    let zhuceUser = document.getElementsByClassName("zhuce-user-input")[0].value;
    let zhucePassword = document.getElementsByClassName("zhuce-password-input")[0].value;
    let zhucePasswordAgin = document.getElementsByClassName("zhuce-password-input")[1].value;
    function clearUser(){
        document.getElementsByClassName("zhuce-user-input")[0].value = null;
        document.getElementsByClassName("zhuce-password-input")[0].value = null;
        document.getElementsByClassName("zhuce-password-input")[1].value = null;
        for(let i=0; i<checkName.length; i++) {
            checkName[i].checked = false;
            userName[i].checked = false;
        }
    }
    if (zhuceUser == "" || zhucePassword == "" || zhucePasswordAgin == "") {
        alert("输入不得为空,请重新输入!");
        clearUser();
    } else if (zhuceUser.length > 16 || zhuceUser.length < 8) {
        alert("账号长度为8-16位");
        clearUser();
    } else if ((zhucePassword > 16 || zhucePassword < 8) && !zhengze.test(zhucePassword)) {
        alert("密码长度为8-16位,且必须含有字母");
        clearUser();
    } else if(zhucePassword != zhucePasswordAgin) {
        alert("两次密码输入有误,请重新输入!");
        clearUser();
    } else if(userName[0].checked  == false && userName[1].checked == false) {
        alert("请选择注册类型(乘客还是司机)!");
        clearUser();
    } else {
        cover.style.display = "none";
        zhuceBox.style.display = "none";
        let userNameVal = document.getElementsByClassName("zhuce-user-input")[0].value;
        let passwordVal = document.getElementsByClassName("zhuce-password-input")[0].value;
        if(userName[0].checked == true && userName[1].checked == false){
            $.ajax({
                contentType: "application/json;charset=utf-8",
                type: "POST",
                url: "http://scatszx.cn:8080/demo-ofo-1.0/addUser",
                data: JSON.stringify({"userName":userNameVal,"password": passwordVal}),
                dataType: "JSON",
                success: function() {
                    alert("乘客注册成功!");
                }
            });
        } 
        if(userName[0].checked == false && userName[1].checked == true) {
            $.ajax({
                contentType: "application/json;charset=utf-8",
                type: "POST",
                url: "http://scatszx.cn:8080/demo-ofo-1.0/addDriver",
                data: JSON.stringify({"userName":userNameVal,"password": passwordVal}),
                dataType: "JSON",
                success: function() {
                    alert("司机注册成功!");
                }
            });
        }
        clearUser();
    }
});



function onComplete(obj){
    var res = obj.position 
    var marker = new AMap.Marker({
        icon: "http://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
        position: res,
        offset: new AMap.Pixel(10, 20),
        draggable: true,
        cursor: 'move',
        raiseOnDrag: true
    });
    marker.setMap(mapObj);
    marker.setAnimation('AMAP_ANIMATION_BOUNCE');
}