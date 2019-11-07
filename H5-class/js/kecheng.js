function goHome() {
    $(".img-btn").eq(0).click(function() {
        window.location.href = "../pages/user.html";
    })
}


function clickHide() {
    $(".inline-img").eq(0).click(function() {
        $(".cover").hide();
    })
    $(".last-btn").eq(0).click(function() {
        $(".cover").hide();
    })
}

function select() {
    var state = 0;
    $(".select-btn").eq(0).click(function() {
        if(state == 0) {
            $(".select-btn").text("√");
            state = 1;
        } else {
            $(".select-btn").text("");
            state = 0;
        }
    })
}

select();

clickHide();

goHome();