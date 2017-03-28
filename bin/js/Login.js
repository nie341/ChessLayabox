var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
* name;
*/
var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super.call(this) || this;
        _this.login.on(Laya.Event.CLICK, _this, _this.onLogin);
        SocketEmitter.register("socket", _this.onResponse, _this);
        return _this;
    }
    Login.prototype.onLogin = function (e) {
        var user = this.user.text;
        var pwd = this.pwd.text;
        console.log("user", user, "pwd", pwd);
        var socket = SocketManager.getInstance();
        socket.sendLogin(user, pwd);
    };
    Login.prototype.onResponse = function (eventName, userid) {
        console.log(eventName, userid);
        UIManager.toUI(2 /* CreateRoom */);
    };
    return Login;
}(ui.loginUI));
//# sourceMappingURL=Login.js.map