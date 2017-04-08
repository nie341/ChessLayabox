/*
* name;
*/
var NetworkManager = (function () {
    function NetworkManager() {
        this.host = "127.0.0.1";
        this.port = 3010;
        this.initPomelo();
    }
    /**
     * 单例模式
     */
    NetworkManager.getInstance = function () {
        if (NetworkManager._instance == null) {
            NetworkManager._instance = new NetworkManager();
        }
        return NetworkManager._instance;
    };
    /**
     * 初始化Pomelo
     */
    NetworkManager.prototype.initPomelo = function () {
        this.pomelo = new PomeloLaya.Pomelo();
        this.pomelo.on(PomeloLaya.Pomelo.EVENT_IO_ERROR, function (event) {
            //错误处理
            console.error("error", event);
            this.networkStatr = 1 /* ConnectErrot */;
        });
    };
    /**
     * 初始化推送信息
     */
    NetworkManager.prototype.setPushMsg = function (type) {
        this.pomelo.on(type, function (event) {
            //错误处理
            console.error("push msg type:", type, "data:", event);
            SocketEmitter.fire(type, event);
        });
    };
    /**
     * 连接Pomelo
     */
    NetworkManager.prototype.connectPomelo = function () {
        this.pomelo.init({
            host: this.host,
            port: this.port
        }, function (result) {
            //连接成功执行函数
            console.log("link success result:", result);
            this.networkStatr = 0 /* ConnectSuccess */;
        });
    };
    /**
     * 断开链接
     */
    NetworkManager.prototype.disconnectPomelo = function () {
        this.pomelo.disconnect();
    };
    /**
     * 加入房间
     *
     * @param{string} rid 房间id
     * @param{string} username 用户名
     *
     */
    NetworkManager.prototype.onJoin = function (rid, username, callback) {
        var route = 'connector.entryHandler.entry';
        var user = {
            rid: rid,
            username: username
        };
        this.pomelo.request(route, user, function (result) {
            // console.log("request",result);
            callback(result);
        });
    };
    NetworkManager.prototype.onQuit = function (rid, username, callback) {
        var route = 'connector.entryHandler.entry';
        var user = {
            rid: rid,
            username: username
        };
        this.pomelo.request(route, user, function (result) {
            // console.log("request",result);
            callback(result);
        });
    };
    return NetworkManager;
}());
NetworkManager._instance = null;
/**加入房间推送 */
NetworkManager.PUSH_MSG_JOIN = "onJoin";
/**开始游戏 */
NetworkManager.PUSH_MSG_START = "onStart";
//# sourceMappingURL=NetworkManager.js.map