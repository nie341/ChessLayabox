/*
* name;
*/
class CreateRoom extends ui.createroomUI{
    constructor(){
        super();
        this.create.on(Laya.Event.CLICK,this,this.onCreateRoom);
        SocketEmitter.register("socket", this.onResponse, this); 
    }
    onCreateRoom(event:Laya.Event):void{
        console.log("onCreateRoom");
        var socket = SocketManager.getInstance();
 
    }
    onResponse(eventName:string,userid:number):void{  
        console.log(eventName, userid);  
        // var gamedata = GameData.getInstance();
        // gamedata.roomid = roomid;
        // UIManager.toUI("gameroom");
    }
}

