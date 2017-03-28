/*
* name;
*/
var GameData = (function () {
    function GameData() {
    }
    /**
     * 单例模式
     */
    GameData.getInstance = function () {
        if (GameData._instance == null) {
            GameData._instance = new GameData();
        }
        return GameData._instance;
    };
    return GameData;
}());
GameData._instance = null;
//# sourceMappingURL=GameData.js.map