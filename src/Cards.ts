/*
* 牌;
*/
class Cards extends Laya.Sprite{
    constructor(){
        super();
    }
    //属性
  
    //索引
    public index:number;
    //点数
    public value:CardsValue;
    //花色
    public stype:CardsStype;

    public state:CardsState;

    public cardsuser:CardsUser;

    public cardspos:number;
    //牌旋转角度
    public cardsrotation:number;
    public rotationnum:number;
    //牌桌上的位置
    public tablepos:[number,number];

    setIndex(index:number,state:CardsState):void{
        this.index = index;
        if(index >= 0 && index <= 12){
            this.stype = CardsStype.Fangkuai;
        }else if(index >= 13 && index <= 25){
            this.stype = CardsStype.Caohua;
        }else if(index >= 26 && index <= 38){
            this.stype = CardsStype.Hongxin;
        }else if(index >= 39 && index <= 51){
            this.stype = CardsStype.Heitao;
        }
        if(index == 0||index == 13||index == 26||index == 39){
            this.value = CardsValue.P2
        }else if(index == 1||index == 14||index == 27||index == 40){
            this.value = CardsValue.P3
        }else if(index == 2||index == 15||index == 28||index == 41){
            this.value = CardsValue.P4
        }else if(index == 3||index == 16||index == 29||index == 42){
            this.value = CardsValue.P5
        }else if(index == 4||index == 17||index == 30||index == 43){
            this.value = CardsValue.P6
        }else if(index == 5||index == 18||index == 31||index == 44){
            this.value = CardsValue.P7
        }else if(index == 6||index == 19||index == 32||index == 45){
            this.value = CardsValue.P8
        }else if(index == 7||index == 20||index == 33||index == 46){
            this.value = CardsValue.P9
        }else if(index == 8||index == 21||index == 34||index == 47){
            this.value = CardsValue.P10
        }else if(index == 9||index == 22||index == 35||index == 48){
            this.value = CardsValue.PJ
        }else if(index == 10||index == 23||index == 36||index == 49){
            this.value = CardsValue.PQ
        }else if(index == 11||index == 24||index == 37||index == 50){
            this.value = CardsValue.PK
        }else if(index == 12||index == 25||index == 38||index == 51){
            this.value = CardsValue.PA
        }
        this.state = state;
        this.reloadCards();
    }

    setCardsState(state:CardsState):void{
        this.state = state;
        this.reloadCards();
    }

    reloadCards():void{
        if(this.state == CardsState.Back){
            this.loadImage("cards/back.png");
        }else if(this.state == CardsState.Positive){
            this.loadImage("cards/"+this.index+".png");
        }
    }

    startRotateAni():void{
        this.cardsrotation = 0;
        this.rotationnum = 0;
        Laya.timer.loop(50,this,this.rotateAni);
    }
    rotateAni():void{
        this.cardsrotation += 60;
        this.rotationnum += 1;
        // if(this.rotationnum > 10){
        //     this.endRotateAni();
        //     return;
        // }
        this.rotation = this.cardsrotation;
    }

    endRotateAni():void{
        Laya.timer.clear(this,this.rotateAni);
    }
    
}

const enum CardsState{
    Back,//背面
    Positive//正面
}

const enum CardsStype {
    Heitao,//黑桃
	Fangkuai,//方块
	Caohua,//草花
	Hongxin//红心
}
const enum CardsValue {
    P2,
	P3,
	P4,
	P5,
    P6,
    P7,
    P8,
    P9,
    P10,
    PJ,
    PQ,
    PK,
    PA
}

const enum CardsUser {
    Left01,
    Left02,
    My,
    Right01,
    Right02
}