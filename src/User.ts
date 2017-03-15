/*
* 用户;
*/
class User{
    constructor(gameroom:GameRoom,usertype:UserType){
        this.gameroom = gameroom;
        this.usertype = usertype;
    }
    //属性
    public gameroom:GameRoom;
    public user:View;
    public bg:Laya.Image;
    public head:Laya.Image;
    public uname:Laya.Label;
    public money:Laya.Label;
    public umask:Laya.Image;
    public xian:Laya.Image;
    public qi:Laya.Label;
    public frame:Laya.Image;
    //比牌选择框
    public select:View;
    //是否空缺 vacancy
    public sitdown:boolean;
    //用户名
    public namestr:string;
    //头像
    public headstr:string;
    //金钱
    public moneynum:number;

    public cardsnum:Array<number> = [];
    public cards:Array<Cards> = [];
    public cardspos:Array<[number,number]> = [];
    //倒计时
    public countdown:number;
    //当前用户的倒计时索引
    public countdownindex:number;

    public masksprite:Laya.Sprite;

    public userstate:UserState;

    public usertype:UserType;
    //牌型
    public cardsType:CardsType;

    //未看牌 已看牌  弃牌
    //函数
    //看牌
    //弃牌
    //自动跟注
    //取消自动跟注
    //血拼
    //加注
    //比牌
    //跟注
    //亮牌

    //设置是否空缺
    setSitdown(sitdown:boolean):void{
        this.sitdown = sitdown;
        if(sitdown){
            this.user.visible = true;
        }else{
            this.user.visible = false;
        }

    }

    setUserInfo(name:string,head:string,money:number):void{
        this.namestr = name;
        this.uname.text = name;
        this.headstr = head;
        this.head.width = this.head.width;
        this.head.height = this.head.height;
        this.head.skin = head;
        this.moneynum = money;
        this.money.text = money.toString();
    }

    setMaker():void{
        this.countdown = 0;
        //创建遮罩对象
        this.masksprite = new Laya.Sprite();
        //画一个圆形的遮罩区域
        // this.masksprite.graphics.drawPie(50,70,160,0,0,"#ff0000");
        this.umask.mask = this.masksprite;
    }
    startCountDown():void{
        this.masksprite.graphics.clear();
        Laya.timer.loop(50,this,this.reloadCountDown);
        this.umask.visible = true;
    }
    reloadCountDown():void{
        this.countdown += 2;
        if(this.countdown > 360){
            this.countdown = 0;
            this.endCountDown();
            return;
        }
        this.masksprite.graphics.drawPie(50,70,160,270,270+this.countdown,"#ff0000");
    }
    endCountDown():void{
        Laya.timer.clear(this,this.reloadCountDown);
        this.umask.visible = false;
        this.gameroom.endCountDown();
    }
    //手动终止
    manualEndCountDown():void{
        this.countdown = 0;
         Laya.timer.clear(this,this.reloadCountDown);
        this.umask.visible = false;       
    }

    addMoney(money:number):void{
        this.moneynum += money;
        this.money.text = this.moneynum.toString();
    }
}
/**用户状态 */
const enum UserState{
    /**默认 */
    DefaultCards,//
    /**持牌等待 */
    HoldCardsWait,//
    /**持牌倒计时 */
    HoldCardsCountDown,//
    /**弃牌 */
    DiscardCards,//
    /**比牌失败*/
    LoseCards

}

const enum UserType {
    Left01,
    Left02,
    My,
    Right01,
    Right02
}