function goContent1() {
    var btns = document.getElementsByClassName("research");
    for(let i=0 ;i<btns.length; i++) {
        btns[i].addEventListener("click", function(){
            $.ajax({
                type: "GET",
                url: "http://scatszx.cn:8080/network/index/news?type=technologyBig",
                data: "data",
                dataType: "json",
                success: function (response) {
                    for(let m=0 ;m<response.length; m++) {
                        if(i == m) {
                            window.location.href = "pages/news.html?news_id=" + response[m].id;
                        }
                    }
                }
            });
        });
    }
}

function goContent2() {
    var btns = document.getElementsByClassName("dynamic");
    for(let i=0 ;i<btns.length; i++) {
        btns[i].addEventListener("click", function(){
            $.ajax({
                type: "GET",
                url: "http://scatszx.cn:8080/network/index/news?type=technologySmall",
                data: "data",
                dataType: "json",
                success: function (response) {
                    for(let m=0 ;m<response.length; m++) {
                        if(i == m) {
                            window.location.href = "pages/news.html?news_id=" + response[m].id;
                        }
                    }
                }
            });
        });
    }
}

function goContent3() {
    var btns = document.getElementsByClassName("announcement-content-box-out");
    for(let i=0 ;i<btns.length; i++) {
        btns[i].addEventListener("click", function(){
            $.ajax({
                type: "GET",
                url: "http://scatszx.cn:8080/network/index/news?type=notice",
                data: "data",
                dataType: "json",
                success: function (response) {
                    for(let m=0 ;m<response.length; m++) {
                        if(i == m) {
                            window.location.href = "pages/news.html?news_id=" + response[m].id;
                        }
                    }
                }
            });
        });
    }
}

function goContent4() {
    var btns = document.getElementsByClassName("news-content");
    for(let i=0 ;i<btns.length; i++) {
        btns[i].getElementsByClassName("news-btn")[0].addEventListener("click", function(){
            $.ajax({
                type: "GET",
                url: "http://scatszx.cn:8080/network/index/news?type=news",
                data: "data",
                dataType: "json",
                success: function (response) {
                    for(let m=0 ;m<response.length; m++) {
                        if(i == m) {
                            window.location.href = "pages/news.html?news_id=" + response[m].id;
                        }
                    }
                }
            });
        });
    }
}

function goContent5() {
    var btns = document.getElementsByClassName("content3-li-btn");
    for(let i=0 ;i<btns.length; i++) {
        btns[i].addEventListener("click", function(){
            $.ajax({
                type: "GET",
                url: "http://scatszx.cn:8080/network/index/news?type=result",
                data: "data",
                dataType: "json",
                success: function (response) {
                    for(let m=0 ;m<response.length; m++) {
                        if(i == m) {
                            window.location.href = "pages/news.html?news_id=" + response[m].id;
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
goContent5();