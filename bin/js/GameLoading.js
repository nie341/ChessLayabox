var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameLoading = (function (_super) {
    __extends(GameLoading, _super);
    function GameLoading() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    GameLoading.prototype.init = function () {
        this.pb.changeHandler = new Laya.Handler(this, this.onChange);
        var res = [
            { url: "res/protobuf/msgpb.proto" },
            { url: "room_bg.png", type: Laya.Loader.IMAGE },
            { url: "res/atlas/game.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/head.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/cards.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fire.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/chip.json", type: Laya.Loader.ATLAS },
            { url: "sound/fapai.mp3", type: Laya.Loader.SOUND },
            { url: "sound/genzhu.mp3", type: Laya.Loader.SOUND },
            { url: "sound/bipai.mp3", type: Laya.Loader.SOUND },
            { url: "sound/qipai.mp3", type: Laya.Loader.SOUND },
            { url: "sound/kanpai.mp3", type: Laya.Loader.SOUND },
            { url: "sound/jiazhu.mp3", type: Laya.Loader.SOUND },
            { url: "sound/xiazhutip.mp3", type: Laya.Loader.SOUND },
            { url: "sound/xuepin.mp3", type: Laya.Loader.SOUND },
            { url: "sound/chip.mp3", type: Laya.Loader.SOUND },
            { url: "sound/pk.mp3", type: Laya.Loader.SOUND },
        ];
        //设置progress Handler的第4个参数为true，根据加载文件个数获取加载进度
        Laya.loader.load(res, null, Laya.Handler.create(this, this.onProgress, null, false));
    };
    //进度条发生变化的时候触发下面的方法
    GameLoading.prototype.onChange = function (value) {
        //  console.log("进度: "+Math.floor(value*100)+"%");
    };
    GameLoading.prototype.onProgress = function (value) {
        //console.log("加载了总文件的:"+pro*100+"%");
        this.pb.value = value;
        if (this.pb.value == 1) {
            //游戏主页面资源加载完成后执行这里的代码
            //console.log("游戏加载完成咯！！");
            //延迟1秒再显示游戏主页面
            this.pb.value = value;
            this.onLoad();
        }
    };
    //加载完成后的回调函数
    GameLoading.prototype.onLoad = function () {
        // console.log("加载完成");
        SocketManager.getInstance();
        UIManager.toUI(0 /* Login */);
    };
    return GameLoading;
}(ui.gamoloadingUI));
//# sourceMappingURL=GameLoading.js.map