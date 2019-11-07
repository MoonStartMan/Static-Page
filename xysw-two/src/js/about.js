var data = [
    {
        title : "关于我们",
        titleEn : "ABOUT US",
        text : "香港鑫悦明珠家居有限公司是专业从事家居定制/品牌加盟为一体家具企业。我们凭借过硬的产品质量，售后服务及综合素质、专业能力强的研发、销售、管理人才，现已成为家具行业中较具有竞争力的企业。香港鑫悦明珠家居有限公司把自身对居家及生活及其客厅生活文化的深厚内涵融入到产品的设计研发中，准确瞄准国内、国际市场产品丰富多彩，做工精细，款式新颖别致，设计紧跟时代潮流。结合市场需求，不断推陈出新，为消费者创造出包含科技、设计领先极具人性化的家居产品 。满足不同顾客的多层次、高位需求。产品畅销全国各地，备受消费者青睐。",
        img : "../images/contarct/wlre.jpg"
    },
    {
        title : "企业文化",
        titleEn : "ENTERPRISE CULTUR",
        text : "一、以人为本。二、人性化设计。三、服务至上，您的满意就是我们最大的动力！",
        img : "../images/contarct/1_a7se.jpg"
    },
    {
        title : "产品优势",
        titleEn : "PRODUCT ADVANTAGES",
        text : "优势一、我们出厂的每一件家具都经过严格的产品合格检测；优势二、老品牌新质量，老价格新享受；优势三、我们的产品种类齐全，可根据不同的用户需求提供多种人性化的解决方案；优势四、我们鑫悦商务人更关注细节，每个细节都体现以人为本的生活理念；简约设计风格，一直立足于高科技的健康睡眠。​",
        img : "../images/contarct/2_bh5l.jpg"
    }
]

function createTem(template){
    for(let i=0; i<template.length; i++) {
        const templateItem = template[i];
        $(".main").append(`
        <div class="tab">
            <div class="title">${templateItem.title}</div>
            <div class="title-en">${templateItem.titleEn}</div>
            <div class="text">${templateItem.text}</div>
            <div class="img-box">
                <img src=${templateItem.img} alt="">
            </div>
        </div>
        `)
    }
}

createTem(data);