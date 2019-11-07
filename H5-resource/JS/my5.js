
$(document).ready(function(){
   $(".return").click(function(){
       window.location.href = "../index.html";
   })
   $(".select-ziliao-box").click(function(){
    var span1 = document.querySelector("#span1");
    var input1 = document.querySelector("#input1");
    var showId1 = span1.dataset['id'];
    var showName1 = input1.dataset['value'];
    var Select1 = new IosSelect(1,
        [data],
        {
        container: '.container',
        title: '资料分类',
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
})
})
