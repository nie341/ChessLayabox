/*
* name;
*/
class Login extends ui.loginUI{
    private username:string;
    constructor(){
        super();
        NetworkManager.getInstance().connectPomelo();
        this.login.on(Laya.Event.CLICK,this,this.onLogin)
    }
    onLogin(e:Laya.Event):void{
        var user = this.user.text;
        var room = this.room.text;
        this.username = user;
        GameData.getInstance().myuser = user;
        // var socket = SocketManager.getInstance();
        // socket.sendLogin(user,pwd);
        NetworkManager.getInstance().onJoin(room,user,this.onJoinCallback);
    }

    onJoinCallback(data:any):void{
         console.log(data.room);
         console.log(data.users)
         GameData.getInstance().room = data.room;
         GameData.getInstance().users = data.users;
         UIManager.toUI(UIName.GameRoom);
    }
}