function AutoSize(Img, maxWidth, maxHeight) {
    var image = new Image();
    image.src = Img.src;  
    if (image.width < maxWidth&& image.height < maxHeight) {
        Img.width = image.width;
        Img.height = image.height;
    }
    else
    {
        if (maxWidth/ maxHeight  <= image.width / image.height)
        {
            Img.width = maxWidth;
            Img.height = maxWidth* (image.height / image.width);
        } 
        else {
            Img.width = maxHeight  * (image.width / image.height);
            Img.height = maxHeight  ;
        }
    }
}

function changeBannerImg() {
    var img = document.getElementsByClassName("warp-img");
    for(let i=0, len=img.length; i<len; i++) {
        AutoSize(img[i],"100%","100%");
    }
}

window.onload = function() {
    changeBannerImg();
}