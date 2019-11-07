var data = [
    {
        src : "../images/mobile/1.png"
    },
    {
        src : "../images/mobile/2.png"
    },
    {
        src : "../images/mobile/3.png"
    },
    {
        src : "../images/mobile/4.png"
    },
    {
        src : "../images/mobile/5.png"
    },
    {
        src : "../images/mobile/6.png"
    },
    {
        src : "../images/mobile/7.png"
    },
]

function createTem(template){
    for(let i=0; i<template.length; i++) {
        const templateItem = template[i];
        $(".main").append(`
        <div class="tab-box">
            <img src=${templateItem.src} alt="">
        </div>
        `)
    }
}

createTem(data);