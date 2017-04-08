// 程序入口
class GameMain{
    constructor()
    {
        Laya.init(768,1024);
        // Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight);
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
        //调试面板
		// Laya.Stat.show(0,0);
        // Laya.Stat.hide();

         var loadingResArray = [
            {url:"res/atlas/comp.json",type:Laya.Loader.ATLAS}
        ]
        Laya.loader.load(loadingResArray, Laya.Handler.create(this, this.onAssetsLoaded));
    }
    
    onAssetsLoaded():void{
        UIManager.toUI(UIName.GameLoding);
    }
}
new GameMain();