/*
* 用户;
*/
class User{
    constructor(){

    }
    //属性
    public user:View;
    public bg:Laya.Image;
    public head:Laya.Image;
    public uname:Laya.Label;
    public money:Laya.Label;

    //是否空缺 vacancy
    public vacancy:boolean;
    //用户名
    public namestr:string;
    //头像
    public headstr:string;
    //金钱
    public moneynum:number;
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
    setVacancy(isVacancy:boolean):void{
        this.vacancy = isVacancy;
        this.user.visible = this.vacancy;
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
}