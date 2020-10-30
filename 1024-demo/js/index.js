var textArray = [
    "呀！你点进来了啊？",
    "嘻嘻，工作再忙也要对自己好点呀！",
    "你写的每一行代码，都是改变世界的能量！所以，你很厉害哟！",
    "对了对了，祝你...",
    "写的代码像你（男）女朋友一样好看！",
    "写的界面和你本人一样精致！",
    "而且呀，你的发量会越来越多的！",
    "最后,祝你"
];

var contentDom = document.getElementsByClassName("text-cover")[0];
timeCount = 0,
    addTimer = setInterval(function () {
        if (timeCount == textArray.length) {
            clearInterval(addTimer);
            var btn = document.createElement("button");
            btn.className = "text-cover-btn";
            btn.innerHTML = "查看祝福";
            contentDom.appendChild(btn);
            btn.addEventListener("click", function () {
                contentDom.style.display = "none";
                document.getElementById("container").style.display = "block";
                textShow();
            })
            return;
        }
        var dom = document.createElement("div")
        dom.className = "text-list";
        dom.innerHTML = textArray[timeCount];
        contentDom.appendChild(dom)
        timeCount++
    }, 2000);

function textShow() {
    var contentArray = [
        "编码间,BUG灰飞烟灭!",
        "联调间,一个问题也没有!",
        "你就是程序员中的爱因斯坦!",
        "1024程序员节快乐!",
        "编码间,BUG灰飞烟灭!",
        "联调间,一个问题也没有!",
        "你就是程序员中的爱因斯坦!",
        "1024程序员节快乐!",
        "编码间,BUG灰飞烟灭!",
        "联调间,一个问题也没有!",
        "你就是程序员中的爱因斯坦!",
        "1024程序员节快乐!",
        "编码间,BUG灰飞烟灭!",
        "联调间,一个问题也没有!",
        "你就是程序员中的爱因斯坦!",
        "1024程序员节快乐!",
        "编码间,BUG灰飞烟灭!",
        "联调间,一个问题也没有!",
        "你就是程序员中的爱因斯坦!",
        "1024程序员节快乐!",
        "编码间,BUG灰飞烟灭!",
        "联调间,一个问题也没有!",
        "你就是程序员中的爱因斯坦!",
        "1024程序员节快乐!",
        ];
        var barrageWall={
            container:null,//容器选择器
            barrageLen:null,//弹幕的条数
            lastElem:0,//弹幕出现的位置
            overlapElem:-1,//如果大于0则表示每条弹幕轨道上都有弹幕未全部出现，需要重叠定位在弹幕轨道上
            barrage:[],//弹幕墙
            barrageOffset:[],//弹幕墙上最后一条弹幕的偏移量
            init:function(option){
                if(option.container===undefined){
                    console.error("必须指定 container 属性，container为弹幕容器的选择器");
                    return false;
                }
                if(option.barrageLen===undefined){
                    console.error("必须指定 barrageLen 属性，barrageLen为弹幕轨道的数");
                    return false;
                }
                this.container=option.container;
                this.barrageLen=option.barrageLen;
        
                for(var i=0;i<this.barrageLen;i++){//建立弹幕墙，此处的循环次数为当前页面运行的弹幕行数
                    this.barrage[i]=new Array();
                }
            },
            upWall:function(txt){//弹幕上墙
                if(!this.barrageLen&&this.container){
                    console.error("未检测到container和barrageLen属性，请先初始化弹幕墙并指定container和barrageLen属性");
                    return false;
                }
        
                this.positionWall();//从上至下找出每条弹幕轨道上最后一条弹幕移动的位置
                var elem = $('<div></div>')//创建元素
                .addClass('list')//添加样式
                .css("top",this.lastElem*(38/16)+"rem")//定位
                .html(txt)//添加内容
                .appendTo(this.container);//追加在父元素后面
                this.barrage[this.lastElem].push(elem);//追加在数组中
                setTimeout(function(){//200ms防止元素动画不执行
                    elem.addClass("animate");
                },200);
        
                setTimeout(function(){//25s后动画执行完毕，从数组和页面中移除
                    for(var i=0;i<this.barrage.length;i++){
                        for(var x=0;x<this.barrage[i].length;x++){
                            if(this.barrage[i][x]===elem){
                                this.barrage[i].splice(x,1);
                                break;
                            }
                        }
                    }
                    elem.remove();
                }.bind(this),25000);
            },
            positionWall: function () {
                for(var i=0;i<=this.barrage.length;i++){//从上至下找出每条弹幕轨道上最后一条弹幕移动的位置
                    if(i===this.barrage.length){//每条弹幕轨道上都有弹幕未全部出现的情况
                        this.minOffset();//弹幕墙上所有的位置都有弹幕且都未出现完毕时，找出他们当中完全最先的那个
                    }else{//若有某个最后一条弹幕已经全部出现
                        if(this.afterOffset(i))break;//找到弹幕出现的位置，找到则退出循环
                    }
                }
            },
            minOffset: function (){//找出所有弹幕轨道上最后一个弹幕中最先出现的那个（偏移量减去自身宽度）
                var minOffset=0;
                for(var x=0;x<this.barrage.length;x++){
                    var elem=this.barrage[x][this.barrage[x].length-1];//获取当前弹幕轨道上最后一条弹幕
                    var aboveWidth=elem.width();//获取它的宽度
                    var matrix=elem.css('transform');//获取它的矩阵值
                    this.barrageOffset[x]=matrix==="none"?-aboveWidth:-parseInt(matrix.split(",")[4])-aboveWidth;//matrix为none则弹幕translateX为0
                    minOffset=this.barrageOffset[x] > this.barrageOffset[minOffset]?x:minOffset;//找到最先出现的弹幕
                }
                this.lastElem=minOffset;
            },
            afterOffset: function (i){//找到弹幕出现的位置
                if(this.barrage[i].length===0){//为true则表示当前弹幕轨道没有弹幕，则当前弹幕放在改轨道上
                    this.lastElem=i;
                    this.overlapElem=-1;
                    return true;
                }else{//当前弹幕轨道上有弹幕
                    var elem=this.barrage[i][this.barrage[i].length-1];//获取当前弹幕轨道上最后一条弹幕
                    var aboveWidth=elem.width();//获取它的宽度
                    var matrix=elem.css('transform');//获取它的矩阵值
                    if(matrix!=="none"){
                        var aboveTransform=parseInt(matrix.split(",")[4]);//取出最后一条弹幕的矩阵值中X轴的偏移量，即translateX
                        if(-aboveTransform-aboveWidth>50){//50为间隔 为true则表示当前弹幕轨道上最后一条弹幕已经全部出现，则当前弹幕放在改轨道上
                            this.lastElem=i;
                            this.overlapElem=-1;
                            return true;
                        }
                    }
                }
                return false;
            }
        }

        var option = {
            container: "#container",
            barrageLen: contentArray.length
        }
        barrageWall.init(option);//初始化弹幕墙
        
        var index = 0 ;
        for(let i=0; i<contentArray.length; i++) {
            barrageWall.upWall(contentArray[i]);
        }
        var timer = setInterval(function() {
            for(let i=0; i<contentArray.length; i++) {
                barrageWall.upWall(contentArray[i]);
            }
            index++;
            if(index > 4) {
                clearInterval(timer);
                lastShow();
            }
        }, 2000)
}

