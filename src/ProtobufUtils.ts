/*
* name;
*/
import Loader = Laya.Loader;
import Browser = Laya.Browser;
import Handler = Laya.Handler;
class ProtobufUtils{
	private ProtoBuf:any = Browser.window.dcodeIO.ProtoBuf;
	private Message:any;
	private Msg:any;
	private Request:any;
	private LoginRequest:any;
    constructor(){
		var data = Laya.loader.getRes("res/protobuf/msgpb.proto").toString();
		var Message = this.ProtoBuf.loadProto(data).build('sbb.Message');
		var Msg = this.ProtoBuf.loadProto(data).build('sbb.MSG');
		var Request = this.ProtoBuf.loadProto(data).build('sbb.Request');
		var LoginRequest = this.ProtoBuf.loadProto(data).build('sbb.LoginRequest');
		this.Message = Message;
		this.Msg = Msg;
		this.Request = Request;
		this.LoginRequest = LoginRequest;
		// console.log(Message);
		// var SendMsg:any = this.ProtoBuf.loadProto(data).build('sbb.SendMsg');
		// this.SendMsg = SendMsg;
		// var ResMsg:any = this.ProtoBuf.loadProto(data).build('sbb.ResMsg');
		// this.ResMsg = ResMsg;
	}

	getMessage():any{
		return this.Message;
	}
	getMsg():any{
		return this.Msg;
	}
	sendLogin(username:string,password:string):Buffer{
		var Message = this.Message;
		var Msg = this.Msg;
		var Request = this.Request;
		var LoginRequest = this.LoginRequest;
		var message:any = new Message();
		message.set("type",Msg.Login_Request); 
		var request = new Request();
		var login = new LoginRequest();
		login.set("username",username);
		login.set("password",password);
		request.set("login",login);
		message.set("request",request);
		var buffer:any = message.encode().toBuffer();
		return buffer;
	}
	resLogin(message:any):any{
		var userid = message.response.login.userid;
		console.log(userid);
		return userid;
	}
}