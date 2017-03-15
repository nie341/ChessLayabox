/*
* 游戏房间;
*/
class GameRoom extends ui.gameroomUI{
    constructor(){
        super();
        this.init();
        this.initNpc();
        this.initUser();
        this.initUserBut();
        this.initState();

        this.gnpc.shuffleCards(this.cardsall);
        this.gnpc.distributeCards(this.users);
        this.gnpc.addRound();
        // this.gusermy.startCountDown();
        this.initCountDownIndex();
    }

    public gnpc:GameNpc;
    public guserleft01:User;
    public guserleft02:User;
    public guserright01:User;
    public guserright02:User;
    public gusermy:User;
    public users:Array<User>;

    public userbut01:UserBut;
    public userbut02:UserBut;
    public userbut03:UserBut;
    public userbut04:UserBut;
    public userbut05:UserBut;
    public userbuts:Array<UserBut>;

    public selectl01:SelectLeft;
    public selectl02:SelectLeft;
    public selectr01:SelectRight;
    public selectr02:SelectRight;
    public selectrs:Array<View>;

    public frames:Array<Laya.Image>;

    public cardsall:number = 0;

    public countdownindex:number = 0;

    public ubutpos:Array<[number,number]>;
    /**加码变量 */
    public showAddChip:boolean;
    /**血拼状态 */
    public showShopping:boolean;
    /**自动下注*/ 
    public isAutoBet:boolean;
    /**添加筹码提示框 */
    public addchip:AddChipDialog;
    public fires:Array<Laya.Animation>; 

