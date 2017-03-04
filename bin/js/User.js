/*
* 用户;
*/
var User = (function () {
    function User() {
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
    User.prototype.setVacancy = function (isVacancy) {
        this.vacancy = isVacancy;
        this.user.visible = this.vacancy;
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
    return User;
}());
//# sourceMappingURL=User.js.map