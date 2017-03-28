/*
* name;
*/
class GameData{
    constructor(){

    }
    static _instance = null;
    public roomid:number;
    /**
	 * 单例模式
	 */
	static getInstance() : GameData{
        if (GameData._instance == null){
            GameData._instance = new GameData();
        }
        return GameData._instance;
    }
}