    init():void{
        this.gnpc = new GameNpc(this);
        this.gnpc.npc = this.npc ;

        this.guserleft01 = this.toUser(this.userleft01,this.umaskleft01,this.uqileft01,UserType.Left01);
        this.guserleft01.xian = this.uxianleft01;
        var l01x = this.guserleft01.user.x+this.guserleft01.user.width;
        var l01y = this.guserleft01.user.y;
        for(var i = 0 ; i < 3 ; i ++){
                this.guserleft01.cardspos.push([l01x+10+i*20,l01y]);
        }

        this.guserleft02 = this.toUser(this.userleft02,this.umaskleft02,this.uqileft02,UserType.Left02);
        this.guserleft02.xian = this.uxianleft02;
        var l02x = this.guserleft02.user.x+this.guserleft02.user.width;
        var l02y = this.guserleft02.user.y;
        for(var i = 0 ; i < 3 ; i ++){
                this.guserleft02.cardspos.push([l02x+10+i*20,l02y]);
        }

        this.guserright01 = this.toUser(this.userright01,this.umaskright01,this.uqiright01,UserType.Right01);
        this.guserright01.xian = this.uxianright01;
        var r01x = this.guserright01.user.x-110;
        var r01y = this.guserright01.user.y;
        for(var i = 0 ; i < 3 ; i ++){
                this.guserright01.cardspos.push([r01x+10+i*20,r01y]);
        }

        this.guserright02 = this.toUser(this.userright02,this.umaskright02,this.uqiright02,UserType.Right02);
        this.guserright02.xian = this.uxianright02;
        var r02x = this.guserright02.user.x-110;
        var r02y = this.guserright02.user.y;
        for(var i = 0 ; i < 3 ; i ++){
                this.guserright02.cardspos.push([r02x+10+i*20,r02y]);
        }

        this.gusermy = this.toUser(this.usermy,this.umaskmy,this.uqimy,UserType.My);
        this.gusermy.xian = this.uxianmy;
        var myx = this.gusermy.user.x;
        var myy = this.gusermy.user.y+this.gusermy.user.height+10;
        for(var i = 0 ; i < 3 ; i ++){
                this.gusermy.cardspos.push([myx+10+i*30,myy]);
        }

        this.users = [];
        this.users.push(this.guserleft01);
        this.users.push(this.guserleft02);
        this.users.push(this.gusermy);
        this.users.push(this.guserright02);
        this.users.push(this.guserright01);
        for(var i = 0 ; i < this.users.length;i++){
            this.users[i].xian.visible = false;
            this.users[i].qi.visible = false;
            this.users[i].countdownindex = i;
        }

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
        this.userbuts = [];
        this.userbuts.push(this.userbut01);
        this.userbuts.push(this.userbut02);
        this.userbuts.push(this.userbut03);
        this.userbuts.push(this.userbut04);
        this.userbuts.push(this.userbut05);

        this.ubutpos = [];
        this.ubutpos.push([this.userbut01.userbut.x,this.userbut01.userbut.y]);
        this.ubutpos.push([this.userbut02.userbut.x,this.userbut02.userbut.y]);
        this.ubutpos.push([this.userbut03.userbut.x,this.userbut03.userbut.y]);
        this.ubutpos.push([this.userbut04.userbut.x,this.userbut04.userbut.y]);
        this.ubutpos.push([this.userbut05.userbut.x,this.userbut05.userbut.y]);
        
        this.lookcards.visible = false;
        this.lookcards.on(Laya.Event.CLICK,this,this.onLookCards);

        this.selectrs = [];
        this.selectl01 = new SelectLeft();
        this.selectl01.x = this.userleft01.x;
        this.selectl01.y = this.userleft01.y;
        this.selectl01.zOrder = 1001;
        this.guserleft01.select = this.selectl01;
        this.addChild(this.selectl01);
        this.selectl01.on(Laya.Event.CLICK,this,this.onSelectl01Click);
        this.selectrs.push(this.selectl01);
        this.selectl02 = new SelectLeft();
        this.selectl02.x = this.userleft02.x;
        this.selectl02.y = this.userleft02.y;
        this.selectl02.zOrder = 1001;
        this.guserleft02.select = this.selectl02;
        this.addChild(this.selectl02);
        this.selectl02.on(Laya.Event.CLICK,this,this.onSelectl02Click);
        this.selectrs.push(this.selectl02);
        this.selectr01 = new SelectRight();
        this.selectr01.x = this.userright01.x-160;
        this.selectr01.y = this.userright01.y;
        this.selectr01.zOrder = 1001;
        this.guserright01.select = this.selectr01;
        this.addChild(this.selectr01);
        this.selectr01.on(Laya.Event.CLICK,this,this.onSelectr01Click);
        this.selectrs.push(this.selectr01);
        this.selectr02 = new SelectRight();
        this.selectr02.x = this.userright02.x-160;
        this.selectr02.y = this.userright02.y;
        this.selectr02.zOrder = 1001;
        this.guserright02.select = this.selectr02;
        this.addChild(this.selectr02);
        this.selectr02.on(Laya.Event.CLICK,this,this.onSelectr02Click);
        this.selectrs.push(this.selectr02);
        for(var i = 0 ; i < this.selectrs.length;i++){
            this.selectrs[i].visible = false;
        }

        this.frames = [];
        this.frames.push(this.uframel01);
        this.frames.push(this.uframel02);
        this.frames.push(this.uframer01);
        this.frames.push(this.uframer02);
        this.guserleft01.frame = this.uframel01;
        this.guserleft02.frame = this.uframel02;
        this.guserright01.frame = this.uframer01;
        this.guserright02.frame = this.uframer02;
        for(var i = 0 ; i < this.frames.length;i++){
            this.frames[i].visible = false;
        }

        this.showAddChip = false;
        
    }
    initNpc():void{
        this.gnpc.tips01 = this.tips01;
        this.gnpc.tips02 = this.tips02;
        this.gnpc.chippool = this.chippool;
        this.gnpc.round = this.round;
        this.gnpc.setTips("","底注300，单注上限6000");
        this.gnpc.initdChip();
        this.gnpc.setRound(0);
    }
    initState():void{
        /**加码变量 */
        this.showAddChip = false;
        /**血拼状态 */
        this.showShopping = false;
        /**自动下注*/ 
        this.isAutoBet = false;
    }
    //转换成User对象
    toUser(fromuser:ui.userUI,umask:Laya.Image,qi:Laya.Label,usertype:UserType):User{
        var touser:User = new User(this,usertype);
        touser.user = fromuser;
        touser.bg = fromuser.bg;
        touser.head = fromuser.head;
        touser.uname = fromuser.uname;
        touser.money = fromuser.money;
        touser.umask = umask;
        touser.umask.visible = false;
        touser.setMaker();
        touser.qi = qi;
        return touser;
    }
    //转换成UserBut对象
    toUserBut(frombut:ui.ubutUI):UserBut{
        var userbut:UserBut = new UserBut();
        userbut.userbut = frombut;
        userbut.but = frombut.but;
        userbut.butimg = frombut.butimg;
        userbut.buttext = frombut.buttxt;
        userbut.butname = frombut.butname;
        return userbut;
    }

