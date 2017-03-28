
class UIManager {
    //ui列表
    public static uiArray:Array<View> = [];
    constructor(){

    }
    //添加ui
    static pushUI(ui:View):void{
        UIManager.uiArray.push(ui);
    }

    static toUI(uiname:UIName):void{
        for(var i = 0 ; i < UIManager.uiArray.length ; i ++){
             UIManager.uiArray[i].removeSelf();
             UIManager.uiArray[i].destroy();
         }
        var ui:View;
        if(uiname == UIName.GameLoding){
            ui = new GameLoading();
            Laya.stage.addChild(ui);
        }else if(uiname == UIName.CreateRoom){
            ui = new CreateRoom();
            Laya.stage.addChild(ui);
        }else if(uiname == UIName.GameRoom){
            ui = new GameRoom();
            Laya.stage.addChild(ui);
        }
        else if(uiname == UIName.Login){
            ui = new Login();
            Laya.stage.addChild(ui);
        }
        if(ui != undefined){
            UIManager.pushUI(ui);
        }
    }
}

const enum UIName {
    Login,
    GameRoom,
    CreateRoom,
    GameLoding

}