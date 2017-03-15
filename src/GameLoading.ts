
class GameLoading extends ui.gamoloadingUI{
    constructor(){
        super();
        this.init();
    }
    init():void{
        this.pb.changeHandler = new Laya.Handler(this,this.onChange);
        var res:Array<any> = [ 
            {url:"room_bg.png",type:Laya.Loader.IMAGE},
            {url:"res/atlas/game.json",type:Laya.Loader.ATLAS},
            {url:"res/atlas/head.json",type:Laya.Loader.ATLAS},
            {url:"res/atlas/cards.json",type:Laya.Loader.ATLAS},    
            {url:"res/atlas/fire.json",type:Laya.Loader.ATLAS}, 
            {url:"res/atlas/chip.json",type:Laya.Loader.ATLAS},  
            {url:"sound/fapai.mp3",type:Laya.Loader.SOUND}, 
            {url:"sound/genzhu.mp3",type:Laya.Loader.SOUND},
            {url:"sound/bipai.mp3",type:Laya.Loader.SOUND},
            {url:"sound/qipai.mp3",type:Laya.Loader.SOUND}, 
            {url:"sound/kanpai.mp3",type:Laya.Loader.SOUND},
            {url:"sound/jiazhu.mp3",type:Laya.Loader.SOUND},
            {url:"sound/xiazhutip.mp3",type:Laya.Loader.SOUND},
            {url:"sound/xuepin.mp3",type:Laya.Loader.SOUND},
            {url:"sound/chip.mp3",type:Laya.Loader.SOUND},
            {url:"sound/pk.mp3",type:Laya.Loader.SOUND},
                ];

          //设置progress Handler的第4个参数为true，根据加载文件个数获取加载进度
          Laya.loader.load(res,null,Laya.Handler.create(this,this.onProgress,null,false));
    }
    //进度条发生变化的时候触发下面的方法
    onChange(value:number):void{
    //  console.log("进度: "+Math.floor(value*100)+"%");
    }
    onProgress(value:number):void{
       //console.log("加载了总文件的:"+pro*100+"%");
            this.pb.value=value;
            if(this.pb.value==1)
            {
                //游戏主页面资源加载完成后执行这里的代码
                //console.log("游戏加载完成咯！！");
                //延迟1秒再显示游戏主页面
                this.pb.value=value;
                this.onLoad(); 
            }
    }
    //加载完成后的回调函数
    onLoad():void{
        // console.log("加载完成");
        UIManager.toUI("gameroom");
    }
}