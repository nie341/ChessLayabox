/*
* name;
*/
var Loader = Laya.Loader;
var Browser = Laya.Browser;
var Handler = Laya.Handler;
var ProtobufUtils = (function () {
    function ProtobufUtils() {
        this.ProtoBuf = Browser.window.dcodeIO.ProtoBuf;
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
    ProtobufUtils.prototype.getMessage = function () {
        return this.Message;
    };
    ProtobufUtils.prototype.getMsg = function () {
        return this.Msg;
    };
    ProtobufUtils.prototype.sendLogin = function (username, password) {
        var Message = this.Message;
        var Msg = this.Msg;
        var Request = this.Request;
        var LoginRequest = this.LoginRequest;
        var message = new Message();
        message.set("type", Msg.Login_Request);
        var request = new Request();
        var login = new LoginRequest();
        login.set("username", username);
        login.set("password", password);
        request.set("login", login);
        message.set("request", request);
        var buffer = message.encode().toBuffer();
        return buffer;
    };
    ProtobufUtils.prototype.resLogin = function (message) {
        var userid = message.response.login.userid;
        console.log(userid);
        return userid;
    };
    return ProtobufUtils;
}());
//# sourceMappingURL=ProtobufUtils.js.map