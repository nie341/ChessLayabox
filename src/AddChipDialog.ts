/*
* name;
*/
class AddChipDialog extends ui.addchipUI{
    constructor(gameroom:GameRoom){
        super();
        this.gameroom = gameroom;
        this.init()
    }
    public gameroom:GameRoom;

    init():void{
        this.but01.on(Laya.Event.CLICK,this,this.onBut01Click);
        this.but02.on(Laya.Event.CLICK,this,this.onBut02Click);
        this.but03.on(Laya.Event.CLICK,this,this.onBut03Click);
        this.but04.on(Laya.Event.CLICK,this,this.onBut04Click);
    }
    onBut01Click(e:Laya.Event):void{
        this.gameroom.gnpc.addChip(300);
        this.gameroom.myBet();
        this.gameroom.showAddChip = false;
        Laya.SoundManager.playSound("sound/jiazhu.mp3");
        this.close();
    }
    onBut02Click(e:Laya.Event):void{
        this.gameroom.gnpc.addChip(500);
        this.gameroom.myBet();
        this.gameroom.showAddChip = false;
        Laya.SoundManager.playSound("sound/jiazhu.mp3");
        this.close();
    }
    onBut03Click(e:Laya.Event):void{
        this.gameroom.gnpc.addChip(800);
        this.gameroom.myBet();
        this.gameroom.showAddChip = false;
        Laya.SoundManager.playSound("sound/jiazhu.mp3");
        this.close();
    }
    onBut04Click(e:Laya.Event):void{
        this.gameroom.gnpc.addChip(1000);
        this.gameroom.myBet();
        this.gameroom.showAddChip = false;
        Laya.SoundManager.playSound("sound/jiazhu.mp3");
        this.close();
    }
}