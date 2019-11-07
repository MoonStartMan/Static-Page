var lists = document.getElementsByClassName("list");
var goPreBtn = document.getElementById("left-btn"); 
var goNextBtn = document.getElementById("right-btn");

var index = 0;


var clearActive = function() {
    for(var i=0; i<lists.length; i++) {
        lists[i].className = "list";
    }
 }

var goIndex = function() {
    clearActive();
    lists[index].className = 'list active';
}

var goNext = function() {
    if (index < 4) {
        index ++;
    } else {
        index = 0;
    }
    goIndex();
}

var goPre = function() {
    if(index == 0) {
        index = 4;
    } else {
        index --;
    }
    goIndex();
}

goNextBtn.addEventListener("click", function(){
    goNext();
})
goPreBtn.addEventListener("click", function(){
    goPre();
})



function createContainer1() {
    var container1Bottom = document.getElementsByClassName("container1-bottom")[0];
    var container1BottomOut = [];
    var imgs = [];
    var container1BottomImgBox = [];
    var container1BottomTextBox = [];
    var container1BottomTimeBox = [];
    var num = 0;
    var responseArray = [];
    $.ajax({
        type: "GET",
        url: "http://119.23.65.167:8080/demo-1.0/index/news",
        data: "data",
        dataType: "json",
        success: function (response) {
            for(let i=0; i<response.length; i++) {
                if(response[i].type == "科研通知") {
                    num++;
                    responseArray.push(i);
                }
            }
            for(let j=0; j<num; j++) {
                container1BottomOut[j] = document.createElement("div");
                container1BottomOut[j].className = "container1-bottom-out";
                container1Bottom.appendChild(container1BottomOut[j]);
                container1BottomImgBox[j] = document.createElement("div");
                container1BottomImgBox[j].className = "container1-bottom-img-box";
                container1BottomOut[j].appendChild(container1BottomImgBox[j]);
                imgs[j] = document.createElement("img");
                imgs[j].src = "image/index/laba.png";
                imgs[j].className = "container1-img";
                container1BottomImgBox[j].appendChild(imgs[j]);
                container1BottomTextBox[j] = document.createElement("div");
                container1BottomTextBox[j].className = "container1-bottom-text-box";
                container1BottomTextBox[j].innerText = response[responseArray[j]].title;
                container1BottomOut[j].appendChild(container1BottomTextBox[j]);
                container1BottomTimeBox[j] = document.createElement("div");
                container1BottomTimeBox[j].className = "container1-bottom-time-box";
                container1BottomOut[j].appendChild(container1BottomTimeBox[j]);
                container1BottomTimeBox[j].innerText = response[responseArray[j]].createTime;
            }
        }
    });
}

function createContainer2() {
    var centerRightTextBoxTop = document.getElementsByClassName("container-out-center-content")[0];
    var outBox = [];
    var textTop = [];
    var textBox = [];
    var textCenter = [];
    var TextBottom = [];
    var imgBox = [];
    var imgs = [];
    var A1 = [];
    var A2 = [];
    var num = 0;
    var responseArray = [];
    $.ajax({
        type: "GET",
        url: "http://119.23.65.167:8080/demo-1.0/index/news",
        data: "data",
        dataType: "json",
        success: function (response) {
            for(let i=0; i<response.length; i++) {
                if(response[i].type == "科技动态") {
                    num++;
                    responseArray.push(i);
                }
            }
            for(let j=0; j<num; j++) {
                outBox[j] = document.createElement("div");
                centerRightTextBoxTop.appendChild(outBox[j]);
                imgBox[j] = document.createElement("div");
                imgs[j] = document.createElement("img");
                outBox[j].className = "container-out-center-content-box";
                imgBox[j].className = "center-left-img-box";
                imgs[j].src = response[responseArray[j]].listImg[0].url;
                outBox[j].appendChild(imgBox[j]);
                imgBox[j].appendChild(imgs[j]);
                textBox[j] = document.createElement("div");
                textBox[j].className = "center-right-text-box";
                outBox[j].appendChild(textBox[j]);
                textTop[j] = document.createElement("div");
                textTop[j].className = "center-right-text-box-top";
                textBox[j].appendChild(textTop[j]);
                A1[j] = document.createElement("a"); 
                textTop[j].appendChild(A1[j]);
                A1[j].innerText = response[responseArray[j]].title;
                textCenter[j] = document.createElement("div");
                textCenter[j].className = "center-right-text-box-center";
                textBox[j].appendChild(textCenter[j]);
                A2[j] = document.createElement("a");
                textCenter[j].appendChild(A2[j]);
                A2[j].innerText = response[responseArray[j]].information;
                TextBottom[j] = document.createElement("div");
                TextBottom[j].className = "center-right-text-box-bottom";
                textBox[j].appendChild(TextBottom[j]);
                TextBottom[j].innerText = response[responseArray[j]].createTime;
            }
        }
    });
}

