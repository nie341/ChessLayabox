/*
* name;
*/
class Pk extends ui.pkUI{
    constructor(user0:User,user1:User,gameroom:GameRoom){
        super();
        this.gameroom = gameroom;
        this.user_0 = user0;
        this.user_1 = user1;
        this.init(user0,user1);
    }

    public gameroom:GameRoom;
    public user_0:User;
    public user_1:User;

    init(user0:User,user1:User):void{
        this.user0.uname.text = user0.namestr;
        this.user0.head.width = this.user0.head.width;
        this.user0.head.height = this.user0.head.height;
        this.user0.head.skin = user0.headstr;
        this.user0.money.text = user0.moneynum.toString();

        this.user1.uname.text = user1.namestr;
        this.user1.head.width = this.user1.head.width;
        this.user1.head.height = this.user1.head.height;
        this.user1.head.skin = user1.headstr;
        this.user1.money.text = user1.moneynum.toString();
        Laya.timer.once(500,this,this.pkClose);

        var result =  this.gameroom.gnpc.loseOrWin(this.user_0,this.user_1);
        if(result == CardsResult.Win){
            this.user1.alpha = 0.5;
        }else if(result == CardsResult.Lose){
            this.user0.alpha = 0.5;
        }
    }
    pkClose():void{
        this.gameroom.competitionCardResults(this.user_0,this.user_1);
        this.close();
    }

}