var UIManager = (function () {
    function UIManager() {
    }
    //添加ui
    UIManager.pushUI = function (ui) {
        UIManager.uiArray.push(ui);
    };
    UIManager.toUI = function (uiname) {
        for (var i = 0; i < UIManager.uiArray.length; i++) {
            UIManager.uiArray[i].removeSelf();
            UIManager.uiArray[i].destroy();
        }
        var ui;
        if (uiname == 3 /* GameLoding */) {
            ui = new GameLoading();
            Laya.stage.addChild(ui);
        }
        else if (uiname == 2 /* CreateRoom */) {
            ui = new CreateRoom();
            Laya.stage.addChild(ui);
        }
        else if (uiname == 1 /* GameRoom */) {
            ui = new GameRoom();
            Laya.stage.addChild(ui);
        }
        else if (uiname == 0 /* Login */) {
            ui = new Login();
            Laya.stage.addChild(ui);
        }
        if (ui != undefined) {
            UIManager.pushUI(ui);
        }
    };
    return UIManager;
}());
//ui列表
UIManager.uiArray = [];
//# sourceMappingURL=UIManager.js.map