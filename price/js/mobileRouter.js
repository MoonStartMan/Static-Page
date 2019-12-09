// 移动端端点击跳转
function clickRouter() {
    var lists = document.getElementsByClassName("swiper-list"); //获取每个列表
    for(let i=0; i<lists.length; i++) {
        lists[i].onclick = function() { //  每个列表点击跳转函数
            switch(i) { //  判断第几个点击跳转第几个
                case 0: window.open("http://zhangdong.ssc.sx/netyulecheng7_0/"); break; //企业网站
                case 1: window.open("http://zhangdong.ssc.sx/netyulecheng7_0/"); break; //商城网站
                case 2: window.open("http://zhangdong.ssc.sx/netyulecheng7_0/"); break; //业务网站
                case 3: window.open("http://zhangdong.ssc.sx/netyulecheng7_0/"); break; //娱乐网站
                case 4: window.open("http://zhangdong.ssc.sx/netyulecheng7_0/"); break; //棋牌网站
                case 5: window.open("http://zhangdong.ssc.sx/netyulecheng7_0/"); break; //彩票网站
                case 6: window.open("http://zhangdong.ssc.sx/netyulecheng7_0/"); break; //租赁网站
                case 7: window.open("http://zhangdong.ssc.sx/netyulecheng7_0/"); break; //视频打赏APP
                case 8: window.open("http://zhangdong.ssc.sx/netyulecheng7_0/"); break; //直播APP
                case 9: window.open("http://zhangdong.ssc.sx/netyulecheng7_0/"); break; //借贷P2P系统
                case 10: window.open("http://zhangdong.ssc.sx/netyulecheng7_0/"); break; //区块链系统
                case 11: window.open("http://zhangdong.ssc.sx/netyulecheng7_0/"); break; //数字货币系统
                case 12: window.open("http://zhangdong.ssc.sx/netyulecheng7_0/"); break; //矿机系统
                case 13: window.open("http://zhangdong.ssc.sx/netyulecheng7_0/"); break; //服务器安全运维
                case 14: window.open("http://zhangdong.ssc.sx/netyulecheng7_0/"); break; //网站安全运维
            }
        }
    }
}

clickRouter();