function lastShow() {
    let canvas, ctx, w, h, thunder, text, particles;

    function Thunder(options) {
        options = options || {};
        this.lifespan = options.lifespan || Math.round(Math.random() * 10 + 10);
        this.maxlife = this.lifespan;
        this.color = options.color || '#fefefe';
        this.glow = options.glow || '#2323fe';
        this.x = options.x || Math.random() * w;
        this.y = options.y || Math.random() * h;
        this.width = options.width || 2;
        this.direct = options.direct || Math.random() * Math.PI * 2;
        this.max = options.max || Math.round(Math.random() * 10 + 20);
        this.segments = [...new Array(this.max)].map(() => {
            return {
                direct: this.direct + (Math.PI * Math.random() * 0.2 - 0.1),
                length: Math.random() * 20 + 80,
                change: Math.random() * 0.04 - 0.02
            };
        });

        this.update = function (index, array) {
            this.segments.forEach(s => {
                (s.direct += s.change) && Math.random() > 0.96 && (s.change *= -1)
            });
            (this.lifespan > 0 && this.lifespan--) || this.remove(index, array);
        }

        this.render = function (ctx) {
            if (this.lifespan <= 0) return;
            ctx.beginPath();
            ctx.globalAlpha = this.lifespan / this.maxlife;
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.width;
            ctx.shadowBlur = 32;
            ctx.shadowColor = this.glow;
            ctx.moveTo(this.x, this.y);
            let prev = {
                x: this.x,
                y: this.y
            };
            this.segments.forEach(s => {
                const x = prev.x + Math.cos(s.direct) * s.length;
                const y = prev.y + Math.sin(s.direct) * s.length;
                prev = {
                    x: x,
                    y: y
                };
                ctx.lineTo(x, y);
            });
            ctx.stroke();
            ctx.closePath();
            ctx.shadowBlur = 0;
            const strength = Math.random() * 80 + 40;
            const light = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, strength);
            light.addColorStop(0, 'rgba(250, 200, 50, 0.6)');
            light.addColorStop(0.1, 'rgba(250, 200, 50, 0.2)');
            light.addColorStop(0.4, 'rgba(250, 200, 50, 0.06)');
            light.addColorStop(0.65, 'rgba(250, 200, 50, 0.01)');
            light.addColorStop(0.8, 'rgba(250, 200, 50, 0)');
            ctx.beginPath();
            ctx.fillStyle = light;
            ctx.arc(this.x, this.y, strength, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }

        this.remove = function (index, array) {
            array.splice(index, 1);
        }
    }

    function Spark(options) {
        options = options || {};
        this.x = options.x || w * 0.5;
        this.y = options.y || h * 0.5;
        this.v = options.v || {
            direct: Math.random() * Math.PI * 2,
            weight: Math.random() * 14 + 2,
            friction: 0.88
        };
        this.a = options.a || {
            change: Math.random() * 0.4 - 0.2,
            min: this.v.direct - Math.PI * 0.4,
            max: this.v.direct + Math.PI * 0.4
        };
        this.g = options.g || {
            direct: Math.PI * 0.5 + (Math.random() * 0.4 - 0.2),
            weight: Math.random() * 0.25 + 0.25
        };
        this.width = options.width || Math.random() * 3;
        this.lifespan = options.lifespan || Math.round(Math.random() * 20 + 40);
        this.maxlife = this.lifespan;
        this.color = options.color || '#feca32';
        this.prev = {
            x: this.x,
            y: this.y
        };

        this.update = function (index, array) {
            this.prev = {
                x: this.x,
                y: this.y
            };
            this.x += Math.cos(this.v.direct) * this.v.weight;
            this.x += Math.cos(this.g.direct) * this.g.weight;
            this.y += Math.sin(this.v.direct) * this.v.weight;
            this.y += Math.sin(this.g.direct) * this.g.weight;
            this.v.weight > 0.2 && (this.v.weight *= this.v.friction);
            this.v.direct += this.a.change;
            (this.v.direct > this.a.max || this.v.direct < this.a.min) && (this.a.change *= -1);
            this.lifespan > 0 && this.lifespan--;
            this.lifespan <= 0 && this.remove(index, array);
        }

        this.render = function (ctx) {
            if (this.lifespan <= 0) return;
            ctx.beginPath();
            ctx.globalAlpha = this.lifespan / this.maxlife;
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.width;
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.prev.x, this.prev.y);
            ctx.stroke();
            ctx.closePath();
        }

        this.remove = function (index, array) {
            array.splice(index, 1);
        }
    }

    function Particles(options) {
        options = options || {};
        this.max = options.max || Math.round(Math.random() * 10 + 10);
        this.sparks = [...new Array(this.max)].map(() => new Spark(options));

        this.update = function () {
            this.sparks.forEach((s, i) => s.update(i, this.sparks));
        }

        this.render = function (ctx) {
            this.sparks.forEach(s => s.render(ctx));
        }
    }

    function Text(options) {
        options = options || {};
        const pool = document.createElement('canvas');
        const buffer = pool.getContext('2d');
        pool.width = w;
        buffer.fillStyle = '#000000';
        buffer.fillRect(0, 0, pool.width, pool.height);

        this.size = options.size || 50;
        this.copy = (options.copy || `Hello!`) + ' ';
        this.color = options.color || '#cd96fe';
        this.delay = options.delay || 5;
        this.basedelay = this.delay;
        buffer.font = `${this.size}px Comic Sans MS`;
        this.bound = buffer.measureText(this.copy);
        this.bound.height = this.size * 1.5;
        this.x = options.x || w * 0.5 - this.bound.width * 0.5;
        this.y = options.y || h * 0.5 - this.size * 0.5;

        buffer.strokeStyle = this.color;
        buffer.strokeText(this.copy, 0, this.bound.height * 0.8);
        this.data = buffer.getImageData(0, 0, this.bound.width, this.bound.height);
        this.index = 0;

        this.update = function () {
            if (this.index >= this.bound.width) {
                this.index = 0;
                return;
            }
            const data = this.data.data;
            for (let i = this.index * 4; i < data.length; i += (4 * this.data.width)) {
                const bitmap = data[i] + data[i + 1] + data[i + 2] + data[i + 3];
                if (bitmap > 255 && Math.random() > 0.96) {
                    const x = this.x + this.index;
                    const y = this.y + (i / this.bound.width / 4);
                    thunder.push(new Thunder({
                        x: x,
                        y: y
                    }));
                    Math.random() > 0.5 && particles.push(new Particles({
                        x: x,
                        y: y
                    }));
                }
            }
            if (this.delay-- < 0) {
                this.index++;
                this.delay += this.basedelay;
            }
        }

        this.render = function (ctx) {
            ctx.putImageData(this.data, this.x, this.y, 0, 0, this.index, this.bound.height);
        }
    }

    function loop() {
        update();
        render();
        requestAnimationFrame(loop);
    }

    function update() {
        text.update();
        thunder.forEach((l, i) => l.update(i, thunder));
        particles.forEach(p => p.update());
    }

    function render() {
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, w, h);
        //
        ctx.globalCompositeOperation = 'screen';
        text.render(ctx);
        thunder.forEach(l => l.render(ctx));
        particles.forEach(p => p.render(ctx));
    }

    (function () {
        //
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;
        thunder = [];
        particles = [];
        //
        text = new Text({
            copy: '1024 节日快乐'
        });
        canvas.addEventListener('click', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            thunder.push(new Thunder({
                x: x,
                y: y
            }));
            particles.push(new Particles({
                x: x,
                y: y
            }));
        });
        let cb = 0;
        //
        loop();
    })()
}