function goContent1() {
    var btns = document.getElementsByClassName("research");
    var num = 0;
    var responseArray = [];
    for(let i=0 ;i<btns.length; i++) {
        btns[i].addEventListener("click", function(){
            $.ajax({
                type: "GET",
                url: "http://119.23.65.167:8080/demo-1.0/index/news",
                data: "data",
                dataType: "json",
                success: function (response) {
                    for(let i=0; i<response.length; i++) {
                        if(response[i].type == "科研动态大") {
                            num++;
                            responseArray.push(i);
                        }
                    }
                    for(let m=0 ;m<num; m++) {
                        if(i == m) {
                            window.location.href = "pages/news.html?news_id=" + response[responseArray[m]].id;
                        }
                    }
                }
            });
        });
    }
}

function goContent2() {
    var btns = document.getElementsByClassName("dynamic");
    var num = 0;
    var responseArray = [];
    for(let i=0 ;i<btns.length; i++) {
        btns[i].addEventListener("click", function(){
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
                    for(let m=0 ;m<num; m++) {
                        if(i == m) {
                            window.location.href = "pages/news.html?news_id=" + response[responseArray[m]].id;
                        }
                    }
                }
            });
        });
    }
}

function goContent3() {
    var btns = document.getElementsByClassName("announcement-content-box-out");
    var num = 0;
    var responseArray = [];
    for(let i=0 ;i<btns.length; i++) {
        btns[i].addEventListener("click", function(){
            $.ajax({
                type: "GET",
                url: "http://119.23.65.167:8080/demo-1.0/index/news",
                data: "data",
                dataType: "json",
                success: function (response) {
                    for(let i=0; i<response.length; i++) {
                        if(response[i].type == "通知公告") {
                            num++;
                            responseArray.push(i);
                        }
                    }
                    for(let m=0 ;m<num; m++) {
                        if(i == m) {
                            window.location.href = "pages/news.html?news_id=" + response[responseArray[m]].id;
                        }
                    }
                }
            });
        });
    }
}

function goContent4() {
    var btns = document.getElementsByClassName("news-content");
    var num = 0;
    var responseArray = [];
    for(let i=0 ;i<btns.length; i++) {
        btns[i].getElementsByClassName("news-btn")[0].addEventListener("click", function(){
            $.ajax({
                type: "GET",
                url: "http://119.23.65.167:8080/demo-1.0/index/news",
                data: "data",
                dataType: "json",
                success: function (response) {
                    for(let i=0; i<response.length; i++) {
                        if(response[i].type == "新闻") {
                            num++;
                            responseArray.push(i);
                        }
                    }
                    for(let m=0 ;m<num; m++) {
                        if(i == m) {
                            window.location.href = "pages/news.html?news_id=" + response[responseArray[m]].id;
                        }
                    }
                }
            });
        });
    }
}

goContent1();
goContent2();
goContent3();
goContent4();