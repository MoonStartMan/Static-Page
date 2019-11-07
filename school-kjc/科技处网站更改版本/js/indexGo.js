var lists2 = document.getElementsByClassName("list2");
var goPreBtn2 = document.getElementById("left-btn2"); 
var goNextBtn2 = document.getElementById("right-btn2");
var points2 = document.getElementsByClassName("point2");

var index2 = 0;

var clearActive2 = function() {
    for(var i=0; i<lists2.length; i++) {
        lists2[i].className = "list2";
    }
    for(var i=0; i<lists2.length; i++) {
        points2[i].className = "point2";
    }
 }

var goIndex2 = function() {
    clearActive2();
    points2[index2].className = "point2 active"
    lists2[index2].className = 'list2 active';
}

var goNext2 = function() {
    if (index2 < 2) {
        index2 ++;
    } else {
        index2 = 0;
    }
    goIndex2();
}

var goPre2 = function() {
    if(index2 == 0) {
        index2 = 2;
    } else {
        index2 --;
    }
    goIndex2();
}

goNextBtn2.addEventListener("click", function(){
    goNext2();
})
goPreBtn2.addEventListener("click", function(){
    goPre2();
})

for(var i=0; i<points2.length; i++) {
    points2[i].addEventListener("click", function(){
        var pointIndex2 = this.getAttribute('data-index2');
        index2 = pointIndex2;
        goIndex2();
    })
}

var mytime2 = setInterval(goNext2,3000);

document.getElementsByClassName("box2")[0].addEventListener("mouseover",function(){
    window.clearInterval(mytime2);
})

document.getElementsByClassName("box2")[0].addEventListener("mouseout",function(){
    mytime2 = setInterval(goNext2,3000);
})