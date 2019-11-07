var lists = document.getElementsByClassName("list");
var goPreBtn = document.getElementById("left-btn"); 
var goNextBtn = document.getElementById("right-btn");
var points = document.getElementsByClassName("point");
var texts = document.getElementsByClassName("spantext2");

var index = 0;


var clearActive = function() {
    for(var i=0; i<lists.length; i++) {
        lists[i].className = "list";
    }
    for(var i=0; i<lists.length; i++) {
        points[i].className = "point";
    }
    for(var i=0; i<texts.length; i++){
        texts[i].classList = "spantext2"
    }
 }

var goIndex = function() {
    clearActive();
    texts[index].className = "spantext2 active"
    points[index].className = "point active"
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

for(var i=0; i<points.length; i++) {
    points[i].addEventListener("click", function(){
        var pointIndex = this.getAttribute('data-index');
        index = pointIndex;
        goIndex();
    })
}

var mytime = setInterval(goNext,2000);

document.getElementsByClassName("container-top-img-box")[0].addEventListener("mouseover",function(){
    window.clearInterval(mytime);
})

document.getElementsByClassName("container-top-img-box")[0].addEventListener("mouseout",function(){
    mytime = setInterval(goNext,2000);
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

function createContainer4() {
    var outBox = document.getElementsByClassName("container-out-bottom-text-box")[0];
    var cover = [];
    var topic = [];
    var list1 = [];
    var list2 = [];
    var list3 = [];
    var list4 = [];
    var span1 = [];
    var span2 = [];
    var span3 = [];
    var span4 = [];
    var strong1 = []; 
    var strong2 = [];
    var strong3 = [];
    var strong4 = [];
    var responseArray = [];
    var num = 0;
    $.ajax({
        type: "GET",
        url: "http://119.23.65.167:8080/demo-1.0/index/news",
        data: "data",
        dataType: "json",
        success: function (response) {
            for(let i=0; i<response.length; i++) {
                if(response[i].type == "学术活动预告") {
                    num++;
                    responseArray.push(i);
                }
            }
            for(let j=0; j<num; j++) {
                cover[j] = document.createElement("div");
                cover[j].className = "container-out-bottom-text";
                outBox.appendChild(cover[j]);
                topic[j] = document.createElement("div");
                topic[j].className = "container-out-bottom-text-topic";
                cover[j].appendChild(topic[j]);
                topic[j].innerText = response[responseArray[j]].time;
                list1[j] = document.createElement("div");
                cover[j].appendChild(list1[j]);
                list1[j].className = "container-out-bottom-text-list1";
                strong1[j] = document.createElement("strong");
                strong1[j].innerText = "报告题目：";
                list1[j].appendChild(strong1[j]);
                span1[j] = document.createElement("span");
                list1[j].appendChild(span1[j]);
                span1[j].innerText = response[responseArray[j]].title;
                list2[j] = document.createElement("div");
                cover[j].appendChild(list2[j]);
                list2[j].className = "container-out-bottom-text-list2";
                strong2[j] = document.createElement("strong");
                strong2[j].innerText = "报告人：";
                list2[j].appendChild(strong2[j]);
                span2[j] = document.createElement("span");
                list2[j].appendChild(span2[j]);
                span2[j].innerText = response[responseArray[j]].author;
                list3[j] = document.createElement("div");
                cover[j].appendChild(list3[j]);
                list3[j].className = "container-out-bottom-text-list3";
                strong3[j] = document.createElement("strong");
                strong3[j].innerText = "活动地点：";
                list3[j].appendChild(strong3[j]);
                span3[j] = document.createElement("span");
                list3[j].appendChild(span3[j]);
                span3[j].innerText = response[responseArray[j]].address;
                list4[j] = document.createElement("div");
                cover[j].appendChild(list4[j]);
                list4[j].className = "container-out-bottom-text-list4";
                strong4[j] = document.createElement("strong");
                strong4[j].innerText = "主办单位：";
                list4[j].appendChild(strong4[j]);
                span4[j] = document.createElement("span");
                list4[j].appendChild(span4[j]);
                span4[j].innerText = response[responseArray[j]].organizer;
            }
        }
    });
}

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
            for(let j=0; j<num; j++) {
                list[j].style.backgroundImage = "url("+response[responseArray[j]].listImg[0].url+")";
                span[j].getElementsByTagName("a")[0].innerText = response[responseArray[j]].title;
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

createContainer1();
createContainer2();
createContainer3();
createContainer4();
goBanner();
eqHover();
setTimeout(gotoPageOne,1000);
setTimeout(gotoPageTwo,1000);
setTimeout(changeImg,1000);
setTimeout(change,2000);