function goDelect() {
    var btn = document.getElementsByClassName("remove-box")[0];
    btn.addEventListener("click", function() {
        window.location.href = "../pages/delete/delete.html?management";
    })
}

goDelect();