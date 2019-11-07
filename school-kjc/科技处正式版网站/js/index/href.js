function goAnother() {
    var box = document.getElementsByClassName("content2-cantaier");
    box[6].addEventListener("click", function(){
        window.location.href = "award.html";
    })
}

goAnother();