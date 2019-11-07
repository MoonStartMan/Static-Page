var data = [
    {
        img: "../images/news/1.jpg",
        title:"家居装修：卫浴石材的使用与清洁保养",
        time: "2014-10-15",
        text: "随着人们生活水平的不断提高，人们在居家装饰中越来越追求奢华高档的装饰效果，渐渐的在家居装饰中大量使用天然石材已经成为一种时尚，而且其应用范围已经逐渐的扩展到的卫生间和浴室的装饰中。"
    },
    {
        img: "../images/news/2.jpg",
        title:"花岗石平板的优点",
        time: "2014-10-15",
        text: "花岗石平板是用天然的石质材料制成的精密基准测量工具，随着人们生活水平的不断提高，人们在居家装饰中越来越追求奢华高档的装饰效果，渐渐的在家居装饰中大量使用天然石材已经成为一种时尚，而且其应用范围已经逐渐的扩展到的卫生间和浴室的装饰中。"
    },
    {
        img: "../images/news/3.jpg",
        title:"人造石性能特点",
        time: "2014-10-15",
        text: "高贵柔和的外表 纳米微晶石花色品种多、色彩明快、自然高雅、现代感十足，尽显其高贵和丰富的内涵，是追求心灵意境的完美体现。随着人们生活水平的不断提高，人们在居家装饰中越来越追求奢华高档的装饰效果，渐渐的在家居装饰中大量使用天然石材已经成为一种时尚，而且其应用范围已经逐渐的扩展到的卫生间和浴室的装饰中。"
    },
    {
        img: "../images/news/4.jpg",
        title:"大理石的装饰常识",
        time: "2014-10-15",
        text: "大理石的装饰常识随着人们生活水平的不断提高，人们在居家装饰中越来越追求奢华高档的装饰效果，渐渐的在家居装饰中大量使用天然石材已经成为一种时尚，而且其应用范围已经逐渐的扩展到的卫生间和浴室的装饰中。"
    },
    {
        img: "../images/news/5.jpg",
        title:"2010上海世博会后石材市场是否将面临“断层”",
        time: "2014-10-13",
        text: "2010上海世博会后石材市场是否将面临“断层”随着人们生活水平的不断提高，人们在居家装饰中越来越追求奢华高档的装饰效果，渐渐的在家居装饰中大量使用天然石材已经成为一种时尚，而且其应用范围已经逐渐的扩展到的卫生间和浴室的装饰中。"
    },
    {
        img: "../images/news/6.jpg",
        title:"某某石材引领空间造型新境界",
        time: "2014-10-13",
        text: "某某石材引领空间造型新境界随着人们生活水平的不断提高，人们在居家装饰中越来越追求奢华高档的装饰效果，渐渐的在家居装饰中大量使用天然石材已经成为一种时尚，而且其应用范围已经逐渐的扩展到的卫生间和浴室的装饰中。"
    },
    {
        img: "../images/news/7.jpg",
        title:"某某家具-一流产品打造消费者放心品牌",
        time: "2014-10-15",
        text: "某某石材-一流产品打造消费者放心品牌随着人们生活水平的不断提高，人们在居家装饰中越来越追求奢华高档的装饰效果，渐渐的在家居装饰中大量使用天然石材已经成为一种时尚，而且其应用范围已经逐渐的扩展到的卫生间和浴室的装饰中。"
    },
    {
        img: "../images/news/7.jpg",
        title:"某某企业为提高国产石材档次助力",
        time: "2014-10-15",
        text: "某某企业为提高国产石材档次助力随着人们生活水平的不断提高，人们在居家装饰中越来越追求奢华高档的装饰效果，渐渐的在家居装饰中大量使用天然石材已经成为一种时尚，而且其应用范围已经逐渐的扩展到的卫生间和浴室的装饰中。"
    }
]

var pageSize = 6; //每页条数
var pageNo = 0; //  当前页数
var totalPage =Math.ceil((data.length/pageSize)); //  总页数
var totalSize = data.length; // 数据总条数

console.log(totalPage);

//  模版创建
function createTem(template){
    $(".container1").empty();
    for(let i=(pageSize*pageNo);i<totalSize-(totalPage-pageNo-1)*pageSize; i++) {
        const templateItem = template[i];
        $(".container1").append(`
        <div class="list">
            <div class="img">
                <img src=${templateItem.img} alt="">
            </div>
            <div class="text-box">
                <div class="title">${templateItem.title}</div>
                <div class="time">${templateItem.time}</div>
                <div class="text">${templateItem.text}</div>
            </div>
        </div>
        `)
    }
}

//  分页处理
function clickPage(){

    for(let i=0; i<totalPage; i++) {
        var numberBtn = [];
        numberBtn[i] = document.createElement("button");
        numberBtn[i].innerHTML = i+1;
        document.getElementsByClassName("number-box")[0].appendChild(numberBtn[i]);
    }

    document.getElementsByClassName("pre")[0].addEventListener("click", function(){
        if(pageNo != 0) {
            pageNo --;
        }
        createTem(data);
    })
    
    document.getElementsByClassName("next")[0].addEventListener("click", function(){
        if(pageNo != totalPage-1){
            pageNo ++;
        }
        createTem(data);
    })
    
    var length = document.getElementsByClassName("number-box")[0].getElementsByTagName("button").length;
    
    for(let i=0; i<length; i++) {
        document.getElementsByClassName("number-box")[0].getElementsByTagName("button")[i].addEventListener("click", function(e){
            pageNo = i;
            createTem(data);
            e.preventDefault();
        })
    }
}

function firstCreate(template) {
    for(let i=0; i<pageSize; i++) {
        const templateItem = template[i];
        $(".container1").append(`
            <div class="list">
                <div class="img">
                    <img src=${templateItem.img} alt="">
                </div>
                <div class="text-box">
                    <div class="title">${templateItem.title}</div>
                    <div class="time">${templateItem.time}</div>
                    <div class="text">${templateItem.text}</div>
                </div>
            </div>
        `)
    }
}

clickPage();
firstCreate(data);