/*
*用户按钮
*/
class UserBut {
    constructor(){

    }

    public userbut:View;
    public but:Laya.Image;
    public butname:Laya.Label;
    public buttext:Laya.Label;
    public butimg:Laya.Image;

    setUserBut(butskin:string,buttext:string,butimg:boolean,butname:string):void{
        this.but.skin = butskin;
        this.buttext.text = buttext;
        this.butimg.visible = butimg;
        this.butname.text = butname;
    }
}