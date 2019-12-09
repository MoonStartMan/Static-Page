var dataLists = [
    {
        img: "../img/1.png",
        title: "系统定制/网站开发",
        text: "CP,QP,JR,YLC等系统定制！",
    },
    {
        img: "../img/3.png",
        title: "定制全新微信公众号",
        text: "可用于微信登录，开发网页等用途",
    },
    {
        img: "../img/5.png",
        title: "抖音号认证",
        text: "抖音开店企业认证开通蓝V，抖音发布60秒视频",
    },
    {
        img: "../img/6.png",
        title: "抖音大量真实刷粉",
        text: "抖音关注，抖音评论，抖音上热门，抖音点赞",
    },
    {
        img: "../img/9.png",
        title: "备案域名",
        text: "域名带备案+已备案域名出售，精品靓域名出售",
    },
    {
        img: "../img/11.png",
        title: "原生支付宝支付账户",
        text: "原生支付宝API回调签约，已认证/代认证",
    },
    {
        img: "../img/12.png",
        title: "银行卡三件套",
        text: "银行卡，U盾，绑定手机",
    },
    {
        img: "../img/13.png",
        title: "实名微信",
        text: "已经通过银行卡实名认证过的微信",
    },
    {
        img: "../img/16.png",
        title: "网站入侵",
        text: "不是所有网站都能入侵，成功率一般都在50%",
    },
    {
        img: "../img/7.png",
        title: "苹果APP证书签名",
        text: "苹果证书签名，IPA，ios，网站页打包app，掉了秒补",
    },
    {
        img: "../img/8.png",
        title: "微信不死二级子域名",
        text: "什么是微信不死域名：主域名被封，子域名不会被封，这就叫微信不死域名",
    },
    {
        img: "../img/10.png",
        title: "SSL通配符收费证书",
        text: "支持通配符，对网站性能好，速度快，防劫持+防黑客，稳定好用，美国知名原厂证书",
    },
    {
        img: "../img/17.png",
        title: "155555S手机靓号",
        text: "号码段：155555XXXXX，每月0套餐资费，可开无限流量",
    },
    {
        img: "../img/15.png",
        title: "网站劫持",
        text: "支持通杀：指定地区，指定网址，随机扫描，只要不是钱砸出来的网站，几乎神挡杀神佛挡杀佛！",
    },
    {
        img: "../img/18.png",
        title: "挖源码",
        text: "无论您要什么源码，我们都能给您挖出来，挖不出就搞，实在搞不到就做，吃这碗饭靠的就是实力",
    },
    {
        img: "../img/14.png",
        title: "SEO关键词排名",
        text: "1. 真实流量，拒绝代理IP；2.支持刷百度排名，效果突出，助你轻松上首页；3.刷电商人气，淘宝、天猫、京东、苏宁等绝大多数电商平台店铺刷人气；3. 真实有效，基于网络互访原理，用户随机性，完全模拟鼠标和键盘操作。",
    },
    {
        img: "../img/2.png",
        title: "不死防御服务器",
        text: "香港服务器CN2+2T不死防御,速度与防御同时拥有。1.香港/美国;2.移动/联通/电信，BGP/三网直连/CN2=1000M带宽;3.2T不死防御/打死退款;4.SSD固态盘;5.不限内容;7.安全稳定快速，质量保证,不满意全额退款！",
    },
    {
        img: "../img/4.png",
        title: "代办个体/公司执照",
        text: "1、个体执照：身份证正反面照片即可 法人不到场; 2、公司执照：地址挂靠+4章+对公户+法人不到场.",
    },
]

function swiper() {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1.6,
        centeredSlides: true,
        spaceBetween : 30,
    })
}

function createTemplate(template) {
    for(let i=0; i<template.length; i++) {
        var templateItem = template[i]
        $(".swiper-wrapper").append(
            `
            <div class="swiper-slide">
                <div class="icon-img">
                    <img src="${templateItem.img}" alt="">
                </div>
                <div class="sell-title">${templateItem.title}</div>
                <div class="sell-text">${templateItem.text}</div>
            </div>
            `
        )
        swiper();
    }
}

createTemplate(dataLists);