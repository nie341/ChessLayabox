/*
* name;
*/
class Login extends ui.loginUI{
    constructor(){
        super();
        this.login.on(Laya.Event.CLICK,this,this.onLogin)
        SocketEmitter.register("socket", this.onResponse, this); 
    }
    onLogin(e:Laya.Event):void{
        var user = this.user.text;
        var pwd = this.pwd.text;
        console.log("user",user,"pwd",pwd);
        var socket = SocketManager.getInstance();
        socket.sendLogin(user,pwd);
    }
    onResponse(eventName:string,userid:number):void{  
        console.log(eventName, userid);  
        UIManager.toUI(UIName.CreateRoom);
    }
}