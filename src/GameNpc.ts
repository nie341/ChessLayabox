/*
* 游戏npc;
*/
class GameNpc{
    constructor(gameroom:GameRoom){
        this.gameroom = gameroom;
        this.init();
    }
    public gameroom:GameRoom;

    public npc:Laya.Image;
    public tips01:Laya.Label;
    public tips02:Laya.Label;
    //筹码池
    public chippool:Laya.Label;
    public chippoolnum:number;    
    //当前每注
    public currentchip:number;
    /**血拼筹码 */
    public shoppingchip:number;
    //第几回合
    public round:Laya.Label;
    //当前回合
    public currentround:number;
    //最大回合
    public maxround:number;


    public cardsarray:Array<number>;
    /**筹码池 */
    public chipsarray:Array<Chip>;
    /**血拼筹码池 */
    public schipsarray:Array<Chipbig>;
    //函数

    init():void{
        this.maxround = 15;
        this.chippoolnum = 0;
        this.currentround = 0;
        this.currentchip = 300;
    }
   initdChip():void{
        this.chipsarray = []
        this.schipsarray = [];
        this.chippoolnum = 0;
        this.chippool.text = this.chippoolnum.toString();
    }
    //洗牌
    shuffleCards(cardsnum:number):void{
        var pokerIndex:number[]  = [0,1,2,3,4,5,6,7,8,9,10,
            11,12,13,14,15,16,17,18,19,20,
            21,22,23,24,25,26,27,28,29,
            30,31,32,33,34,35,36,37,38,39,40,
            41,42,43,44,45,46,47,48,49,50,
            51];
            var k = 0;
            var temp = 0;
            for(var i=0;i<pokerIndex.length;i++)
            {
                k = Math.floor(Math.random()*(pokerIndex.length-i));
                temp = pokerIndex[i];
                pokerIndex[i] = pokerIndex[k];
                pokerIndex[k] = temp;
            }
            this.cardsarray = [];
        for(var i = 0 ; i < cardsnum ; i ++){
            this.cardsarray.push(pokerIndex[pokerIndex.length-1]);
            pokerIndex.pop();
        }
        // console.log(this.cardsarray);

        this.chipsarray = [];
        this.schipsarray = [];
    }
    //发牌
    distributeCards(users:Array<User>):void{
        for(var j = 0 ; j < users.length ; j ++){
            var user = users[j];
            user.cardsnum = [];
            user.cards = [];
        }
        for(var i = 0 ; i < 3 ; i ++){
            for(var j = 0 ; j < users.length ; j ++){
                var user = users[j];
                // console.log("sitdown:",user.sitdown);
                if(user.sitdown){
                    user.cardsnum.push(this.cardsarray[this.cardsarray.length-1]);
                    this.cardsarray.pop();
                }
            }
        }
        var timed = 0;
        for(var j = 0 ; j < 3 ; j++){
            for(var i = 0 ; i < users.length ; i ++){
                    var user = users[i];
                    if(user.sitdown){
                        // for(var j = 0 ; j < user.cardsnum.length ; j++){
                            var cardsuser:CardsUser;
                            if(i == 0){
                                cardsuser = CardsUser.Left01;
                            }else if(i == 1){
                                cardsuser = CardsUser.Left02;
                            }else if(i == 2){
                                cardsuser = CardsUser.My;
                            }else if(i == 3){
                                cardsuser = CardsUser.Right02;
                            }else if(i == 4){
                                cardsuser = CardsUser.Right01;
                            }
                            var cards:Cards = new Cards();
                            cards.setIndex(user.cardsnum[j],CardsState.Back);
                            // console.log("distributeCards:",cards.index);
                            cards.cardsuser = cardsuser;
                            cards.cardspos = j;
                            cards.x = Laya.stage.width/2-cards.width/2;
                            cards.y = Laya.stage.height/2-cards.height/2-100;
                            this.gameroom.addChild(cards);
                            user.cards.push(cards);
                            Laya.timer.once(100+timed*100,this,this.disCards);
                            Laya.Tween.to(cards,{x:user.cardspos[j][0],y:user.cardspos[j][1]},300,null,Laya.Handler.create(this,this.onCardsAni,[cards]),100+timed*100);
                            timed += 1;
                        // }
                    }
            }
        }
    }

    disCards():void{
        console.log("disCards");
        Laya.SoundManager.playSound("sound/fapai.mp3");
    }
    //设置回合
    setRound(round:number):void{
        this.currentround = round;
        this.round.text = "第"+round+"/"+this.maxround+"轮";
    }

    setTips(tips1:string,tips2:string):void{
        this.tips01.text = tips1;
        this.tips02.text = tips2;
    }
    //发牌动画结束
    onCardsAni(cards:Cards):void{
        cards.tablepos = [cards.x,cards.y];
        if(cards.cardsuser == CardsUser.My){
            cards.scale(1.2,1.2);
            if(cards.cardspos == 2){
                this.onLookCards();
            }
        }
    }