    initUser():void{
        this.guserleft01.setSitdown(false);
        // this.guserleft01.setUserInfo("测试用户1","head/1.png",1000);
        // this.guserleft01.setSitdown(true);

        this.guserleft02.setUserInfo("测试用户2","head/2.png",100000);
        this.guserleft02.setSitdown(true);

        this.guserright01.setSitdown(false);
        // this.guserright01.setUserInfo("测试用户3","head/3.png",1000);
        // this.guserright01.setSitdown(true);

        this.guserright02.setSitdown(false);
        // this.guserright02.setUserInfo("测试用户4","head/4.png",1000);
        // this.guserright02.setSitdown(true);

        this.gusermy.setUserInfo("玩家1","head/2.png",500000);
        this.gusermy.setSitdown(true);

        for(var  i = 0 ; i <  this.users.length ; i ++){
            var user = this.users[i];
            if(user.sitdown){
                this.cardsall += 3;
                user.userstate = UserState.HoldCardsWait;
                user.user.alpha = 1;
            }
        }
        // console.log("this.cardsall:",this.cardsall);
    }
    initUserBut():void{
        for(var i = 0 ; i <  this.userbuts.length ; i ++ ){
               var userbut = this.userbuts[i].userbut;
               userbut.visible = false;
            }
    }
    userAI():void{
        var user = this.countDownUser();
        user.manualEndCountDown();
        if(user.moneynum > this.gnpc.currentchip){
           this.bet();
           Laya.timer.once(500,this,this.nextUser);
        }else{
            this.discardCards();
        }
    }
    //清空用户状态属性
    clearUser():void{
        for(var i = 0 ; i < this.users.length ; i ++){
            this.users[i].userstate = UserState.DefaultCards;
            this.users[i].qi.visible = false;
        }
    }
    /**
     * 展开用户按钮
     */
    spreadUserBut():void{
        if(this.gusermy.userstate == UserState.HoldCardsWait){
            this.userbut01.userbut.visible = true;
            this.userbut01.setUserBut("game/ubut01.png","",false,"弃牌");
            this.userbut02.userbut.visible = false;
            this.userbut03.userbut.visible = false;
            this.userbut04.userbut.visible = false;
            this.userbut05.userbut.visible = true;
            var but5text = "自动跟注";
            if(this.isAutoBet == true){
                but5text = "取消跟注"
            }
            this.userbut05.setUserBut("game/ubut05.png",this.gnpc.currentchip.toString(),false,but5text);
        }else if(this.gusermy.userstate == UserState.HoldCardsCountDown){
            this.userbut01.userbut.visible = true;
            this.userbut01.setUserBut("game/ubut01.png","",false,"弃牌");
            this.userbut02.userbut.visible = true;
            this.userbut02.setUserBut("game/ubut02.png","1万",false,"血拼");
            this.userbut03.userbut.visible = true;
            this.userbut03.setUserBut("game/ubut03.png","",true,"加注");
            this.userbut04.userbut.visible = true;
            this.userbut04.setUserBut("game/ubut04.png",this.gnpc.currentchip.toString(),false,"比牌");
            this.userbut05.userbut.visible = true;
            this.userbut05.setUserBut("game/ubut05.png",this.gnpc.currentchip.toString(),false,"跟注");
        }
        var fromx = (Laya.stage.width-this.usermy.width)/2;
        var fromy = this.usermy.y+this.usermy.height-this.userbut01.userbut.height;
        for(var i = 0 ; i <  this.userbuts.length ; i ++ ){
            var userbut = this.userbuts[i].userbut;
            userbut.x = fromx;
            userbut.y = fromy;
        }
        for(var i = 0 ; i <  this.userbuts.length ; i ++ ){
            var userbut = this.userbuts[i].userbut;
            if(userbut.visible == true){
                var tox = this.ubutpos[i][0];
                var toy = this.ubutpos[i][1];
                Laya.Tween.to(userbut,{x:tox,y:toy},500,null,Laya.Handler.create(this,this.spreadUserButEnd,[userbut]));
            }
        }
    }
    /**
     * 展开按钮动画结束回调
     */
    spreadUserButEnd(userbut:View):void{
         userbut.visible = true;
    }
    /**
     * 收起按钮
     */
    retractUserBut():void{
        console.log("收起用户按钮");
            var tox = (Laya.stage.width-this.usermy.width)/2;
            var toy = this.usermy.y+this.usermy.height-this.userbut01.userbut.height;
           for(var i = 0 ; i <  this.userbuts.length ; i ++ ){
               var userbut = this.userbuts[i].userbut;
                Laya.Tween.to(userbut,{x:tox,y:toy},500,null,Laya.Handler.create(this,this.retractUserButEnd,[userbut]));
            }
    }
    /**
     * 收起按钮动画结束回调
     */
    retractUserButEnd(userbut:View):void{
        userbut.visible = false;
    }
    //弃牌
    onBut01Click(e:Laya.Event):void{
        console.log("onBut01Click");
        this.discardCards();
        this.lookcards.visible = false;
        this.retractUserBut();
        Laya.SoundManager.playSound("sound/qipai.mp3");
    }
    //血拼
    onBut02Click(e:Laya.Event):void{
        // console.log("onBut02Click");
        this.retractUserBut();
        this.startShopping();
        Laya.SoundManager.playSound("sound/xuepin.mp3");
    }
    //加注
    onBut03Click(e:Laya.Event):void{
        // console.log("onBut03Click");
        // this.retractUserBut();
        if(this.showAddChip ){
            this.showAddChip  = false;
            this.addchip.close();
        }else{
            this.showAddChip = true;
            var addchip:AddChipDialog = new AddChipDialog(this);
            addchip.y = this.ubut02.y-addchip.height-20;
            addchip.anchorX = 0.5;
            addchip.x = Laya.stage.width/2;
            addchip.scale(0.8,0.8);
            this.addChild(addchip);
            this.addchip = addchip;
        }
    }
    //比牌
    onBut04Click(e:Laya.Event):void{
        // console.log("onBut04Click");
        this.retractUserBut();
        this.gusermy.manualEndCountDown();
        this.showSelectUser();
        Laya.SoundManager.playSound("sound/bipai.mp3");
    }
    //自动跟注 取消跟注 跟注
    onBut05Click(e:Laya.Event):void{
        console.log("onBut05Click usertate:",this.gusermy.userstate);
        if(this.gusermy.userstate == UserState.HoldCardsCountDown){
            this.myBet();
            Laya.SoundManager.playSound("sound/genzhu.mp3");
        }else if(this.gusermy.userstate == UserState.HoldCardsWait){
            if(this.isAutoBet == true){
                this.isAutoBet = false;
            }else{
                this.isAutoBet = true;
            }
            var but5text = "自动跟注";
            if(this.isAutoBet == true){
                but5text = "取消跟注"
            }
            this.userbut05.setUserBut("game/ubut05.png",this.gnpc.currentchip.toString(),false,but5text);
        }
    }
    /**
     * 用户下注
     */
    myBet():void{
        this.retractUserBut();
        this.gusermy.manualEndCountDown();
        this.bet();
        this.nextUser();
    }

