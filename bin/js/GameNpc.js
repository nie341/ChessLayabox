/*
* 游戏npc;
*/
var GameNpc = (function () {
    function GameNpc() {
        this.init();
    }
    //函数
    GameNpc.prototype.init = function () {
        this.maxround = 15;
        this.allchip = 0;
    };
    //洗牌
    //发牌
    //设置回合
    GameNpc.prototype.setRound = function (round) {
        this.currentround = round;
        this.round.text = "第" + round + "/" + this.maxround + "轮";
    };
    GameNpc.prototype.setChippool = function (chip) {
        this.allchip += chip;
        this.chippool.text = this.allchip.toString();
    };
    GameNpc.prototype.setTips = function (tips1, tips2) {
        this.tips01.text = tips1;
        this.tips02.text = tips2;
    };
    return GameNpc;
}());
//# sourceMappingURL=GameNpc.js.map