var data = [
    {
        img: "../images/product/jia-1.jpg",
        title: "家具系列",
        type: "奥琳娜系列"
    },
    {
        img: "../images/product/jia-2.jpg",
        title: "家具系列",
        type: "奥琳娜系列"
    },
    {
        img: "../images/product/jia-3.jpg",
        title: "家具系列",
        type: "万家好梦系列"
    },
    {
        img: "../images/product/jia-4.jpg",
        title: "家具系列",
        type: "鑫悦明珠系列"
    },
    {
        img: "../images/product/jia-5.jpg",
        title: "家具系列",
        type: "百乐长城系列"
    },
    {
        img: "../images/product/jia-6.jpg",
        title: "家具系列",
        type: "百乐长城系列"
    },
    {
        img: "../images/product/jia-7.jpg",
        title: "家具系列",
        type: "缘梦八益系列"
    },
    {
        img: "../images/product/jia-8.jpg",
        title: "家具系列",
        type: "奥特雅帝系列"
    },
    {
        img: "../images/product/jia-9.jpg",
        title: "家具系列",
        type: "鑫悦明珠系列"
    },
    {
        img: "../images/product/40.jpg",
        title: "沙发系列",
        type: "鑫悦明珠系列"
    },
    {
        img: "../images/product/39.jpg",
        title: "沙发系列",
        type: "太子印象系列"
    },
    {
        img: "../images/product/30.jpg",
        title: "沙发系列",
        type: "奥琳娜系列"
    },
    {
        img: "../images/product/31.jpg",
        title: "沙发系列",
        type: "奥特雅帝系列"
    },
    {
        img: "../images/product/39.jpg",
        title: "沙发系列",
        type: "百乐长城系列"
    },
    
    {
        img: "../images/product/32.jpg",
        title: "沙发系列",
        type: "鑫悦明珠系列"
    },
    
    {
        img: "../images/product/33.jpg",
        title: "沙发系列",
        type: "缘梦八益系列"
    },
    {
        img: "../images/product/34.jpg",
        title: "沙发系列",
        type: "缘梦八益系列"
    },
    {
        img: "../images/product/35.jpg",
        title: "沙发系列",
        type: "缘梦八益处系列"
    },
    {
        img: "../images/product/18.jpg",
        title: "乳胶床垫系列",
        type: "万家好梦系列"
    },
    {
        img: "../images/product/24.jpg",
        title: "乳胶床垫系列",
        type: "优居澜系列"
    },
    {
        img: "../images/product/20.jpg",
        title: "乳胶系列",
        type: "鑫悦明珠系列"
    },
    {
        img: "../images/product/22.jpg",
        title: "乳胶系列",
        type: "百乐长城系列"
    },
    {
        img: "../images/product/23.jpg",
        title: "乳胶系列",
        type: "帝奥长城系列"
    },
    {
        img: "../images/product/1.jpg",
        title: "乳胶系列",
        type: "缘梦八益系列"
    },
    {
        img: "../images/product/25.jpg",
        title: "乳胶床垫系列",
        type: "华盛八益系列"
    },
    {
        img: "../images/product/7.jpg",
        title: "乳胶床垫",
        type: "緣夢麗莎系列"
    },
    {
        img: "../images/product/27.png",
        title: "乳胶床垫",
        type: "奥琳娜系列"
    },
]

var pageSize = 9; //每页条数
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
                <div class="img-box">
                    <img src=${templateItem.img} alt="">
                </div>
                <div class="text-box">
                    <p class="title">${templateItem.title}</p>
                    <p class="type">${templateItem.type}</p>
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
                <div class="img-box">
                    <img src=${templateItem.img} alt="">
                </div>
                <div class="text-box">
                    <p class="title">${templateItem.title}</p>
                    <p class="type">${templateItem.type}</p>
                </div>
            </div>
        `)
    }
}

clickPage();
firstCreate(data);