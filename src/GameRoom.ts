/*
* 游戏房间;
*/
class GameRoom extends ui.gameroomUI{
    constructor(){
        super();
        this.init();
        this.initNpc();
        this.testUser();
        this.reloadUserBut();
    }

    public gnpc:GameNpc;
    public guserleft01:User;
    public guserleft02:User;
    public guserright01:User;
    public guserright02:User;
    public gusermy:User;

    public userbut01:UserBut;
    public userbut02:UserBut;
    public userbut03:UserBut;
    public userbut04:UserBut;
    public userbut05:UserBut;

    init():void{
        this.gnpc = new GameNpc();
        this.gnpc.npc = this.npc ;
        this.guserleft01 = this.toUser(this.userleft01);
        this.guserleft02 = this.toUser(this.userleft02);
        this.guserright01 = this.toUser(this.userright01);
        this.guserright02 = this.toUser(this.userright02);
        this.gusermy = this.toUser(this.usermy);

        this.userbut01 = this.toUserBut(this.ubut01);
        this.userbut02 = this.toUserBut(this.ubut02);
        this.userbut03 = this.toUserBut(this.ubut03);
        this.userbut04 = this.toUserBut(this.ubut04);
        this.userbut05 = this.toUserBut(this.ubut05);
        this.ubut01.on(Laya.Event.CLICK,this,this.onBut01Click);
        this.ubut02.on(Laya.Event.CLICK,this,this.onBut02Click);
        this.ubut03.on(Laya.Event.CLICK,this,this.onBut03Click);
        this.ubut04.on(Laya.Event.CLICK,this,this.onBut04Click);
        this.ubut05.on(Laya.Event.CLICK,this,this.onBut05Click);
    }
    initNpc():void{
        this.gnpc.tips01 = this.tips01;
        this.gnpc.tips02 = this.tips02;
        this.gnpc.chippool = this.chippool;
        this.gnpc.round = this.round;
        this.gnpc.setTips("","底注300，单注上限6000");
        this.gnpc.setChippool(0);
        this.gnpc.setRound(0);
    }
    toUser(fromuser:ui.userUI):User{
        var touser:User = new User();
        touser.user = fromuser;
        touser.bg = fromuser.bg;
        touser.head = fromuser.head;
        touser.uname = fromuser.uname;
        touser.money = fromuser.money;
        return touser;
    }
    toUserBut(frombut:ui.ubutUI):UserBut{
        var userbut:UserBut = new UserBut();
        userbut.userbut = frombut;
        userbut.but = frombut.but;
        userbut.butimg = frombut.butimg;
        userbut.buttext = frombut.buttxt;
        userbut.butname = frombut.butname;
        return userbut;
    }

    testUser():void{
        this.guserleft01.setVacancy(false);
        this.guserleft02.setUserInfo("测试用户1","head/1.png",1000);
        this.guserright01.setVacancy(false);
        this.guserright02.setVacancy(false);
        this.gusermy.setUserInfo("玩家1","head/2.png",5000);
    }

    reloadUserBut():void{
        this.userbut01.setUserBut("game/ubut01.png","",false,"弃牌");
        this.userbut02.userbut.visible = false;
        this.userbut03.userbut.visible = false;
        this.userbut04.userbut.visible = false;
        this.userbut05.setUserBut("game/ubut05.png","300",false,"自动跟注");
    }
    onBut01Click(e:Laya.Event):void{
        console.log("onBut01Click");
    }
    onBut02Click(e:Laya.Event):void{
        console.log("onBut02Click");
    }
    onBut03Click(e:Laya.Event):void{
        console.log("onBut03Click");
    }
    onBut04Click(e:Laya.Event):void{
        console.log("onBut04Click");
    }
    onBut05Click(e:Laya.Event):void{
        console.log("onBut05Click");
    }
}