function createContainer3() {
    var num = 0;
    var responseArray = [];
    var outBox = document.getElementsByClassName("container-out-center-content2")[0];
    var cover = [];
    var leftBox = [];
    var rightBox = [];
    var topicBox = [];
    var textBox = [];
    var A1 = [];
    var A2 = [];
    $.ajax({
        type: "GET",
        url: "http://119.23.65.167:8080/demo-1.0/index/news",
        data: "data",
        dataType: "json",
        success: function (response) {
            for(let i=0; i<response.length; i++) {
                if(response[i].type == "院系科研动态") {
                    num++;
                    responseArray.push(i);
                }
            }
            for(let j=0; j<num; j++) {
                cover[j] = document.createElement("div");
                outBox.appendChild(cover[j]);
                cover[j].className = "container-out-center-content-box2";
                leftBox[j] = document.createElement("div");
                rightBox[j] = document.createElement("div");
                topicBox[j] = document.createElement("div");
                textBox[j] = document.createElement("div");
                A1[j] = document.createElement("a");
                A2[j] = document.createElement("a");
                leftBox[j].className = "container-out-center-content-box2-left";
                rightBox[j].className = "container-out-center-content-box2-right";
                rightBox[j].innerText = response[responseArray[j]].createTime;
                cover[j].appendChild(leftBox[j]);
                cover[j].appendChild(rightBox[j]);
                leftBox[j].appendChild(topicBox[j]);
                topicBox[j].className = "container-out-center-content-box2-left-topic";
                topicBox[j].appendChild(A1[j]);
                A1[j].innerText = response[responseArray[j]].title;
                leftBox[j].appendChild(textBox[j]);
                textBox[j].className = "container-out-center-content-box2-left-content";
                A2[j].innerText = response[responseArray[j]].information;
                textBox[j].appendChild(A2[j]);
            }
        }
    });
}

// function createContainer4() {
//     var outBox = document.getElementsByClassName("container-out-bottom-text-box")[0];
//     var cover = [];
//     var topic = [];
//     var list1 = [];
//     var list2 = [];
//     var list3 = [];
//     var list4 = [];
//     var span1 = [];
//     var span2 = [];
//     var span3 = [];
//     var span4 = [];
//     var strong1 = []; 
//     var strong2 = [];
//     var strong3 = [];
//     var strong4 = [];
//     var responseArray = [];
//     var num = 0;
//     $.ajax({
//         type: "GET",
//         url: "http://119.23.65.167:8080/demo-1.0/index/news",
//         data: "data",
//         dataType: "json",
//         success: function (response) {
//             for(let i=0; i<response.length; i++) {
//                 if(response[i].type == "学术活动预告") {
//                     num++;
//                     responseArray.push(i);
//                 }
//             }
//             for(let j=0; j<num; j++) {
//                 cover[j] = document.createElement("div");
//                 cover[j].className = "container-out-bottom-text";
//                 outBox.appendChild(cover[j]);
//                 topic[j] = document.createElement("div");
//                 topic[j].className = "container-out-bottom-text-topic";
//                 cover[j].appendChild(topic[j]);
//                 topic[j].innerText = response[responseArray[j]].time;
//                 list1[j] = document.createElement("div");
//                 cover[j].appendChild(list1[j]);
//                 list1[j].className = "container-out-bottom-text-list1";
//                 strong1[j] = document.createElement("strong");
//                 strong1[j].innerText = "报告题目：";
//                 list1[j].appendChild(strong1[j]);
//                 span1[j] = document.createElement("span");
//                 list1[j].appendChild(span1[j]);
//                 span1[j].innerText = response[responseArray[j]].title;
//                 list2[j] = document.createElement("div");
//                 cover[j].appendChild(list2[j]);
//                 list2[j].className = "container-out-bottom-text-list2";
//                 strong2[j] = document.createElement("strong");
//                 strong2[j].innerText = "报告人：";
//                 list2[j].appendChild(strong2[j]);
//                 span2[j] = document.createElement("span");
//                 list2[j].appendChild(span2[j]);
//                 span2[j].innerText = response[responseArray[j]].author;
//                 list3[j] = document.createElement("div");
//                 cover[j].appendChild(list3[j]);
//                 list3[j].className = "container-out-bottom-text-list3";
//                 strong3[j] = document.createElement("strong");
//                 strong3[j].innerText = "活动地点：";
//                 list3[j].appendChild(strong3[j]);
//                 span3[j] = document.createElement("span");
//                 list3[j].appendChild(span3[j]);
//                 span3[j].innerText = response[responseArray[j]].address;
//                 list4[j] = document.createElement("div");
//                 cover[j].appendChild(list4[j]);
//                 list4[j].className = "container-out-bottom-text-list4";
//                 strong4[j] = document.createElement("strong");
//                 strong4[j].innerText = "主办单位：";
//                 list4[j].appendChild(strong4[j]);
//                 span4[j] = document.createElement("span");
//                 list4[j].appendChild(span4[j]);
//                 span4[j].innerText = response[responseArray[j]].organizer;
//             }
//         }
//     });
// }

