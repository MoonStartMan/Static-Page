function big(){
    var box = document.getElementsByClassName('box');
    for(let i=0; i<box.length; i++) {
        box[i].classList.remove('bigger');
    }
    var num= Math.floor((Math.random()*5));
    box[num].classList.add('bigger');
}

big();
setInterval(big,2000);