    onLookCards():void{
        console.log("onLookCards");
        this.gameroom.showLookCards();
    }
    //添加筹码
    addChipPool(chip:Chip):void{
        this.chipsarray.push(chip);
        this.chippoolnum += chip.moneynum;
        this.chippool.text = this.chippoolnum.toString();
    }
    /**
     * 添加血拼筹码
     */
    addShoppingChipPool(chip:Chipbig):void{
        this.schipsarray.push(chip);
        this.chippoolnum += chip.moneynum;
        this.chippool.text = this.chippoolnum.toString();
    }
    //加注
    addChip(chip:number):void{
        this.currentchip = chip;
    }
    //添加回合
    addRound():void{
        this.currentround += 1;
        this.round.text = "第"+this.currentround+"/15轮";
    }
    //比牌
    loseOrWin(user0:User,user1:User):CardsResult{
        user0.cardsType = this.getCardsResult(user0);
        user1.cardsType = this.getCardsResult(user1);
        if(user0.cardsType > user1.cardsType){
            return CardsResult.Win;
        }else if(user0.cardsType < user1.cardsType){
             return CardsResult.Lose;
        }else{
            var poker0Array = user0.cards;
                poker0Array.sort(this.cardsSort)
                var user0_poker0 =  poker0Array[0];
                var user0_poker1 =  poker0Array[1];
                var user0_poker2 =  poker0Array[2];
            var poker1Array = user1.cards;
                poker1Array.sort(this.cardsSort)
                var user1_poker0 =  poker1Array[0];
                var user1_poker1 =  poker1Array[1];
                var user1_poker2 =  poker1Array[2];
            if(user0_poker0.value > user1_poker0.value){
                return CardsResult.Win;
            }else if(user0_poker0.value < user1_poker0.value){
                return CardsResult.Lose;
            }else{
                    if(user0_poker1.value > user1_poker1.value){
                        return CardsResult.Win;
                    }else if(user0_poker1.value < user1_poker1.value){
                        return CardsResult.Lose;
                    }else{
                            if(user0_poker2.value > user1_poker2.value){
                                return CardsResult.Win;
                            }else if(user0_poker2.value < user1_poker2.value){
                                return CardsResult.Lose;
                            }else{
                                return CardsResult.Equality;
                            }
                    }
            }
        }
    }
    //获得用户的牌
    getCardsResult(user:User):CardsType{
            var pokerArray = [];
            for(var i = 0 ; i < user.cards.length;i++){
                var cards = new Cards();
                cards.value = user.cards[i].value;
                cards.stype = user.cards[i].stype;
                pokerArray.push(pokerArray);
            }
            pokerArray.sort(this.cardsSort)
            var poker0 =  pokerArray[0];
            var poker1 =  pokerArray[1];
            var poker2 =  pokerArray[2];
            // console.log(poker0.pnum);
            // console.log(poker1.pnum);
            // console.log(poker2.pnum);
            //豹子
            if(poker0.pnum == poker1.pnum 
                &&poker0.pnum == poker2.pnum 
                &&poker1.pnum  == poker2.pnum ){
                    user.cardsType = CardsType.Baozi;
            }else if(poker0.pstyle == poker1.pstyle 
                &&poker0.pstyle == poker2.pstyle 
                &&poker1.pstyle  == poker2.pstyle
                &&poker0.pnum == poker1.pnum-1
                &&poker0.pnum == poker2.pnum-2
                &&poker1.pnum == poker2.pnum-1){
                    user.cardsType = CardsType.Shunjin;
            }else if(poker0.pstyle == poker1.pstyle 
                &&poker0.pstyle == poker2.pstyle 
                &&poker1.pstyle  == poker2.pstyle){
                    user.cardsType = CardsType.Jinhua;
            }else if(poker0.pnum == poker1.pnum-1
                &&poker0.pnum == poker2.pnum-2
                &&poker1.pnum == poker2.pnum-1){
                    user.cardsType = CardsType.Shunzi;
            }else if(poker0.pnum == poker1.pnum
                ||poker0.pnum == poker2.pnum
                ||poker1.pnum == poker2.pnum){
                    user.cardsType = CardsType.Duizi;
            }else{
                user.cardsType = CardsType.Danzhang;
            }
            console.log("pokerType:",user.cardsType);
            return user.cardsType;
    }

    cardsSort(a:Cards,b:Cards):number
    {
        return a.value - b.value;
    }

    getPokerType(type:CardsType):string{
        if(type == CardsType.Baozi){
            return "豹子";
        }else if(type == CardsType.Shunjin){
            return "顺金";
        }else if(type == CardsType.Jinhua){
            return "金花";
        }else if(type == CardsType.Shunzi){
            return "顺子";
        }else if(type == CardsType.Duizi){
            return "对子";
        }else{
            return "单张";
        }
    }
    /**
     * 回收筹码
     */
    recoveryChip():void{
        var user = this.gameroom.winUser();
        var tox = user.user.x+user.user.width/2;
        var toy = user.user.y+user.user.height/2;
        for(var i = 0 ; i < this.chipsarray.length;i ++ ){
            var chip = this.chipsarray[i];
            Laya.Tween.to(chip,{x:tox,y:toy},500,null,Laya.Handler.create(this,this.onRecoveryChipAni,[chip]))
            Laya.SoundManager.playSound("sound/chip.mp3"); 
        }
        this.chipsarray = [];
        for(var i = 0 ; i < this.schipsarray.length;i ++ ){
            var schip = this.schipsarray[i];
            Laya.Tween.to(schip,{x:tox,y:toy},500,null,Laya.Handler.create(this,this.onRecoveryChipAni,[schip]))
            Laya.SoundManager.playSound("sound/chip.mp3");    
        }
        this.schipsarray = [];
        user.addMoney(this.chippoolnum);
        this.initdChip();
        this.setRound(0);
    }
    onRecoveryChipAni(chip:View):void{
        chip.removeSelf();
        chip.destroy();
    }
}

const enum CardsResult{
    Lose,//输
    Win,//赢
    Equality//平局
}

const enum CardsType{ 
    Danzhang,//单张：除以上牌型的牌。
    Duizi,//对子：扎金花中有两张同样大小的牌。 
    Shunzi,//顺子：三张花色不全相同的连牌。 
    Jinhua,//金花：三张花色相同的牌。
    Shunjin,//顺金：花色相同的三张连牌。 
    Baozi//豹子：三张同样大小的牌。
}