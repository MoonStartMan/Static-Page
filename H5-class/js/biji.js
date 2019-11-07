function createItem(template) {
    var templateItem;
    for(let i=0; i<template.length; i++) {
        templateItem = template[i];
        $(".con-biji-lists").append(
            `
            <div class="con-biji-list">
                <div class="con-biji-list-top">${templateItem.text1}</div>
                <div class="con-biji-list-bottom">${templateItem.text2}</div>
            </div>
            `
        )
    }
}

var data = [
    {
        text1: "3、universal probe library在线引物设计",
        text2: "笔记内容：universal probe libray在线"
    },
    {
        text1: "2、3分钟学会引物设计",
        text2: "笔记内容: 3分钟学会引物设计"
    },
    {
        text1: "1、一网打尽所有引物设计方法",
        text2: "笔记内容: 一网打尽所有引物设计方法"
    }
]

createItem(data);