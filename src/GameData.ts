/*
* name;
*/
class GameData{
    constructor(){

    }
    static _instance = null;
    // public roomid:number;
    public users:Array<any>;
    public myuser:string;
    public adduser:any;
    public room:string;
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