    //看牌
    onLookCards(e:Laya.Event):void{
        // console.log("onLookCards");
        this.lookcards.visible = false;
        var tox = this.gusermy.cardspos[0][0];
        var toy = this.gusermy.cardspos[0][1];
        for(var  i = 0 ; i < this.gusermy.cards.length ; i ++){
            // console.log(this.gusermy.cards[i].index);
            Laya.Tween.to(this.gusermy.cards[i],{x:tox,y:toy},300,null,Laya.Handler.create(this,this.onLookCardsAni,[this.gusermy.cards[i]]));
        }
        Laya.SoundManager.playSound("sound/kaipai.mp3");
    }
    //显示点击看牌
    showLookCards():void{
          this.lookcards.visible = true;
          this.lookcards.zOrder = 100;
          var user = this.countDownUser();
          if(user.usertype == UserType.My){
            this.gusermy.userstate = UserState.HoldCardsCountDown;
          }else{
            this.gusermy.userstate = UserState.HoldCardsWait;
          }
          this.spreadUserBut();
    }
    //点击看牌后的动画处理
    onLookCardsAni(cards:Cards):void{
        cards.setCardsState(CardsState.Positive);
        Laya.Tween.to(cards,{x:this.gusermy.cardspos[cards.cardspos][0],y:this.gusermy.cardspos[cards.cardspos][1]},300);
    }
    /**
     * 弃牌
     */
    discardCards():void{
        for(var  i = 0 ; i < this.users[this.countdownindex].cards.length ; i ++){
            var user = this.users[this.countdownindex];
            // console.log(this.gusermy.cards[i].index);
            user.cards[i].setCardsState(CardsState.Back);
            var tox = Laya.stage.width/2-user.cards[i].width/2;
            var toy = Laya.stage.height/2-user.cards[i].height/2-100;
            user.cards[i].scale(1.0,1.0);
            user.cards[i].startRotateAni();
            user.cards[i].pivotX = user.cards[i].width/2;
            user.cards[i].pivotY = user.cards[i].height/2;
            Laya.Tween.to(user.cards[i],{x:tox,y:toy},500,null,Laya.Handler.create(this,this.onDiscardCardsAni,[user.cards[i]]));
        }
        this.users[this.countdownindex].userstate = UserState.DiscardCards;
       if(this.users[this.countdownindex].usertype == UserType.My){
            this.gusermy.userstate = UserState.DiscardCards;
            this.retractUserBut();
            this.lookcards.visible = false;
            if(this.showAddChip){
                this.showAddChip  = false;
                this.addchip.close();
            }
        }
         if(this.isOneUser()){
                this.gnpc.recoveryChip();
                Laya.timer.once(600,this,this.restartGame);
            }
    }
    //移除牌
    removeCards(user:User):void{
        for(var  i = 0 ; i < user.cards.length ; i ++){
            // console.log(this.gusermy.cards[i].index);
            user.cards[i].setCardsState(CardsState.Back);
            var tox = Laya.stage.width/2-user.cards[i].width/2;
            var toy = Laya.stage.height/2-user.cards[i].height/2-100;
            user.cards[i].scale(1.0,1.0);
            user.cards[i].startRotateAni();
            user.cards[i].pivotX = user.cards[i].width/2;
            user.cards[i].pivotY = user.cards[i].height/2;
            Laya.Tween.to(user.cards[i],{x:tox,y:toy},500,null,Laya.Handler.create(this,this.onRemoveCardsAni,[user.cards[i]]));
        }
    }
    onRemoveCardsAni(cards:Cards):void{
        cards.removeSelf();
        cards.destroy();
    }
    restoreCards(user:User):void{
        for(var  i = 0 ; i < user.cards.length ; i ++){
            // console.log(this.gusermy.cards[i].index);
            user.cards[i].setCardsState(CardsState.Back);
            user.cards[i].scale(1.0,1.0);
            user.cards[i].x = user.cards[i].tablepos[0];
            user.cards[i].y = user.cards[i].tablepos[1];
        }
    }
    //弃牌动画结束
    onDiscardCardsAni(cards:Cards):void{
        cards.removeSelf();
        cards.destroy();
        if(cards.cardspos == 2){
            this.cardsToUser(cards).qi.visible = true;
        }
    }
    //隐藏按钮
    hideUserBut(ubut:View):void{
        ubut.visible = false;
    }
    //倒计时结束
    endCountDown():void{
        this.discardCards();
        this.nextUser();
    }
    //初始化倒计时索引
    initCountDownIndex():void{
        this.countdownindex = 2;
        var user = this.users[this.countdownindex];
        user.startCountDown();
        user.xian.visible = true;
        Laya.timer.once(1000,this,this.hideXian,[user.xian]);
    }
    //隐藏先icon
    hideXian(xian:Laya.Image):void{
        xian.visible = false;
    }
    /**
     * 下一个用户
     */
    nextUser():void{
        if(this.isOneUser()){
            this.gnpc.recoveryChip();
            Laya.timer.once(600,this,this.restartGame);
            return;
        }
        if(this.isRoundEnd()){
            this.gnpc.recoveryChip();
            Laya.timer.once(600,this,this.restartGame);
            return;
        }
        this.countdownindex += 1;
        if(this.countdownindex > 4){
            this.countdownindex = 0;
            // Laya.timer.once(1000,this,this.restartGame);
            // return;
            if(this.showShopping){
                this.stopShopping();
            }
            this.gnpc.addRound();
        }
        var user = this.users[this.countdownindex];
        if(user.sitdown == false){
            this.nextUser();
            return;
        }
        user.startCountDown();
        if(user.usertype == UserType.My){
            this.gusermy.userstate = UserState.HoldCardsCountDown;
            if(this.isAutoBet){
                this.myBet();
            }else{
                this.spreadUserBut();
                Laya.SoundManager.playSound("sound/xiazhutip.mp3");
            }
        }else{
            this.gusermy.userstate = UserState.HoldCardsWait;
            this.spreadUserBut();
            Laya.timer.once(3000,this,this.userAI);
        }
    }
    /**
     * 重新开始
     */
    restartGame():void{
        this.countdownindex = 0;
        this.clearUser();
        this.gnpc.shuffleCards(this.cardsall);
        this.gnpc.distributeCards(this.users);
        // this.gusermy.startCountDown();
        this.initCountDownIndex();
        this.initUser();
        this.initUserBut();
        if(this.showShopping){
           this.stopShopping();
        }
        this.initState();
    }
    //根据当前的牌获得属于哪个用户
    cardsToUser(cards:Cards):User{
        if(cards.cardsuser == CardsUser.Left01){
            return this.guserleft01;
        }else if(cards.cardsuser == CardsUser.Left02){
            return this.guserleft02;
        }else if(cards.cardsuser == CardsUser.Right01){
            return this.guserright01;
        }else if(cards.cardsuser == CardsUser.Right02){
            return this.guserright02;
        }else if(cards.cardsuser == CardsUser.My){
            return this.gusermy;
        }
    }

