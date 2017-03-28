/*
* name;
*/
class SocketManager{
	constructor(){
        this.initSocket();
    }

    static _instance = null;
	/**iq */
	iq:string = "localhost";
	/**端口 */
	host:number = 8090;
	public socket:Laya.Socket;
    public output;
	public socketState:SocketState;
	public protobufUtils:ProtobufUtils;
	/**
	 * 单例模式
	 */
	static getInstance() : SocketManager{
        if (SocketManager._instance == null){
            SocketManager._instance = new SocketManager();
        }
        return SocketManager._instance;
    }

	getUrl():string{
		var url = "ws://"+this.iq+":"+this.host;
		console.log("url :",url);
		return url;
	}
	/**
	 * 初始化Sokcet
	 */
	initSocket():void{
		this.protobufUtils = new ProtobufUtils();

		this.socket = new Laya.Socket();
        this.socket.endian = Laya.Socket.LITTLE_ENDIAN;
        this.socket.connectByUrl(this.getUrl());
        this.output = this.socket.output;
        this.socket.on(Laya.Event.OPEN, this, this.onSocketOpen);
		this.socket.on(Laya.Event.CLOSE, this, this.onSocketClose);
		this.socket.on(Laya.Event.MESSAGE, this, this.onMessageReveived);
		this.socket.on(Laya.Event.ERROR, this, this.onConnectError);
	}
	/**
	 * 长链接链接
	 */
	onConnect():void{
        this.socket = new Laya.Socket();
        this.socket.endian = Laya.Socket.LITTLE_ENDIAN;
        this.socket.connectByUrl(this.getUrl());
        this.output = this.socket.output;
        this.socket.on(Laya.Event.OPEN, this, this.onSocketOpen);
		this.socket.on(Laya.Event.CLOSE, this, this.onSocketClose);
		this.socket.on(Laya.Event.MESSAGE, this, this.onMessageReveived);
		this.socket.on(Laya.Event.ERROR, this, this.onConnectError);
	}




    onSocketOpen():void{
       console.log("Connected");
	//    console.log(this.socket);
    }
    onSocketClose():void
	{
		console.log("Socket closed");
	}

	onMessageReveived(message):void
	{
		var  protobuf = new ProtobufUtils;
		var Message = protobuf.getMessage();
		var Msg = protobuf.getMsg();
		var msg:any = Message.decode(message);
		console.log("reveived buffer:",msg.type);
		switch (msg.type){
			case Msg.Login_Response:
			var userid = protobuf.resLogin(msg);
			SocketEmitter.fire("socket",userid); 
			break;
		} 
	}

	onConnectError(e):void
	{
		console.log("error:",e);
	}
    sendByte(bytes:any):void{
		this.socket.send(bytes);
    }
	sendLogin(username:string,password:string):void{
		var uid = "test001";
		if(this.socket.connected == false){
			console.log("socket 未连接");
		}
		var buffer:any = this.protobufUtils.sendLogin(username,password);
		console.log("send buffer:",buffer.byteLength);
		this.sendByte(buffer);
	}
}

const enum SocketState{
	/**默认状态 */
	SocketDefault,
	SocketOpen,
	SocketClose,
	SocketError
}