function change() {
    var box = document.getElementsByClassName("container-out-bottom-text");
    var topic = document.getElementsByClassName("container-out-bottom-text-topic");
    for(let i=0; i<box.length; i++) {
        box[i].addEventListener("mouseover", function(){
            topic[i].style.backgroundColor = "#7CFC00";
            box[i].style.backgroundColor = "#FFFFFF";
            box[i].style.border ="1.5px solid #87CEFA";
        })
        box[i].addEventListener("mouseout", function(){
            topic[i].style.backgroundColor = "#20B2AA";
            box[i].style.backgroundColor = "#EEEEEE";
            box[i].style.border ="none";
        })
    }
}

function changeImg() {
    var outBox = document.getElementsByClassName("container1-bottom-out");
    var img = document.getElementsByClassName("container1-img");
    for (let i=0; i<outBox.length; i++){
        outBox[i].addEventListener("mouseover", function(){
            img[i].src = "image/index/laba_hover.png";
            
        });
        outBox[i].addEventListener("mouseout", function(){
            img[i].src = "image/index/laba.png";
        })
    }
}

function goBanner(){
    var list = document.getElementsByClassName("list");
    var list2 = document.getElementsByClassName("list2");
    var span = document.getElementsByClassName("text");
    var num = 0;
    var responseArray = [];
    $.ajax({
        type: "GET",
        url: "http://119.23.65.167:8080/demo-1.0/index/news",
        data: "data",
        dataType: "json",
        success: function (response) {
            for(let i=0; i<response.length; i++) {
                if(response[i].type == "轮播图") {
                    num++;
                    responseArray.push(i);
                }
            }
            for(let m=0; m<3; m++) {
                list2[m].style.backgroundImage = "url("+response[responseArray[m]].listImg[0].url+")";
            }
        }
    });
}

function goBannerContent(){
    var imgBox = document.getElementsByClassName("list-left-img-box");
    var topic = document.getElementsByClassName("list-right-text-box-topic");
    var time = document.getElementsByClassName("lunbo-time");
    var content = document.getElementsByClassName("list-right-text-box-content");
    var num = 0;
    var responseArray = [];
    $.ajax({
        type: "GET",
        url: "http://119.23.65.167:8080/demo-1.0/index/news",
        data: "data",
        dataType: "json",
        success: function (response) {
            for(let i=0; i<response.length; i++) {
                if(response[i].type == "轮播内容") {
                    num++;
                    responseArray.push(i);
                }
            }
            for(let j=0; j<num; j++) {
                imgBox[j].getElementsByTagName("img")[0].src = response[responseArray[j]].listImg[0].url;
                topic[j].innerText = response[responseArray[j]].title;
                time[j].innerText = response[responseArray[j]].createTime;
                content[j].innerText = response[responseArray[j]].information;
            }
        }
    });
}

function eqHover() {
    var box = document.getElementsByClassName("container-out-bottom-src-box-left-content")[0];
    var box2 = document.getElementsByClassName("container-out-bottom-src-box-right-content")[0];
    var length = box.getElementsByTagName("a").length;
    var length2 = box2.getElementsByTagName("a").length;
    for(let i=0; i<length; i++) {
        box.getElementsByTagName("a")[i].addEventListener("mouseover", function(){
            box.getElementsByTagName("a")[i].style.color = "#216FBC";
        })
        box.getElementsByTagName("a")[i].addEventListener("mouseout", function(){
            box.getElementsByTagName("a")[i].style.color = "#444444";
        })
    }
    for(let i=0; i<length2; i++) {
        box2.getElementsByTagName("a")[i].addEventListener("mouseover", function(){
            box2.getElementsByTagName("a")[i].style.color = "#216FBC";
        })
        box2.getElementsByTagName("a")[i].addEventListener("mouseout", function(){
            box2.getElementsByTagName("a")[i].style.color = "#444444";
        })
    }
}