    //正在倒计时的用户
    countDownUser():User{
        return this.users[this.countdownindex];
    }
    /**
     * 下注
     */
    bet():void{
        var user = this.countDownUser();
        if(this.showShopping){
            user.moneynum -= this.gnpc.shoppingchip;
            user.money.text = user.moneynum.toString();
            var schip:Chipbig = new Chipbig();
            schip.setMoney(this.gnpc.shoppingchip);
            schip.x = user.user.x+user.user.width/2;
            schip.y = user.user.y+user.user.height/2;
            var rot = Math.floor(Math.random() *360);
            schip.rotation = rot;
            this.addChild(schip);
            var tox = Math.floor(Math.random() * (Laya.stage.width-300 - 300) + 300);
            var toy = Math.floor(Math.random() * (500 - 320) + 320);
            Laya.Tween.to(schip,{x:tox,y:toy},500,null,Laya.Handler.create(this,this.onBetAni,[schip]));
            this.gnpc.addShoppingChipPool(schip);
        }else{
            user.moneynum -= this.gnpc.currentchip;
            user.money.text = user.moneynum.toString();
            var chip:Chip = new Chip();
            chip.setMoney(this.gnpc.currentchip);
            chip.x = user.user.x+user.user.width/2;
            chip.y = user.user.y+user.user.height/2;
            var rot = Math.floor(Math.random() *360);
            chip.rotation = rot;
            this.addChild(chip);
            var tox = Math.floor(Math.random() * (Laya.stage.width-300 - 300) + 300);
            var toy = Math.floor(Math.random() * (500 - 320) + 320);
            Laya.Tween.to(chip,{x:tox,y:toy},500,null,Laya.Handler.create(this,this.onBetAni,[chip]));
            this.gnpc.addChipPool(chip);
        }
        Laya.SoundManager.playSound("sound/chip.mp3");
    }
    //比牌
    showSelectUser():void{
        for(var i = 0 ; i < this.users.length ; i ++){
            var user = this.users[i];
            if(user.usertype != UserType.My&&user.sitdown&&user.userstate != UserState.DiscardCards){
                    this.users[i].select.visible = true;
            }
        }
    }

