/*
* 游戏npc;
*/
class GameNpc{
    constructor(){
        this.init();
    }
    public npc:Laya.Image;
    public tips01:Laya.Label;
    public tips02:Laya.Label;
    //筹码池
    public chippool:Laya.Label;

    public allchip:number;
    //第几回合
    public round:Laya.Label;
    //当前回合
    public currentround:number;
    //最大回合
    public maxround:number;
    //函数

    init():void{
        this.maxround = 15;
        this.allchip = 0;
    }

    //洗牌

    //发牌

    //设置回合
    setRound(round:number):void{
        this.currentround = round;
        this.round.text = "第"+round+"/"+this.maxround+"轮";
    }

    setChippool(chip:number):void{
        this.allchip += chip;
        this.chippool.text = this.allchip.toString();
    }

    setTips(tips1:string,tips2:string):void{
        this.tips01.text = tips1;
        this.tips02.text = tips2;
    }
}