function gotoPageOne() {
    var boxs = document.getElementsByClassName("center-right-text-box");
    var responseArray = [];
    var num = 0;
    for(let i=0; i<boxs.length; i++) {
        boxs[i].addEventListener("click", function(){
            $.ajax({
                type: "GET",
                url: "http://119.23.65.167:8080/demo-1.0/index/news",
                data: "data",
                dataType: "json",
                success: function (response) {
                    for(let j=0; j<response.length; j++) {
                        if(response[j].type == "科技动态") {
                            num++;
                            responseArray.push(j);
                        }
                    }
                    for(let m=0; m<num; m++) {
                        if(i == m) {
                            window.location.href = "pages/news.html?news_id=" + response[responseArray[m]].id;
                        }
                    }
                }
            });
        })
    }
}

function gotoPageTwo() {
    var boxs = document.getElementsByClassName('container-out-center-content-box2-left');
    var responseArray = [];
    var num = 0;
    for(let i=0; i<boxs.length; i++) {
        boxs[i].addEventListener("click", function(){
            $.ajax({
                type: "GET",
                url: "http://119.23.65.167:8080/demo-1.0/index/news",
                data: "data",
                dataType: "json",
                success: function (response) {
                    for(let j=0; j<response.length; j++) {
                        if(response[j].type == "院系科研动态") {
                            num++;
                            responseArray.push(j);
                        }
                    }
                    for(let m=0; m<num; m++) {
                        if(i == m) {
                            window.location.href = "pages/news.html?news_id=" + response[responseArray[m]].id;
                        }
                    }
                }
            });
        })
    }
}


function goBanner2(){
    var lists3 = document.getElementsByClassName("warp3-li"); //图片
    var goPreBtn3 = document.getElementsByClassName("left")[0]; 
    var goNextBtn3 = document.getElementsByClassName("right")[0];
    var points3 = document.getElementsByClassName("point-li"); //点

    var index3 = 0; //index表示第几张图片在展示 ---》第index张图片有active这个类名
    //第几个点在展示


    var clearActive3 = function() {
        for(var i=0; i<lists3.length; i++) {
            points3[i].className = "point-li";
        }
        for(var i=0; i<lists3.length; i++) {
            lists3[i].className = "warp3-li";
        }
    }

    var goIndex3 = function() {
        clearActive3();
        points3[index3].className = "point-li on";
        lists3[index3].className = "warp3-li active"
    }

    var goNext3 = function() {
        if (index3 < 3) {
            index3 ++;
        } else {
            index3 = 0;
        }
        goIndex3();
    }

    var goPre3 = function() {
        if(index3 == 0) {
            index3 = 3;
        } else {
            index3 --;
        }
        goIndex3();
    }

    goNextBtn3.addEventListener("click", function(){
        goNext3();
    })
    goPreBtn3.addEventListener("click", function(){
        goPre3();
    })

    for(var i=0; i<points3.length; i++) {
        points3[i].addEventListener("click", function(){
            var pointIndex3 = this.getAttribute('data-index3');
            index3 = pointIndex3;
            goIndex3();
        })
    }

    var mytime3 = setInterval(goNext3,4000);
}
function createContainer5(){
    var outBox = document.getElementsByClassName("warp3-li");
    var length = document.getElementsByClassName("warp3-box-img").length;
    var img = document.getElementsByClassName("warp3-box-img");
    var topic = document.getElementsByClassName("warp3-box-topic");
    var content = document.getElementsByClassName("warp3-box-content");
    var num = 0;
    var responseArray = [];
    $.ajax({
        type: "GET",
        url: "http://119.23.65.167:8080/demo-1.0/index/news",
        data: "data",
        dataType: "json",
        success: function (response) {
            for(let i=0; i<response.length; i++) {
                if(response[i].type == "成果展示") {
                    num++;
                    responseArray.push(i);
                }
            }
            for(let i=0; i<length; i++){
                img[i].getElementsByTagName("img")[0].src = response[responseArray[i]].listImg[0].url;
                topic[i].innerText = response[responseArray[i]].title;
                content[i].innerText = response[responseArray[i]].information;
            }
        }
    });
    
}


createContainer1();
createContainer2();
createContainer3();
// createContainer4();
createContainer5();
goBanner();
eqHover();
goBannerContent();
setTimeout(gotoPageOne,1000);
setTimeout(gotoPageTwo,1000);
setTimeout(changeImg,1000);
setTimeout(change,2000);
setTimeout(goBanner2,2000);