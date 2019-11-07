function select() {
    var btn = document.getElementsByClassName("input-right")[0];
    var input1 = document.querySelector("#input1");
    var span1 = document.querySelector("#span1");
    btn.addEventListener('click', function(){
        var showId1 = span1.dataset['id'];
        var showName1 = input1.dataset['value'];
        var Select1 = new IosSelect(1,
            [data1],
            {
                container: '.container',
                title: '课程选择',
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
}

function changeState() {
    var fix = $('.fixed-box');
    var content = $('.content.two');
    console.log(content);
    $('.input-box input').on('focus', function() {
        fix.css('position','static');
        content.css('margin-bottom','0');
    })
    $('.input-box input').on('blur', function() {
        fix.css('position','fixed');
        content.css('margin-bottom','15rem');
    })
}

var data1 = [
    {'id': '10001', 'value': '课程1'},
    {'id': '10002', 'value': '课程2'},
    {'id': '10003', 'value': '课程3'},
    {'id': '10004', 'value': '课程4'},
    {'id': '10005', 'value': '课程5'},
    {'id': '10006', 'value': '课程6'},
    {'id': '10007', 'value': '课程7'},
    {'id': '10008', 'value': '课程8'},
];

select();
changeState();