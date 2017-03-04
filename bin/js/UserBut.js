/*
*用户按钮
*/
var UserBut = (function () {
    function UserBut() {
    }
    UserBut.prototype.setUserBut = function (butskin, buttext, butimg, butname) {
        this.but.skin = butskin;
        this.buttext.text = buttext;
        this.butimg.visible = butimg;
        this.butname.text = butname;
    };
    return UserBut;
}());
//# sourceMappingURL=UserBut.js.map