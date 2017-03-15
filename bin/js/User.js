/*
* 用户;
*/
var User = (function () {
    function User(gameroom, usertype) {
        this.cardsnum = [];
        this.cards = [];
        this.cardspos = [];
        this.gameroom = gameroom;
        this.usertype = usertype;
    }
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
    User.prototype.setSitdown = function (sitdown) {
        this.sitdown = sitdown;
        if (sitdown) {
            this.user.visible = true;
        }
        else {
            this.user.visible = false;
        }
    };
    User.prototype.setUserInfo = function (name, head, money) {
        this.namestr = name;
        this.uname.text = name;
        this.headstr = head;
        this.head.width = this.head.width;
        this.head.height = this.head.height;
        this.head.skin = head;
        this.moneynum = money;
        this.money.text = money.toString();
    };
    User.prototype.setMaker = function () {
        this.countdown = 0;
        //创建遮罩对象
        this.masksprite = new Laya.Sprite();
        //画一个圆形的遮罩区域
        // this.masksprite.graphics.drawPie(50,70,160,0,0,"#ff0000");
        this.umask.mask = this.masksprite;
    };
    User.prototype.startCountDown = function () {
        this.masksprite.graphics.clear();
        Laya.timer.loop(50, this, this.reloadCountDown);
        this.umask.visible = true;
    };
    User.prototype.reloadCountDown = function () {
        this.countdown += 2;
        if (this.countdown > 360) {
            this.countdown = 0;
            this.endCountDown();
            return;
        }
        this.masksprite.graphics.drawPie(50, 70, 160, 270, 270 + this.countdown, "#ff0000");
    };
    User.prototype.endCountDown = function () {
        Laya.timer.clear(this, this.reloadCountDown);
        this.umask.visible = false;
        this.gameroom.endCountDown();
    };
    //手动终止
    User.prototype.manualEndCountDown = function () {
        this.countdown = 0;
        Laya.timer.clear(this, this.reloadCountDown);
        this.umask.visible = false;
    };
    User.prototype.addMoney = function (money) {
        this.moneynum += money;
        this.money.text = this.moneynum.toString();
    };
    return User;
}());
//# sourceMappingURL=User.js.map