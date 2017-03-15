var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
* name;
*/
var AddChipDialog = (function (_super) {
    __extends(AddChipDialog, _super);
    function AddChipDialog(gameroom) {
        var _this = _super.call(this) || this;
        _this.gameroom = gameroom;
        _this.init();
        return _this;
    }
    AddChipDialog.prototype.init = function () {
        this.but01.on(Laya.Event.CLICK, this, this.onBut01Click);
        this.but02.on(Laya.Event.CLICK, this, this.onBut02Click);
        this.but03.on(Laya.Event.CLICK, this, this.onBut03Click);
        this.but04.on(Laya.Event.CLICK, this, this.onBut04Click);
    };
    AddChipDialog.prototype.onBut01Click = function (e) {
        this.gameroom.gnpc.addChip(300);
        this.gameroom.myBet();
        this.gameroom.showAddChip = false;
        Laya.SoundManager.playSound("sound/jiazhu.mp3");
        this.close();
    };
    AddChipDialog.prototype.onBut02Click = function (e) {
        this.gameroom.gnpc.addChip(500);
        this.gameroom.myBet();
        this.gameroom.showAddChip = false;
        Laya.SoundManager.playSound("sound/jiazhu.mp3");
        this.close();
    };
    AddChipDialog.prototype.onBut03Click = function (e) {
        this.gameroom.gnpc.addChip(800);
        this.gameroom.myBet();
        this.gameroom.showAddChip = false;
        Laya.SoundManager.playSound("sound/jiazhu.mp3");
        this.close();
    };
    AddChipDialog.prototype.onBut04Click = function (e) {
        this.gameroom.gnpc.addChip(1000);
        this.gameroom.myBet();
        this.gameroom.showAddChip = false;
        Laya.SoundManager.playSound("sound/jiazhu.mp3");
        this.close();
    };
    return AddChipDialog;
}(ui.addchipUI));
//# sourceMappingURL=AddChipDialog.js.map