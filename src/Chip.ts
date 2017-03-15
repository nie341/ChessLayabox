/*
* 筹码;
*/
class Chip extends ui.chipUI{
    constructor(){
        super();
    }
    //属性
    //金额
    public moneynum:number;

    public setMoney(money:number){
        this.moneynum = money;
        var index = Math.floor(Math.random() * (5 - 1) + 1);
        // console.log(index);
        this.bg.skin = "chip/chip0"+index+".png";
        this.money.text = money.toString();
    }
}