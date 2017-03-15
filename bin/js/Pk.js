var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
* name;
*/
var Pk = (function (_super) {
    __extends(Pk, _super);
    function Pk(user0, user1, gameroom) {
        var _this = _super.call(this) || this;
        _this.gameroom = gameroom;
        _this.user_0 = user0;
        _this.user_1 = user1;
        _this.init(user0, user1);
        return _this;
    }
    Pk.prototype.init = function (user0, user1) {
        this.user0.uname.text = user0.namestr;
        this.user0.head.width = this.user0.head.width;
        this.user0.head.height = this.user0.head.height;
        this.user0.head.skin = user0.headstr;
        this.user0.money.text = user0.moneynum.toString();
        this.user1.uname.text = user1.namestr;
        this.user1.head.width = this.user1.head.width;
        this.user1.head.height = this.user1.head.height;
        this.user1.head.skin = user1.headstr;
        this.user1.money.text = user1.moneynum.toString();
        Laya.timer.once(500, this, this.pkClose);
        var result = this.gameroom.gnpc.loseOrWin(this.user_0, this.user_1);
        if (result == 1 /* Win */) {
            this.user1.alpha = 0.5;
        }
        else if (result == 0 /* Lose */) {
            this.user0.alpha = 0.5;
        }
    };
    Pk.prototype.pkClose = function () {
        this.gameroom.competitionCardResults(this.user_0, this.user_1);
        this.close();
    };
    return Pk;
}(ui.pkUI));
//# sourceMappingURL=Pk.js.map