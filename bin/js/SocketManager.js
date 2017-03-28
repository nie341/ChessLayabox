/*
* name;
*/
var SocketManager = (function () {
    function SocketManager() {
        /**iq */
        this.iq = "localhost";
        /**端口 */
        this.host = 8090;
        this.initSocket();
    }
    /**
     * 单例模式
     */
    SocketManager.getInstance = function () {
        if (SocketManager._instance == null) {
            SocketManager._instance = new SocketManager();
        }
        return SocketManager._instance;
    };
    SocketManager.prototype.getUrl = function () {
        var url = "ws://" + this.iq + ":" + this.host;
        console.log("url :", url);
        return url;
    };
    /**
     * 初始化Sokcet
     */
    SocketManager.prototype.initSocket = function () {
        this.protobufUtils = new ProtobufUtils();
        this.socket = new Laya.Socket();
        this.socket.endian = Laya.Socket.LITTLE_ENDIAN;
        this.socket.connectByUrl(this.getUrl());
        this.output = this.socket.output;
        this.socket.on(Laya.Event.OPEN, this, this.onSocketOpen);
        this.socket.on(Laya.Event.CLOSE, this, this.onSocketClose);
        this.socket.on(Laya.Event.MESSAGE, this, this.onMessageReveived);
        this.socket.on(Laya.Event.ERROR, this, this.onConnectError);
    };
    /**
     * 长链接链接
     */
    SocketManager.prototype.onConnect = function () {
        this.socket = new Laya.Socket();
        this.socket.endian = Laya.Socket.LITTLE_ENDIAN;
        this.socket.connectByUrl(this.getUrl());
        this.output = this.socket.output;
        this.socket.on(Laya.Event.OPEN, this, this.onSocketOpen);
        this.socket.on(Laya.Event.CLOSE, this, this.onSocketClose);
        this.socket.on(Laya.Event.MESSAGE, this, this.onMessageReveived);
        this.socket.on(Laya.Event.ERROR, this, this.onConnectError);
    };
    SocketManager.prototype.onSocketOpen = function () {
        console.log("Connected");
        //    console.log(this.socket);
    };
    SocketManager.prototype.onSocketClose = function () {
        console.log("Socket closed");
    };
    SocketManager.prototype.onMessageReveived = function (message) {
        var protobuf = new ProtobufUtils;
        var Message = protobuf.getMessage();
        var Msg = protobuf.getMsg();
        var msg = Message.decode(message);
        console.log("reveived buffer:", msg.type);
        switch (msg.type) {
            case Msg.Login_Response:
                var userid = protobuf.resLogin(msg);
                SocketEmitter.fire("socket", userid);
                break;
        }
    };
    SocketManager.prototype.onConnectError = function (e) {
        console.log("error:", e);
    };
    SocketManager.prototype.sendByte = function (bytes) {
        this.socket.send(bytes);
    };
    SocketManager.prototype.sendLogin = function (username, password) {
        var uid = "test001";
        if (this.socket.connected == false) {
            console.log("socket 未连接");
        }
        var buffer = this.protobufUtils.sendLogin(username, password);
        console.log("send buffer:", buffer.byteLength);
        this.sendByte(buffer);
    };
    return SocketManager;
}());
SocketManager._instance = null;
//# sourceMappingURL=SocketManager.js.map