
class UIManager {
    //ui列表
    public static uiArray:Array<View> = [];
    constructor(){

    }
    //添加ui
    static pushUI(ui:View):void{
        UIManager.uiArray.push(ui);
    }

    static toUI(uiname:string):void{
        for(var i = 0 ; i < UIManager.uiArray.length ; i ++){
             UIManager.uiArray[i].removeSelf();
             UIManager.uiArray[i].destroy();
         }
        var ui:View;
        if(uiname == "gameloading"){
            ui = new GameLoading();
            Laya.stage.addChild(ui);
        }else if(uiname == "gameroom"){
            ui = new GameRoom();
            Laya.stage.addChild(ui);
        }
        if(ui != undefined){
            UIManager.pushUI(ui);
        }
    }
}