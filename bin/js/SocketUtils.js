/*
* name;
*/
var SocketUtils = (function () {
    function SocketUtils() {
        this.messageByte = new Laya.Byte();
        console.log("初始化Sokcet");
        var url = "ws://localhost:8090";
        this.socket = new Laya.Socket();
        this.socket.endian = Laya.Socket.LITTLE_ENDIAN;
        this.socket.connectByUrl(url);
        this.output = this.socket.output;
        this.socket.on(Laya.Event.OPEN, this, this.onSocketOpen);
        this.socket.on(Laya.Event.CLOSE, this, this.onSocketClose);
        this.socket.on(Laya.Event.MESSAGE, this, this.onMessageReveived);
        this.socket.on(Laya.Event.ERROR, this, this.onConnectError);
    }
    SocketUtils.prototype.onSocketOpen = function () {
        console.log("Connected");
        // 发送字符串
        this.socket.send("demonstrate <sendString>");
        // 使用output.writeByte发送
        var message = "demonstrate <output.writeByte>";
        for (var i = 0; i < message.length; ++i) {
            this.output.writeByte(message.charCodeAt(i));
        }
        this.socket.flush();
        this.socket.send("客户端链接成功");
    };
    SocketUtils.prototype.onSocketClose = function () {
        console.log("Socket closed");
    };
    SocketUtils.prototype.onMessageReveived = function (message) {
        // console.log("Message from server:");
        // if (typeof message == "string")
        // {
        // 	console.log(message);
        // }
        // else if (message instanceof ArrayBuffer)
        // {
        // 	console.log(new Laya.Byte(message).readUTFBytes());
        // }
        // this.socket.input.clear();
        this.messageByte.clear();
        this.messageByte.writeArrayBuffer(message);
        this.messageByte.pos = 0;
        console.log(this.messageByte.getUint8());
        console.log(this.messageByte.getUint8());
    };
    SocketUtils.prototype.onConnectError = function (e) {
        console.log("error:", e);
    };
    SocketUtils.prototype.send = function (msg) {
        this.socket.send(msg);
    };
    SocketUtils.prototype.sendByte = function (msg) {
        for (var i = 0; i < msg.length; i++) {
            this.output.writeByte(msg.charCodeAt(i));
        }
        this.socket.flush();
    };
    return SocketUtils;
}());
//# sourceMappingURL=SocketUtils.js.map