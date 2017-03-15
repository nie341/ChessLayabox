var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
* 筹码;
*/
var Chip = (function (_super) {
    __extends(Chip, _super);
    function Chip() {
        return _super.call(this) || this;
    }
    Chip.prototype.setMoney = function (money) {
        this.moneynum = money;
        var index = Math.floor(Math.random() * (5 - 1) + 1);
        // console.log(index);
        this.bg.skin = "chip/chip0" + index + ".png";
        this.money.text = money.toString();
    };
    return Chip;
}(ui.chipUI));
//# sourceMappingURL=Chip.js.map