var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
* 游戏房间;
*/
var GameRoom = (function (_super) {
    __extends(GameRoom, _super);
    function GameRoom() {
        var _this = _super.call(this) || this;
        _this.init();
        _this.initNpc();
        _this.testUser();
        _this.reloadUserBut();
        return _this;
    }
    GameRoom.prototype.init = function () {
        this.gnpc = new GameNpc();
        this.gnpc.npc = this.npc;
        this.guserleft01 = this.toUser(this.userleft01);
        this.guserleft02 = this.toUser(this.userleft02);
        this.guserright01 = this.toUser(this.userright01);
        this.guserright02 = this.toUser(this.userright02);
        this.gusermy = this.toUser(this.usermy);
        this.userbut01 = this.toUserBut(this.ubut01);
        this.userbut02 = this.toUserBut(this.ubut02);
        this.userbut03 = this.toUserBut(this.ubut03);
        this.userbut04 = this.toUserBut(this.ubut04);
        this.userbut05 = this.toUserBut(this.ubut05);
        this.ubut01.on(Laya.Event.CLICK, this, this.onBut01Click);
        this.ubut02.on(Laya.Event.CLICK, this, this.onBut02Click);
        this.ubut03.on(Laya.Event.CLICK, this, this.onBut03Click);
        this.ubut04.on(Laya.Event.CLICK, this, this.onBut04Click);
        this.ubut05.on(Laya.Event.CLICK, this, this.onBut05Click);
    };
    GameRoom.prototype.initNpc = function () {
        this.gnpc.tips01 = this.tips01;
        this.gnpc.tips02 = this.tips02;
        this.gnpc.chippool = this.chippool;
        this.gnpc.round = this.round;
        this.gnpc.setTips("", "底注300，单注上限6000");
        this.gnpc.setChippool(0);
        this.gnpc.setRound(0);
    };
    GameRoom.prototype.toUser = function (fromuser) {
        var touser = new User();
        touser.user = fromuser;
        touser.bg = fromuser.bg;
        touser.head = fromuser.head;
        touser.uname = fromuser.uname;
        touser.money = fromuser.money;
        return touser;
    };
    GameRoom.prototype.toUserBut = function (frombut) {
        var userbut = new UserBut();
        userbut.userbut = frombut;
        userbut.but = frombut.but;
        userbut.butimg = frombut.butimg;
        userbut.buttext = frombut.buttxt;
        userbut.butname = frombut.butname;
        return userbut;
    };
    GameRoom.prototype.testUser = function () {
        this.guserleft01.setVacancy(false);
        this.guserleft02.setUserInfo("测试用户1", "head/1.png", 1000);
        this.guserright01.setVacancy(false);
        this.guserright02.setVacancy(false);
        this.gusermy.setUserInfo("玩家1", "head/2.png", 5000);
    };
    GameRoom.prototype.reloadUserBut = function () {
        this.userbut01.setUserBut("game/ubut01.png", "", false, "弃牌");
        this.userbut02.userbut.visible = false;
        this.userbut03.userbut.visible = false;
        this.userbut04.userbut.visible = false;
        this.userbut05.setUserBut("game/ubut05.png", "300", false, "自动跟注");
    };
    GameRoom.prototype.onBut01Click = function (e) {
        console.log("onBut01Click");
    };
    GameRoom.prototype.onBut02Click = function (e) {
        console.log("onBut02Click");
    };
    GameRoom.prototype.onBut03Click = function (e) {
        console.log("onBut03Click");
    };
    GameRoom.prototype.onBut04Click = function (e) {
        console.log("onBut04Click");
    };
    GameRoom.prototype.onBut05Click = function (e) {
        console.log("onBut05Click");
    };
    return GameRoom;
}(ui.gameroomUI));
//# sourceMappingURL=GameRoom.js.map