    onBetAni(chip:View):void{
        // var rot = Math.floor(Math.random() *360);
        // chip.rotation = rot;
    }
    onSelectl01Click(e:Laya.Event):void{
        console.log("onSelectl01Click");
        this.hideSelect();
        this.showPk(this.gusermy,this.guserleft01);
    }
    onSelectl02Click(e:Laya.Event):void{
        console.log("onSelectl02Click");
        this.hideSelect();
        this.showPk(this.gusermy,this.guserleft02);
    }
    onSelectr01Click(e:Laya.Event):void{
        console.log("onSelectr01Click");
        this.hideSelect();
        this.showPk(this.gusermy,this.guserright01);
    }
    onSelectr02Click(e:Laya.Event):void{
        console.log("onSelectr02Click");
        this.hideSelect();
        this.showPk(this.gusermy,this.guserright02);
    }
    //隐藏选择
    hideSelect():void{
        for(var i = 0 ; i < this.selectrs.length;i++){
            this.selectrs[i].visible = false;
        }
    }
    //显示pk
    showPk(user0:User,user1:User):void{
        Laya.SoundManager.playSound("sound/pk.mp3");
        var pk:Pk = new Pk(user0,user1,this);
        pk.y = Laya.stage.height/2;
        pk.anchorY = 0.5;
        this.addChild(pk);
    }
    //比拼牌结果
    competitionCardResults(user0:User,user1:User):void{
        var result = this.gnpc.loseOrWin(user0,user1);
        console.log("result:",result);
        var frame;
        if(user1.usertype == UserType.Left01){
            frame = this.uframel01;
            this.uframel01.visible = true;
        }else if(user1.usertype == UserType.Left02){
            frame = this.uframel02;
            this.uframel02.visible == true;
        }else if(user1.usertype == UserType.Right01){
            frame = this.uframer01;
            this.uframer01.visible = true;
        }else if(user1.usertype == UserType.Right02){
            frame = this.uframer02;
            this.uframer02.visible = true;
        }
        if(result == CardsResult.Win){
            user1.userstate = UserState.LoseCards;
        }
        for(var i = 0 ; i < user1.cards.length ; i ++){
            var cards = user1.cards[i];
            cards.scale(2,2);
            cards.x = frame.x+4;
            cards.y = frame.y+4;
            cards.setCardsState(CardsState.Positive);
            Laya.Tween.to(cards,{x:cards.x+i*38,y:cards.y},300,null,Laya.Handler.create(this,this.comCardResults,[cards,user1]));
        }
    }
    //比牌动画结束回调函数
    comCardResults(cards:Cards,user:User):void{
        if(cards.cardspos == 2){
            if(user.userstate == UserState.LoseCards){
                user.user.alpha = 0.5;
                this.removeCards(user);
            }else{
                this.restoreCards(user);
            }
            user.frame.visible = false;
            this.countdownindex = user.countdownindex;
            this.nextUser();
        }
    }
    /**
     * 回合是否结束
     */
    isRoundEnd():boolean{
        if(this.gnpc.currentround >= this.gnpc.maxround){
            return true;
        }else{
            return false;
        }
    }
    /**
     * 只剩一人
     */
    isOneUser():boolean{
        var alivenum = 0 ;//活着的人数，如果只有一个则游戏结束
        for(var i = 0 ; i < this.users.length ; i ++){
            var user = this.users[i];
            // console.log("user:",i,"sitdown:",user.sitdown,"userstate:",user.userstate);
            if(user.sitdown&&(user.userstate ==  UserState.HoldCardsWait||user.userstate ==  UserState.HoldCardsCountDown)){
                alivenum += 1;
            }
        }
        // console.log("持牌人数:",alivenum);
        if(alivenum <= 1){
            return true;
        }else{
            return false;
        }
    }
    //最后赢的用户
    winUser():User{
        var winuser;
        var aliveusers:Array<User> = [];
        for(var i = 0 ; i < this.users.length ; i ++){
            var user = this.users[i];
            console.log("user:",i,"sitdown:",user.sitdown,"userstate:",user.userstate);
            if(user.sitdown&&(user.userstate ==  UserState.HoldCardsWait||user.userstate ==  UserState.HoldCardsCountDown)){
               aliveusers.push(user);
            }
        }
        if(aliveusers.length > 1){
          for(var i = 0 ; i < aliveusers.length;i++){
              if(i < aliveusers.length-1){
                if(this.gnpc.loseOrWin(aliveusers[i],aliveusers[i+1]) == CardsResult.Win){
                    winuser = (aliveusers[i]);
                }else{
                    winuser = (aliveusers[i+1]);
                }
              }
            }
        }else{
            winuser = aliveusers[0];
        }
        return winuser;
    }
    //血拼
    startShopping():void{
        this.showShopping = true;
        this.fires = [];
        var wnum = Laya.stage.width/14;
        for(var i = 0 ; i < wnum; i ++){
            var fire:Laya.Animation = new Laya.Animation();
            fire.autoPlay = true;
            //通过动画文件设置数据
            fire.source = "fire.ani";
            fire.pos(i*14, Laya.stage.height-20);
            this.addChild(fire);
            this.fires.push(fire);

            var fire1:Laya.Animation = new Laya.Animation();
            fire1.autoPlay = true;
            //通过动画文件设置数据
            fire1.source = "fire.ani";
            fire1.pos(i*14, 20);
            this.addChild(fire1);
            this.fires.push(fire1);
        }

      
        this.bet();
        this.nextUser();
    }
    stopShopping():void{
        this.showShopping = false;
        for(var i = 0 ; i < this.fires.length ; i ++){
            var fire = this.fires[i];
            fire.removeSelf();
            fire.destroy();
        }
    }
}