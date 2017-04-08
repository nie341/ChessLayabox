/*
* name;
*/
class NetworkManager{
    static _instance = null;
    private pomelo:PomeloLaya.Pomelo;
    private host = "127.0.0.1";
    private port = 3010;
    public networkState:NetworkState;

    /**加入房间推送 */
    static PUSH_MSG_JOIN:string = "onJoin";
    /**开始游戏 */
    static PUSH_MSG_START:string = "onStart";
    /**
	 * 单例模式
	 */
	static getInstance() : NetworkManager{
        if (NetworkManager._instance == null){
            NetworkManager._instance = new NetworkManager();
        }
        return NetworkManager._instance;
    }

    constructor(){
        this.initPomelo();
    }
    /**
     * 初始化Pomelo
     */
    initPomelo():void{
        this.pomelo = new PomeloLaya.Pomelo();
        this.pomelo.on(PomeloLaya.Pomelo.EVENT_IO_ERROR, function(event){
            //错误处理
            console.error("error",event);
            this.networkStatr = NetworkState.ConnectErrot;
        });
    }
    /**
     * 初始化推送信息
     */
    setPushMsg(type:string):void{
        this.pomelo.on(type, function(event){
            //错误处理
            console.error("push msg type:",type,"data:",event);
            SocketEmitter.fire(type,event); 
        });
    }
    /**
     * 连接Pomelo
     */
    connectPomelo():void{
        this.pomelo.init({
            host: this.host,
            port: this.port
        }, function (result) {
            //连接成功执行函数
            console.log("link success result:",result);
            this.networkStatr = NetworkState.ConnectSuccess;
        });
    }
    /**
     * 断开链接
     */
    disconnectPomelo():void{
        this.pomelo.disconnect();
    }
    /**
     * 加入房间
     * 
     * @param{string} rid 房间id
     * @param{string} username 用户名
     * 
     */
    onJoin(rid:string,username:string,callback:any):void{
        var route = 'connector.entryHandler.entry';
        var user = {
        rid:rid,
        username:username 
        };
        this.pomelo.request(route,user, function (result) {
        // console.log("request",result);
        callback(result);
        });
    }
    onQuit(rid:string,username:string,callback:any):void{
        var route = 'connector.entryHandler.entry';
        var user = {
        rid:rid,
        username:username 
        };
        this.pomelo.request(route,user, function (result) {
        // console.log("request",result);
        callback(result);
        });
    }
}

const enum NetworkState{
    ConnectSuccess,
    ConnectErrot
}