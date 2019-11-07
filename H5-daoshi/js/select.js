var showContent = document.getElementsByClassName('select-inner-input');
var btn = document.getElementsByClassName('select-inner');
var span1 = document.querySelector("#span1");
var span2 = document.querySelector("#span2");
var span3 = document.querySelector("#span3");
var span4 = document.querySelector("#span4");
var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");
var input3 = document.querySelector("#input3");
var input4 = document.querySelector("#input4");

btn[0].addEventListener('click', function(){
    var showId1 = span1.dataset['id'];
    var showName1 = input1.dataset['value'];
    var Select1 = new IosSelect(1,
        [data1],
        {
            container: '.container',
            title: '地区选择',
            itemHeight: 50,
            itemShowCount: 3,
            oneLevelId: showId1,
            callback: function (selectOneObj) {
            input1.value = selectOneObj.id;
            span1.innerHTML = selectOneObj.value;
            span1.dataset['id'] = selectOneObj.id;
            span1.dataset['value'] = selectOneObj.value;
            }
    });
});


btn[1].addEventListener('click', function(){
    var showId2 = span2.dataset['id'];
    var showName2 = input2.dataset['value'];
    var Select2 = new IosSelect(1,
        [data2],
        {
            container: '.container',
            title: '学校选择',
            itemHeight: 50,
            itemShowCount: 3,
            oneLevelId: showId2,
            callback: function (selectOneObj) {
            input2.value = selectOneObj.id;
            span2.innerHTML = selectOneObj.value;
            span2.dataset['id'] = selectOneObj.id;
            span2.dataset['value'] = selectOneObj.value;
            }
    });
});

btn[2].addEventListener('click', function(){
    var showId3 = span3.dataset['id'];
    var showName3 = input3.dataset['value'];
    var Select3 = new IosSelect(1,
        [data3],
        {
            container: '.container',
            title: '专业选择',
            itemHeight: 50,
            itemShowCount: 3,
            oneLevelId: showId3,
            callback: function (selectOneObj) {
            input3.value = selectOneObj.id;
            span3.innerHTML = selectOneObj.value;
            span3.dataset['id'] = selectOneObj.id;
            span3.dataset['value'] = selectOneObj.value;
            }
    });
});

btn[3].addEventListener('click', function(){
    var showId4 = span4.dataset['id'];
    var showName4 = input4.dataset['value'];
    var Select4 = new IosSelect(1,
        [data4],
        {
            container: '.container',
            title: '导师类型选择',
            itemHeight: 50,
            itemShowCount: 3,
            oneLevelId: showId4,
            callback: function (selectOneObj) {
            input4.value = selectOneObj.id;
            span4.innerHTML = selectOneObj.value;
            span4.dataset['id'] = selectOneObj.id;
            span4.dataset['value'] = selectOneObj.value;
            }
    });
});

$(document).ready(function(){
    $(".select-box").click(function(){
        window.location.href = "pages/select.html";
    })
    $(".result-content-bottom div").eq(0).click(function(){
        window.location.href = "pages/totur.html"
    })
})
