function animation(){
    var box = document.getElementsByClassName('box');
    for(let i=0; i<box.length; i++) {
        box[i].classList.remove('bigger');
    }
    var num= Math.floor((Math.random()*5));
    
    box[num].classList.add('bigger');
}

animation();
setInterval(animation,2000);