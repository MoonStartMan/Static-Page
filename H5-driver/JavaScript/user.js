let returnIndex = document.getElementsByClassName("btn")[0];
var length = window.location.search.length;
var userId = window.location.search.substr(1,length);
var car = document.getElementsByClassName("car")[0];
var number = document.getElementsByClassName("number")[0];
var place = document.getElementsByClassName("place2")[0];
var goBtn = document.getElementsByClassName("btn2")[0];
var userNum = document.getElementsByClassName("user-number")[0];
returnIndex.addEventListener("click",function(){
    window.location.href = "../index.html";
})

AMap.event.addListener(geolocation, 'complete', onComplete);

 function onComplete(obj){
     var res = obj.formattedAddress ;
     document.getElementsByClassName("place")[0].innerHTML = res;
     goBtn.addEventListener("click", function(){
        $.ajax({
            contentType: "application/json;charset=utf-8",
            type: "POST",
            url: "http://scatszx.cn:8080/demo-ofo-1.0/uploadAddUser",
            data: JSON.stringify({"userPlace":res,"id":userId}),
            dataType: "JSON",
            success: function() {
                alert("上传成功！");
            }
        });
     })
}


$.ajax({
    contentType: "application/json;charset=utf-8",
    type: "GET",
    url: "http://scatszx.cn:8080/demo-ofo-1.0/getAllDriver",
    dataType: "JSON",
    success: function(res) {
        for(let i=0; i<res.length; i++) {
            if(res[i].id == userId) {
                car.innerText = res[i].carModel;
                number.innerText = res[i].carNum;
                place.innerText = res[i].driverPlace;
                userNum.innerText = res[i].id;
            }
        }
    }
});