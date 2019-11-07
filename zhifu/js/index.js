function warp2Hover() {
    var lists = document.getElementsByClassName("warp2-box-list")

    function clear() {
        for(let i=0; i<lists.length; i++) {
            lists[i].className = "warp2-box-list";
            lists[i].getElementsByClassName("warp2-box-list-title")[0].className = "warp2-box-list-title";
            lists[i].getElementsByClassName("warp2-box-list-text")[0].className = "warp2-box-list-text";
            lists[i].getElementsByClassName("circle")[0].className = "circle";
        }
    }

    function addActive(index) {
        lists[index].className = "warp2-box-list active";
        lists[index].getElementsByClassName("warp2-box-list-title")[0].className = "warp2-box-list-title active";
        lists[index].getElementsByClassName("warp2-box-list-text")[0].className = "warp2-box-list-text active";
        lists[index].getElementsByClassName("circle")[0].className = "circle active";
    }
    
    for(let i=0; i<lists.length; i++) {
        lists[i].addEventListener("mouseenter",function(){
            clear();
            addActive(i);
        },false)
    }
}

warp2Hover();

function warp3Change() {
    var leftLists = document.getElementsByClassName("warp3-box-left-list");
    var rightLists = document.getElementsByClassName("warp3-box-right-list");
    for(let i=0; i<leftLists.length; i++) {
        leftLists[i].classList.add("addWidth"+parseInt((i+1)));
    }
    for(let i=0; i<rightLists.length; i++) {
        rightLists[i].classList.add("addWidth"+parseInt((i+6)));
    }
}

function warp3Go() {
    document.getElementsByClassName("warp3-box-center")[0].addEventListener("mouseenter",function(){
        warp3Change();
        document.getElementsByClassName("warp3-box-left")[0].style.display = "block";
        document.getElementsByClassName("warp3-box-right")[0].style.display = "block";
    },false)
}

warp3Go();


function warp5Hover() {
    var box =document.getElementsByClassName("warp5")[0];
    var show = document.getElementsByClassName("warp5-box")[0];
    var lists = document.getElementsByClassName("warp5-box-list");
    function clear() {
        for(let i=0; i<lists.length; i++) {
            lists[i].className = "warp5-box-list";
            lists[i].getElementsByClassName("warp5-box-list-title")[0].className = "warp5-box-list-title";
            lists[i].getElementsByClassName("warp5-box-list-text")[0].className = "warp5-box-list-text";
        }
    }

    function addActive(index) {
        lists[index].className = "warp5-box-list active";
        lists[index].getElementsByClassName("warp5-box-list-title")[0].className = "warp5-box-list-title active";
        lists[index].getElementsByClassName("warp5-box-list-text")[0].className = "warp5-box-list-text active";
    }

    box.addEventListener("mouseenter",function(e){
        show.className = "warp5-box active"
        for(let i=0; i<lists.length; i++) {
            lists[i].classList.add("addWarp5");
        }
        e.preventDefault();
    },false)

    box.addEventListener("mouseleave",function(e){
        show.className = "warp5-box"
        e.preventDefault();
    },false)

    for(let i=0; i<lists.length; i++) {
        lists[i].addEventListener("mouseenter",function(e){
            clear();
            addActive(i);
            e.preventDefault();
        },false)
    }
}


warp5Hover();

function warp6Add() {
    var box = document.getElementsByClassName("warp6-box")[0];
    var lists = box.getElementsByClassName("warp6-box-list");
    for(let i=0; i<lists.length; i++) {
        if(i%2 == 0) {
            lists[i].classList.add("addWarp6-1");
        } else {
            lists[i].classList.add("addWarp6-2");
        }
    }
}

function warp6Go() {
    document.getElementsByClassName("warp6")[0].addEventListener("mouseenter",function() {
        warp6Add();
        document.getElementsByClassName("warp6-box")[0].style.display = "block";
    },false);
}

warp6Go();

function warp7Add() {
    var box =document.getElementsByClassName("warp7-box")[0];
    var lists = box.getElementsByClassName("warp7-box-list");
    var icons = box.getElementsByClassName("warp7-icon")
    for(let i=0; i<lists.length; i++) {
        lists[i].classList.add("addWarp7-"+parseInt(i+1));
    }
    for(let i=0; i<icons.length; i++) {
        icons[i].classList.add("addWarp7Icon-"+parseInt(i+1));
    }
}

function warp7Go() {
    var box =document.getElementsByClassName("warp7")[0];
    box.addEventListener("mouseenter", function(){
        warp7Add();
    })
}

warp7Go();

function inputClick() {
    var state = 0;
    var btn = document.getElementsByClassName("input-select")[0];
    var box = document.getElementsByClassName("warp-input-hide-box")[0];
    var input = document.getElementsByClassName("warp-input")[2];
    var lists = document.getElementsByClassName("warp-input-hide-list");
    var hideBox = document.getElementsByClassName("warp-hide-box")[0];
    btn.addEventListener("click", function(){
        if(state == 0) {
            btn.getElementsByTagName("img")[0].style.transform = "rotate(-90deg)";
            box.style.display = "block";
            input.classList.remove("active");
            hideBox.style.display = "none";
            input.getElementsByTagName("input")[0].setAttribute("placeholder","请输入其他联系方式");
            state = 1;
        } else {
            btn.getElementsByTagName("img")[0].style.transform = "rotate(90deg)";
            box.style.display = "none";
            input.classList.remove("active");
            hideBox.style.display = "none";
            input.getElementsByTagName("input")[0].setAttribute("placeholder","请输入其他联系方式");
            state = 0;
        }
    },false)
    for(let i=0,len=lists.length; i<len; i++) {
        lists[i].addEventListener("click",function(){
            input.classList.add("active");
            hideBox.style.display = "block";
            hideBox.innerHTML = lists[i].innerHTML;
            box.style.display = "none";
            btn.getElementsByTagName("img")[0].style.transform = "rotate(90deg)";
            input.getElementsByTagName("input")[0].setAttribute("placeholder","");
            state = 0;
        })
    }
}

inputClick();